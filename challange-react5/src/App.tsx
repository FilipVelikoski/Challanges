import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Welcome from "./components/Welcome";
import AllWorkouts from "./components/AllWorkouts";
import AddNewWorkout from "./components/AddNewWorkout";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/all-workouts" element={<AllWorkouts />} />
          <Route path="/add-new-workout" element={<AddNewWorkout />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
