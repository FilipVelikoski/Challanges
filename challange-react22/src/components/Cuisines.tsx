import { Link } from "react-router-dom";
import { useRestaurantStore } from "../store/zustandStore";

export default function Cuisines() {
  const { restaurants } = useRestaurantStore();

  const uniqueCuisines = Array.from(
    new Set(restaurants.map((r) => r.restauranttype))
  );

  return (
    <>
      <div className="line"></div>
      <div className="container">
        <h2 className="mt-5 mb-5">CUISINES</h2>
        {uniqueCuisines.map((cuisine) => (
          <Link key={cuisine} to={`/cuisines/${cuisine}`}>
            <button className="btn-cuisine m-2">{cuisine}</button>
          </Link>
        ))}
      </div>
    </>
  );
}
