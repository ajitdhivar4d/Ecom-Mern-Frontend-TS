import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const api = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Product", "Category", "Order", "User", "Products"],
  endpoints: () => ({}),
});

export default api;
