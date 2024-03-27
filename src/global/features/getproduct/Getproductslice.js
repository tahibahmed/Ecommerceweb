import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getdata = createAsyncThunk("getdata", async () => {
  const url = await fetch("https://fakestoreapi.com/products");

  const results = await url.json();
  return results;
});

export const getslice = createSlice({
  name: "products",
  initialState: {
    data: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getdata.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(getdata.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(getdata.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default getslice.reducer;
