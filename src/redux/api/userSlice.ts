import { USERS_URL } from "../constants";
import api from "./api";

// Define the User interface to represent user data
interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

// API response when registering or updating user data
interface RegisterApiResponse {
  success: boolean;
  user: User | null;
  message: string;
}

// API response when logging in
interface LoginApiResponse {
  success: boolean;
  user: User | null;
  message: string;
}

// API response when logging out
interface LogoutApiResponse {
  success: boolean;
  message: string;
}

// API response when updating user profile
interface ProfileApiResponse {
  success: boolean;
  user: User | null;
  message: string;
}

// API response when fetching multiple users
interface UsersApiResponse {
  success: boolean;
  users: User[];
  message: string;
}

// API response when fetching a single user's details
interface UserDetailApiResponse {
  success: boolean;
  user: User | null;
  message: string;
}

// Request payload for registering a new user
interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

// Request payload for logging in
interface LoginRequest {
  email: string;
  password: string;
}

// Request payload for updating user profile
interface ProfileRequest {
  username: string;
  email: string;
  password?: string; // Password is optional when updating the profile
}

// Request payload for updating a user
interface UpdateUserRequest {
  useId: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

// Define the endpoints for user-related operations
export const userSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    //
    // Mutation to register a new user
    register: builder.mutation<RegisterApiResponse, RegisterRequest>({
      query: (data) => ({
        url: USERS_URL,
        method: "POST",
        body: data,
      }),
    }),

    // Mutation to log in a user
    login: builder.mutation<LoginApiResponse, LoginRequest>({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),

    // Mutation to log out a user
    logout: builder.mutation<LogoutApiResponse, void>({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),

    // Mutation to update a user's profile
    profile: builder.mutation<ProfileApiResponse, ProfileRequest>({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"], // Invalidate the "User" tag to refresh cached user data
    }),

    // Query to fetch all users
    getUsers: builder.query<UsersApiResponse, void>({
      query: () => ({
        url: USERS_URL,
      }),
      providesTags: ["User"], // Provide the "User" tag for caching
      keepUnusedDataFor: 5, // Keep the data cached for 5 seconds
    }),

    // Mutation to delete a user
    deleteUser: builder.mutation<LogoutApiResponse, string>({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"], // Invalidate the "User" tag to refresh cached user data
    }),

    // Query to fetch a user's details by ID
    getUserDetails: builder.query<UserDetailApiResponse, string>({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5, // Keep the data cached for 5 seconds
    }),

    // Mutation to update a user's information
    updateUser: builder.mutation<RegisterApiResponse, UpdateUserRequest>({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"], // Invalidate the "User" tag to refresh cached user data
    }),
  }),
  overrideExisting: false, // Do not override existing endpoints
});

// Export hooks for the endpoints
export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} = userSlice;
