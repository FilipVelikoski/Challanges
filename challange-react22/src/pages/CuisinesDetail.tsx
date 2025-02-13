import { useParams } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { useRestaurantStore } from "../store/zustandStore";

export default function CuisinesDetail() {
  const { type } = useParams<{ type: string }>();
  const { restaurants } = useRestaurantStore();

  const filteredRestaurants = restaurants.filter(
    (r) => r.restauranttype === type
  );
  return (
    <div>
      <div className="container">
        <h2 className="mt-5 mb-5 text-uppercase fw-bold">{type} restaurants</h2>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}
