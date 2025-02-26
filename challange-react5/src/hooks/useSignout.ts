import { signOut } from "firebase/auth";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

export const useSignout = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const signout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);

      // on success
      setUser(null);
      setIsLoading(false);
      setError("");

      navigate("/");
    } catch (error) {
      // on error
      setError((error as Error).message);
      setIsLoading(false);
    }
  };

  return { signout, error, isLoading };
};
