import { useRestaurantStore } from "../store/zustandStore";
import RestaurantCard from "./RestaurantCard";

export default function AllRestaurants() {
  const { restaurants } = useRestaurantStore();

  return (
    <>
      <div className="line"></div>
      <div className="container">
        <h2 className="mt-5 mb-5">ALL RESTAURANTS</h2>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>Loading restaurants...</p>
          )}
        </div>
      </div>
    </>
  );
}
