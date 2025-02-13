import AllRestaurants from "../components/AllRestaurants";
import Cuisines from "../components/Cuisines";
import PopularRestaurants from "../components/PopularRestaurants";
import SurpriseRestaurant from "../components/SurpriseRestaurant";

export default function HomePage() {
  return (
    <div>
      <SurpriseRestaurant />
      <PopularRestaurants />
      <Cuisines />
      <AllRestaurants />
    </div>
  );
}
