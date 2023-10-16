import { createSlice } from "@reduxjs/toolkit";

type IUserState = {
  user: {
    _id: string;
    email: string;
    name: string;
    photoUrl?: string;
    role: string;
  } | null;
};

const initialState: IUserState = {
  user: null,
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
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
