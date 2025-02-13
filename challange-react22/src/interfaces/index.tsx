export interface RestaurantsI {
  restaurants: RestaurantI[];
}

export interface RestaurantI {
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  reviewsList: ReviewsListI[];
  website?: string;
}

export interface ReviewsListI {
  id: number;
  author: string;
  comment: string;
  stars: number;
}
