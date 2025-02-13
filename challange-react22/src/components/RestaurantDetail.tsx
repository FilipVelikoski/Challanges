import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RestaurantI, ReviewsListI } from "../interfaces";
import { useRestaurantStore } from "../store/zustandStore";

export default function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<RestaurantI | null>(null);
  const { fetchRestaurants } = useRestaurantStore();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    fetch(`http://localhost:5001/restaurants/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Restaurant not found. Please check the ID.");
        }
        return response.json();
      })
      .then((data) => setRestaurant(data))
      .catch((error) => setError(error.message));
  }, [id]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurant) return;

    const newReview: ReviewsListI = {
      id: new Date().valueOf(),
      author: name,
      comment: comment,
      stars: stars,
    };

    const updatedReviews = [...restaurant.reviewsList, newReview];
    const newRating =
      updatedReviews.reduce((acc, review) => acc + review.stars, 0) /
      updatedReviews.length;

    const updatedRestaurant = {
      ...restaurant,
      reviewsList: updatedReviews,
      reviews: newRating,
    };

    fetch(`http://localhost:5001/restaurants/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRestaurant),
    })
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data);
        fetchRestaurants();
      })
      .catch((error) => console.error("Error updating review:", error));

    setName("");
    setComment("");
    setStars(3);
  };

  if (error) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">Oops! 😕</h2>
        <p>{error}</p>
        <Link to="/" className="btn btn-primary mt-3">
          Go Back to Home
        </Link>
      </div>
    );
  }

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  return (
    <div className="container">
      <h2 className="mt-5 mb-5 text-uppercase fw-bold">
        {restaurant.businessname}
      </h2>
      <div className="card">
        <img
          src={restaurant.image}
          className="card-img-top"
          alt={restaurant.businessname}
        />
        <div className="card-body">
          <p className="card-text m-0 p-0">
            Rating - {restaurant.reviews.toFixed(1)}
          </p>
          <span className="m-0 p-0">
            Based on {restaurant.reviewsList.length} reviews
          </span>
          <p className="card-text mt-3">{restaurant.phone}</p>
          <p className="card-text">{restaurant.email}</p>
          <p className="card-text">{restaurant.address}</p>
          <p className="card-text">
            {restaurant.parkinglot
              ? "We have parking"
              : "We don't have parking"}
          </p>
        </div>
      </div>

      <div className="reviews">
        <h3 className="mt-5 mb-5 fw-bold">REVIEWS</h3>
        {restaurant.reviewsList.length > 0 ? (
          restaurant.reviewsList.map((review) => (
            <div className="card mb-4" key={review.id}>
              <div className="card-body">
                <p className="card-text fw-bold">Author: {review.author}</p>
                <p className="card-text fw-bold">Message: {review.comment}</p>
                <p className="card-text fw-bold">Stars: {review.stars}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </div>

      <div className="reviews-form">
        <h3 className="mt-5 mb-5 fw-bold">REVIEW FORM</h3>
        <form onSubmit={handleReviewSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
          <label htmlFor="rating">Stars</label>
          <input
            type="range"
            name="rating"
            min="0"
            max="5"
            value={stars}
            onChange={(e) => setStars(Number(e.target.value))}
          />
          <p>{stars} Stars</p>
          <button className="btn btn-primary">Leave a review</button>
        </form>
      </div>
    </div>
  );
}
