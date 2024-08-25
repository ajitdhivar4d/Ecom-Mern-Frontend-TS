import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/auth/authSlice";
import { cartSlice } from "./features/cart/cartSlice";
import { favoriteSlice } from "./features/favorites/favoriteSlice";
import { shopSlice } from "./features/shop/shopSlice";
import api from "./api/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    favorites: favoriteSlice.reducer,
    shop: shopSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
