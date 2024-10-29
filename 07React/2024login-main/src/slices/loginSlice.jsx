import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeCookie, setCookie } from "../util/cookieUtil";

const initialState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) =>
  loginPost(param)
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie || initialState,
  reducers: {
    login: (state, action) => {
      console.log("로그인...ok!!!");
      console.log(action.payload);
      return { email: action.payload.email };
    },
    logout: () => {
      console.log("로그아웃...out!!!");
      removeCookie("member");
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, () => {
        console.log("fulfill");
        // console.log(action.payload)

        const payload = action.payload;
        if (!payload.error) {
          setCookie("member", JSON.stringify(payload), 1); // 하루간
        }

        return payload;
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
