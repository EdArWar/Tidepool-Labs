import { createSlice } from "@reduxjs/toolkit";
import { initialGlobalState } from "./initialState";

export const globalSlice = createSlice({
  name: "global",
  initialState: initialGlobalState,
  reducers: {
    setLoader(state, action) {
      state.loader = action.payload;
    },
  },
});
