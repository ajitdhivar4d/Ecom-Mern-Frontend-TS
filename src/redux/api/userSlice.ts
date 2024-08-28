import { USERS_URL } from "../constants";
import api from "./api";

// Define the User interface to represent user data
interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

// API response interfaces
interface RegisterApiResponse {
  success: boolean;
  user: User | null;
  message: string;
}

interface LoginApiResponse {
  success: boolean;
  user: User | null;
  message: string;
}

interface LogoutApiResponse {
  success: boolean;
  message: string;
}

interface ProfileApiResponse {
  success: boolean;
  user: User | null;
  message: string;
}

interface UsersApiResponse {
  success: boolean;
  users: User[];
  message: string;
}

interface UserDetailApiResponse {
  success: boolean;
  user: User | null;
  message: string;
}

// Request payload interfaces
interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface ProfileRequest {
  username: string;
  email: string;
  password?: string;
}

interface UpdateUserRequest {
  userId: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

// Define the endpoints for user-related operations
export const userSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation to register a new user
    register: builder.mutation<RegisterApiResponse, RegisterRequest>({
      query: (data) => ({
        url: USERS_URL,
        method: "POST",
        body: data,
        credentials: "include", // Ensure cookies are included
      }),
    }),

    // Mutation to log in a user
    login: builder.mutation<LoginApiResponse, LoginRequest>({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    // Mutation to log out a user
    logout: builder.mutation<LogoutApiResponse, void>({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
        credentials: "include",
      }),
    }),

    // Mutation to update a user's profile
    profile: builder.mutation<ProfileApiResponse, ProfileRequest>({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    // Query to fetch all users
    getUsers: builder.query<UsersApiResponse, void>({
      query: () => ({
        url: USERS_URL,
        credentials: "include",
      }),
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),

    // Mutation to delete a user
    deleteUser: builder.mutation<LogoutApiResponse, string>({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),

    // Query to fetch a user's details by ID
    getUserDetails: builder.query<UserDetailApiResponse, string>({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),

    // Mutation to update a user's information
    updateUser: builder.mutation<RegisterApiResponse, UpdateUserRequest>({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
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
