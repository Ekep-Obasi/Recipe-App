import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    inView: true,
  },
  reducers: {
    toggleInView: (state) => {
      state.inView = !state.inView;
    },
  },
});

export const getInView = (state) => state.ui.inView;

export const { toggleInView } = uiSlice.actions;

export default uiSlice.reducer;
