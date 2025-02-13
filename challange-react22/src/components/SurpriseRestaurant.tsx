import { useNavigate } from "react-router-dom";
import { useRestaurantStore } from "../store/zustandStore";

export default function SurpriseRestaurant() {
  const { restaurants } = useRestaurantStore();
  const navigate = useNavigate();

  const handleSurprise = () => {
    if (restaurants.length > 0) {
      const randomIndex = Math.floor(Math.random() * restaurants.length);
      const randomRestaurant = restaurants[randomIndex];

      navigate(`/details/${randomRestaurant.id}`);
    }
  };

  return (
    <div className="container text-center">
      <h2 className="mt-4 mb-4">DON'T KNOW WHAT TO EAT?</h2>
      <button className="btn" onClick={handleSurprise}>
        Surprise me!
      </button>
    </div>
  );
}
