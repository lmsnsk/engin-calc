import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kvalHole: "",
  fieldHole: "",
  kvalShaft: "",
  fieldShaft: "",
  nominalDimension: "",
};

const toleranceSlice = createSlice({
  name: "tolerances",
  initialState,
  reducers: {
    setFieldHole(state, action) {
      state.fieldHole = action.payload;
    },
    setKvalHole(state, action) {
      state.kvalHole = action.payload;
    },
    setFieldShaft(state, action) {
      state.fieldShaft = action.payload;
    },
    setKvalShaft(state, action) {
      state.kvalShaft = action.payload;
    },
    setNominalDimension(state, action) {
      state.nominalDimension = action.payload;
    },
  },
});

export const { setFieldHole, setKvalHole, setFieldShaft, setKvalShaft, setNominalDimension } =
  toleranceSlice.actions;

export default toleranceSlice.reducer;
