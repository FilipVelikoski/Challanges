import { Intensity, WorkoutTypeName } from "../types";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "start",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

interface WorkoutItemProps {
  type: WorkoutTypeName;
  duration: number;
  intensity: Intensity;
}

export default function WorkoutItem({
  type,
  duration,
  intensity,
}: WorkoutItemProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={4}>
        <Item>
          <p>Type: {type}</p>
          <p>Duration: {duration}</p>
          <p>Intensity: {intensity}</p>
        </Item>
      </Stack>
    </Box>
  );
}
