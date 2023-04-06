import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meterFactor: 0.001,
};

const unitsSlice = createSlice({
  name: "units",
  initialState,
  redusers: {
    setMeterFactor(state, action) {
      state.meterFactor = action.payload;
    },
  },
});

export const { setMeterFactor } = unitsSlice.actions;

export default unitsSlice.reducer;
