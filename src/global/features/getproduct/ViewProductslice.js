import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const viewProductdata = createAsyncThunk("viewProductdata", async (id) => {
  const url = await fetch(`https://fakestoreapi.com/products/${id}`);

  const results = await url.json();
 
  return results;
});

export const viewslice = createSlice({
  name: "viewproducts",
  initialState: {
    data: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewProductdata.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(viewProductdata.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(viewProductdata.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default viewslice.reducer;
