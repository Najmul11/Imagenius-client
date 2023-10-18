import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IImage {
  _id: string;
  image: string;
  publicId: string;
  title: string;
  price: number;
  category: string;
}

interface CartState {
  cart: IImage[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IImage>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<IImage[]>) => {
      state.cart = action.payload;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
