import { createSlice } from "@reduxjs/toolkit";

type IUserState = {
  user: {
    _id: string;
    email: string;
    name: string;
    photoUrl?: string;
    role: string;
  } | null;
  loading: boolean;
};

const initialState: IUserState = {
  user: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setLoadingTrue: (state) => {
      state.loading = true;
    },
    setLoadingFalse: (state) => {
      state.loading = false;
    },
  },
});

export const { setUser, clearUser, setLoadingTrue, setLoadingFalse } =
  userSlice.actions;

export default userSlice.reducer;
