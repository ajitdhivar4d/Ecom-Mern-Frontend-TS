import { CATEGORY_URL } from "../constants";
import api from "./api";

// Define the Category interface to represent a category
interface Category {
  _id: string; // Unique identifier for the category
  name: string; // Name of the category
}

// Define the API response interface for a single category
interface CategoryApiResponse {
  success: boolean; // Indicates if the request was successful
  category?: Category; // Optional category data if the request is successful
  message: string; // Message providing additional information
}

// Define the API response interface for multiple categories
interface CategoriesApiResponse {
  success: boolean; // Indicates if the request was successful
  categories?: Category[]; // List of categories
  message: string; // Message providing additional information
}

// Define the request interface for updating a category
interface UpdateRequest {
  categoryId: string; // ID of the category to update
  updatedCategory: string; // New name for the category
}

// Create a slice for category-related endpoints
export const categoryApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation to create a new category
    createCategory: builder.mutation<CategoryApiResponse, string>({
      query: (newCategory) => ({
        url: CATEGORY_URL,
        method: "POST",
        body: { name: newCategory },
      }),
      // Optional: Add an optimistic update or onQueryStarted to update local cache
    }),

    // Mutation to update an existing category
    updateCategory: builder.mutation<CategoryApiResponse, UpdateRequest>({
      query: ({ categoryId, updatedCategory }) => ({
        url: `${CATEGORY_URL}/${categoryId}`,
        method: "PUT",
        body: { name: updatedCategory },
      }),
      // Optional: Add an optimistic update or onQueryStarted to update local cache
    }),

    // Mutation to delete a category
    deleteCategory: builder.mutation<CategoryApiResponse, string>({
      query: (categoryId) => ({
        url: `${CATEGORY_URL}/${categoryId}`,
        method: "DELETE",
      }),
      // Optional: Add an optimistic update or onQueryStarted to update local cache
    }),

    // Query to fetch all categories
    fetchCategories: builder.query<CategoriesApiResponse, void>({
      query: () => `${CATEGORY_URL}/categories`,
      // Optional: Configure cache behavior (e.g., refetching interval)
    }),
  }),
});

// Export hooks for using the queries and mutations in components
export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useFetchCategoriesQuery,
} = categoryApiSlice;
