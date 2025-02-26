import { Button } from "@mui/material";
import welcomeImage from "/images/heroBanner.jpeg";
import { useGoogleSignin } from "../hooks/useSignin";

export default function Welcome() {
  const { signinWithGoogle, isLoading } = useGoogleSignin();
  return (
    <div className="welcome-page">
      <div className="inner">
        <div className="image-container">
          <img src={welcomeImage} alt="Welcome" />
        </div>
        <div className="text-container">
          <h3>Your Fitness Journey Starts Here</h3>
          <Button
            variant="outlined"
            onClick={signinWithGoogle}
            style={{ width: "100%" }}
            disabled={isLoading}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
