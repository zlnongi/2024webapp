import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) =>
  loginPost(param)
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log("로그인...ok!!!");
      console.log(action.payload);
      return { email: action.payload.email };
    },
    logout: () => {
      console.log("로그아웃...out!!!");
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, () => {
        console.log("fulfill");
      })
      .addCase(loginPostAsync.pending, () => {
        console.log("pending");
      })
      .addCase(loginPostAsync.rejected, () => {
        console.log("rejected");
      });
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
