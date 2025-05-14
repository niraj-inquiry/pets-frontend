import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});
export const { setIsOpen } = commonSlice.actions;
export default commonSlice.reducer;