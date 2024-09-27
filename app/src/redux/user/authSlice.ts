import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { log } from "console";

//auth with fake shop API
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    userData: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      {
        if (error instanceof Error) {
          return rejectWithValue(error.message);
        }
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  orders?: string[] | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  isLoading: false,
  error: null,
  orders: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
