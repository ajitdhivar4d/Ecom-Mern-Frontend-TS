import { PRODUCT_URL } from "../constants";
import api from "./api";

// Define the request interface for fetching products with optional keyword filtering, pagination, and page size
interface GetProductsRequest {
  keyword?: string; // Optional keyword for search
  pageSize: number; // Number of products per page
  page: number; // Current page number
}

// Interface representing a product review
interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  user: string;
}

// Interface representing a product
interface Product {
  _id: string;
  name: string;
  image: string;
  brand: string;
  quantity: number;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
}

// Interface representing the API response for fetching a list of products
interface GetProductsApiResponse {
  success: boolean;
  products?: Product[]; // Optional array of products
  page?: number; // Optional current page number
  pages?: number; // Optional total number of pages
  hasMore?: boolean; // Optional flag indicating if there are more pages
  message: string; // Message related to the response
}

// Interface representing the API response for fetching a single product by ID
interface GetProductByIdApiResponse {
  success: boolean;
  product?: Product; // Optional single product object
  message: string; // Message related to the response
}

// Interface representing the API response for fetching all products without pagination
interface AllProductsApiResponse {
  success: boolean;
  products?: Product[]; // Optional array of all products
  message: string; // Message related to the response
}

// Interface representing the API response for fetching detailed information about a single product
interface GetProductDetailsApiResponse {
  success: boolean;
  product?: Product; // Optional detailed product object
  message: string; // Message related to the response
}

// Interface representing the API response for deleting a product
interface DeleteProductApiResponse {
  success: boolean;
  data?: Product; // Optional data of the deleted product
  message: string; // Message related to the response
}

// Interface representing the request payload for creating a new review for a product
interface CreateReviewRequest {
  productId: string;
  rating: string;
  comment: string;
}

// Interface representing the API response for fetching top-rated products
interface GetTopProductsApiResponse {
  success: boolean;
  products?: Product[]; // Optional array of top products
  message: string; // Message related to the response
}

// Interface representing the API response for fetching newly added products
interface GetNewProductsApiResponse {
  success: boolean;
  products?: Product[]; // Optional array of new products
  message: string; // Message related to the response
}

// Interface representing the API response for fetching filtered products based on criteria
interface GetFilteredProductsApiResponse {
  success: boolean;
  data?: Product[]; // Optional array of filtered products
  message: string; // Message related to the response
}

// Enum for query tags to ensure consistency and prevent string literals
enum QueryTags {
  Products = "Products",
}

// Define the API slice with endpoints for product-related operations
export const productApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch a list of products with pagination and optional keyword filtering
    getProducts: builder.query<GetProductsApiResponse, GetProductsRequest>({
      query: ({ keyword = "", pageSize, page }) => ({
        url: `${PRODUCT_URL}?keyword=${encodeURIComponent(
          keyword,
        )}&pageSize=${pageSize}&page=${page}`,
      }),
      keepUnusedDataFor: 5, // Cache time for unused data in seconds
      providesTags: [QueryTags.Products], // Tag to invalidate or refetch the cache if needed
    }),

    // Fetch a single product by its ID
    getProductById: builder.query<GetProductByIdApiResponse, string>({
      query: (productId) => `${PRODUCT_URL}/${productId}`,
    }),

    // Fetch all products without pagination
    allProducts: builder.query<AllProductsApiResponse, void>({
      query: () => `${PRODUCT_URL}/allProducts`,
      providesTags: [QueryTags.Products], // Tag to invalidate or refetch the cache if needed
    }),

    // Fetch detailed information about a single product
    getProductDetails: builder.query<GetProductDetailsApiResponse, string>({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5, // Cache time for unused data in seconds
    }),

    // Delete a product by its ID
    deleteProduct: builder.mutation<DeleteProductApiResponse, string>({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
        method: "DELETE",
      }),
    }),

    // Create a new review for a product
    createReview: builder.mutation<string, CreateReviewRequest>({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data.productId}/reviews`,
        method: "POST",
        body: data, // Send the review data in the request body
      }),
    }),

    // Fetch the top-rated products
    getTopProducts: builder.query<GetTopProductsApiResponse, void>({
      query: () => `${PRODUCT_URL}/top`,
      keepUnusedDataFor: 5, // Cache time for unused data in seconds
    }),

    // Fetch the newly added products
    getNewProducts: builder.query<GetNewProductsApiResponse, void>({
      query: () => `${PRODUCT_URL}/new`,
      keepUnusedDataFor: 5, // Cache time for unused data in seconds
    }),

    // Fetch filtered products based on criteria (e.g., checked categories, price range)
    getFilteredProducts: builder.query<GetFilteredProductsApiResponse, any>({
      query: ({ checked, radio }) => ({
        url: `${PRODUCT_URL}/filtered-products`,
        method: "POST",
        body: { checked, radio }, // Send filtering criteria in the request body
      }),
    }),
  }),
});

// Export hooks for using the queries in components
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAllProductsQuery,
  useGetProductDetailsQuery,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
  useGetNewProductsQuery,
  useGetFilteredProductsQuery,
} = productApiSlice;
