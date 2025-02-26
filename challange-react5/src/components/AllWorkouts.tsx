import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Workout } from "../types";
import { db } from "../firebase";
import {
  collection,
  DocumentData,
  FirestoreError,
  onSnapshot,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import WorkoutItem from "./WorkoutItem";
import { AuthContext } from "../context/AuthContext";

export default function AllWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;
    const unsubscribe = fetchWorkouts(user.uid);

    return () => unsubscribe();
  }, [user]);

  const fetchWorkouts = (userId: string) => {
    const workoutsCollection = collection(db, "workouts");
    const userWorkoutsQuery = query(
      workoutsCollection,
      where("userId", "==", userId)
    );
    return onSnapshot(
      userWorkoutsQuery,
      (snapshot: QuerySnapshot<DocumentData, DocumentData>) => {
        const workoutsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Workout[];
        setWorkouts(workoutsData);
      },
      (error: FirestoreError) => console.error(error.message)
    );
  };

  return (
    <div>
      <Navbar />
      {workouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          type={workout.type}
          duration={workout.duration}
          intensity={workout.intensity}
        />
      ))}
    </div>
  );
}
