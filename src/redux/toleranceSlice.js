import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kvalHole: "",
  fieldHole: "",
  kvalShaft: "",
  fieldShaft: "",
  nominalDimension: "",
  holeMaxValue: undefined,
  holeMinValue: undefined,
  shaftMaxValue: undefined,
  shaftMinValue: undefined,
  val1: 0,
  val2: 0,
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
    setHoleMaxValue(state, action) {
      state.holeMaxValue = action.payload;
    },
    setHoleMinValue(state, action) {
      state.holeMinValue = action.payload;
    },
    setShaftMaxValue(state, action) {
      state.shaftMaxValue = action.payload;
    },
    setShaftMinValue(state, action) {
      state.shaftMinValue = action.payload;
    },
    setVal1(state) {
      state.val1 = +(state.holeMinValue - state.shaftMaxValue).toFixed(5);
    },
    setVal2(state) {
      state.val2 = +(state.holeMaxValue - state.shaftMinValue).toFixed(5);
    },
  },
});

export const {
  setFieldHole,
  setKvalHole,
  setFieldShaft,
  setKvalShaft,
  setNominalDimension,
  setHoleMaxValue,
  setHoleMinValue,
  setShaftMaxValue,
  setShaftMinValue,
  setVal1,
  setVal2,
} = toleranceSlice.actions;

export default toleranceSlice.reducer;
