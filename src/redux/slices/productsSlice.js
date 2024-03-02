import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/productsService";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.products = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.products = null;
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
