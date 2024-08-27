import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  brand: string;
  image: string;
  price: number;
  description: string;
  name: string;
}

interface favoriteState {
  favorites: Product[];
}

const initialState: favoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Product>) => {
      // Check if the product is not already in favorites
      const exists = state.favorites.some(
        (product) => product._id === action.payload._id,
      );

      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      // Remove the product with the matching ID
      state.favorites = state.favorites.filter(
        (product) => product._id !== action.payload,
      );
    },
    setFavorites: (state, action: PayloadAction<Product[]>) => {
      // Set the favorites from the payload (e.g., from localStorage)
      state.favorites = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoriteSlice.actions;

export const selectFavorites = (state: favoriteState) => state.favorites;

export default favoriteSlice.reducer;
