import { create } from "zustand";
import { RestaurantI } from "../interfaces";

interface RestaurantStore {
  restaurants: RestaurantI[];
  isDataFetched: boolean;
  loading: boolean;
  error: string | null;
  popularRestaurants: RestaurantI[];
  favorites: RestaurantI[];
  fetchRestaurants: () => void;
  setFavorites: (restaurant: RestaurantI) => void;
}

export const useRestaurantStore = create<RestaurantStore>((set) => ({
  restaurants: [],
  isDataFetched: false,
  loading: false,
  error: "",
  popularRestaurants: [],
  favorites: [],
  fetchRestaurants: async () => {
    set({ loading: true, error: "" });
    try {
      const response = await fetch("http://localhost:5001/restaurants");
      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }

      const data: RestaurantI[] = await response.json();
      const sortedRestaurants = [...data]
        .sort((a, b) => b.reviewsList.length - a.reviewsList.length)
        .slice(0, 10);

      set({
        restaurants: data,
        popularRestaurants: sortedRestaurants,
        isDataFetched: true,
        loading: false,
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  setFavorites: (restaurant) => {
    set((state) => {
      const isAlreadyFavorite = state.favorites.some(
        (fav) => fav.id === restaurant.id
      );
      return {
        favorites: isAlreadyFavorite
          ? state.favorites.filter((fav) => fav.id !== restaurant.id)
          : [...state.favorites, restaurant],
      };
    });
  },
}));
