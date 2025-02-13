import { Link } from "react-router-dom";
import { RestaurantI } from "../interfaces";
import { useRestaurantStore } from "../store/zustandStore";

type Props = {
  restaurant: RestaurantI;
};

export default function RestaurantCard({ restaurant }: Props) {
  const { favorites, setFavorites } = useRestaurantStore();
  const isFavorite = favorites.some((fav) => fav.id === restaurant.id);

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setFavorites(restaurant);
  };
  return (
    <Link to={`/details/${restaurant.id}`}>
      <div className="col mb-4" key={restaurant.id}>
        <div className="card h-100">
          <img
            src={restaurant.image}
            className="card-img-top img-fluid"
            alt={restaurant.businessname}
            style={{ height: "20vh", objectFit: "cover" }}
          />
          <i
            className={`favorite-icon ${
              isFavorite ? "fas fa-heart" : "far fa-heart"
            }`}
            onClick={handleFavoriteClick}
          />

          <div
            className="card-body "
            style={{ height: "20vh", objectFit: "cover" }}
          >
            <h5 className="card-title m-0 p-0 fw-bold">
              {restaurant.businessname}
            </h5>
            <p className="restaurant-type ">{restaurant.slug}</p>
            <p className="card-text m-0 p-0">Rating - {restaurant.reviews}</p>

            <span>Based on {restaurant.reviewsList.length} reviews</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
