import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

interface UserInfoState {
  success: boolean;
  user: User | null;
  message: string;
}

interface AuthState {
  userInfo: UserInfoState | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserInfoState>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
      localStorage.setItem("expirationTime", String(expirationTime));
    },

    logout: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectUserInfo = (state: RootState) => state.auth.userInfo;

export default authSlice.reducer;
