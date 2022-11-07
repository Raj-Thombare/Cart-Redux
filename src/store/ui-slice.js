import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { cartIsVisible: true };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const { toggle } = uiSlice.actions;

export default uiSlice.reducer;
