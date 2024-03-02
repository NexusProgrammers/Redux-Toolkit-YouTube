import { configureStore } from "@reduxjs/toolkit";
import productsReducers from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducers,
  },
});

export default store;
