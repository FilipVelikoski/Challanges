import {
  Box,
  FormControl,
  TextField,
  Select,
  Button,
  InputLabel,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import Navbar from "./Navbar";
import { useContext, useEffect, useState } from "react";
import { Intensity, Workout } from "../types";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export default function AddNewWorkout() {
  const [formData, setFormData] = useState<Partial<Workout>>({
    type: undefined,
    duration: 0,
    intensity: Intensity.Low,
  });
  const [workoutTypes, setWorkoutTypes] = useState<
    { id: string; name: string; description: string }[]
  >([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchWorkoutTypes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "workoutsTypes"));
        const types = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as { name: string; description: string }),
        }));
        setWorkoutTypes(types);
      } catch (error) {
        console.error("Error fetching workout types:", error);
      }
    };

    fetchWorkoutTypes();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }> | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    const { type, duration, intensity } = formData;
    if (!intensity) return;

    setLoading(true);

    try {
      const workoutsCollection = collection(db, "workouts");
      await addDoc(workoutsCollection, {
        type: type || "",
        duration,
        intensity,
        userId: user.uid,
      });

      setFormData({
        type: undefined,
        duration: 0,
        intensity: Intensity.Low,
      });
      navigate("/all-workouts");
    } catch (err) {
      console.error("Error adding workout", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Box
        component="form"
        onSubmit={handleCreate}
        sx={{
          maxWidth: 500,
          mx: "auto",
          mt: 4,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <FormControl fullWidth margin="normal">
          <InputLabel>Workout Type</InputLabel>
          <Select name="type" value={formData.type} onChange={handleChange}>
            {workoutTypes.length > 0 ? (
              workoutTypes.map((type) => (
                <MenuItem key={type.id} value={type.name}>
                  {type.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>Loading...</MenuItem>
            )}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Duration"
          name="duration"
          type="number"
          margin="normal"
          value={formData.duration}
          onChange={handleChange}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Intensity</InputLabel>
          <Select
            name="intensity"
            required
            value={formData.intensity}
            onChange={handleChange}
          >
            {Object.values(Intensity).map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {loading ? "Adding Workout..." : "Add Workout"}
        </Button>
      </Box>
    </>
  );
}
