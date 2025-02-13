import { useRestaurantStore } from "../store/zustandStore";
import RestaurantCard from "./RestaurantCard";

export default function Favourites() {
  const { favorites } = useRestaurantStore();
  return (
    <div>
      <div className="container">
        <h2 className="mt-5 mb-5 text-uppercase fw-bold">
          Your Favorite Restaurants
        </h2>
        {favorites.length === 0 ? (
          <p>No favorite restaurants added yet.</p>
        ) : (
          <div className="row">
            {favorites.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
