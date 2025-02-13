import { useRestaurantStore } from "../store/zustandStore";
import RestaurantCard from "./RestaurantCard";

export default function PopularRestaurants() {
  const { popularRestaurants } = useRestaurantStore();

  return (
    <>
      <div className="line"></div>
      <div className="container">
        <h2 className="mt-5 mb-5">OUR MOST POPULAR RESTAURANTS</h2>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {popularRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
}
