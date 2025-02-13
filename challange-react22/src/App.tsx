import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CuisinesPage from "./pages/CuisinesDetail";
import Favourites from "./components/Favourites";
import ErrorPage from "./pages/ErrorPage";

import { useEffect } from "react";
import { useRestaurantStore } from "./store/zustandStore";

function App() {
  const { fetchRestaurants, isDataFetched, loading, error } =
    useRestaurantStore();

  useEffect(() => {
    if (!isDataFetched) {
      fetchRestaurants();
    }
  }, [fetchRestaurants, isDataFetched]);

  if (loading) return <h1>Loading restaurants...</h1>;
  if (error) return <h1>An error occurred: {error}</h1>;

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/cuisines/:type" element={<CuisinesPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
