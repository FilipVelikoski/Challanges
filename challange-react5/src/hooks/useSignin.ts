import { useState, useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth, googleProvider } from "../firebase";

export const useGoogleSignin = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const signinWithGoogle = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(
        auth,
        googleProvider.setCustomParameters({ prompt: "select_account" })
      );
      setUser(result.user);
      setIsLoading(false);
      navigate("/all-workouts");
    } catch (error) {
      setError((error as Error).message);
      setIsLoading(false);
    }
  };

  return { signinWithGoogle, error, isLoading };
};
