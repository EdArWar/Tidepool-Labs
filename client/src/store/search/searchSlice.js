import { createSlice } from "@reduxjs/toolkit";
import { initialSearchState } from "./initialState";

export const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    setAllSearch(state, action) {
      state.searchData = action.payload;
    },
  },
});
