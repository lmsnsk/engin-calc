import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kvalHole: { value: "", unit: { factor: 1, text: "мм" } },
  fieldHole: { value: "", unit: { factor: 1, text: "мм" } },
  kvalShaft: { value: "", unit: { factor: 1, text: "мм" } },
  fieldShaft: { value: "", unit: { factor: 1, text: "мм" } },
  nominalDimension: { value: "", unit: { factor: 1, text: "мм" } },
  holeMaxValue: { value: undefined, unit: { factor: 1, text: "мм" } },
  holeMinValue: { value: undefined, unit: { factor: 1, text: "мм" } },
  shaftMaxValue: { value: undefined, unit: { factor: 1, text: "мм" } },
  shaftMinValue: { value: undefined, unit: { factor: 1, text: "мм" } },
  val1: { value: 0, unit: { factor: 1, text: "мм" } },
  val2: { value: 0, unit: { factor: 1, text: "мм" } },
};

const toleranceSlice = createSlice({
  name: "tolerances",
  initialState,
  reducers: {
    setFieldHole(state, action) {
      state.fieldHole.value = action.payload;
    },
    setFieldHoleUnit(state, action) {
      state.fieldHole.unit = action.payload;
    },
    setKvalHole(state, action) {
      state.kvalHole.value = action.payload;
    },
    setKvalHoleUnit(state, action) {
      state.kvalHole.unit = action.payload;
    },
    setFieldShaft(state, action) {
      state.fieldShaft.value = action.payload;
    },
    setFieldShaftUnit(state, action) {
      state.fieldShaft.unit = action.payload;
    },
    setKvalShaft(state, action) {
      state.kvalShaft.value = action.payload;
    },
    setKvalShaftUnit(state, action) {
      state.kvalShaft.unit = action.payload;
    },
    setNominalDimension(state, action) {
      state.nominalDimension.value = action.payload;
    },
    setNominalDimensionUnit(state, action) {
      state.nominalDimension.unit = action.payload;
    },
    setHoleMaxValue(state, action) {
      state.holeMaxValue.value = action.payload;
    },
    setHoleMaxValueUnit(state, action) {
      state.holeMaxValue.unit = action.payload;
    },
    setHoleMinValue(state, action) {
      state.holeMinValue.value = action.payload;
    },
    setHoleMinValueUnit(state, action) {
      state.holeMinValue.unit = action.payload;
    },
    setShaftMaxValue(state, action) {
      state.shaftMaxValue.value = action.payload;
    },
    setShaftMaxValueUnit(state, action) {
      state.shaftMaxValue.unit = action.payload;
    },
    setShaftMinValue(state, action) {
      state.shaftMinValue.value = action.payload;
    },
    setShaftMinValueUnit(state, action) {
      state.shaftMinValue.unit = action.payload;
    },
    setVal1(state) {
      state.val1.value = +(state.holeMinValue.value - state.shaftMaxValue.value).toFixed(5);
    },
    setVal1Unit(state, action) {
      state.val1.unit = action.payload;
    },
    setVal2(state) {
      state.val2.value = +(state.holeMaxValue.value - state.shaftMinValue.value).toFixed(5);
    },
    setVal2Unit(state, action) {
      state.val2.unit = action.payload;
    },
  },
});

export const {
  setFieldHole,
  setFieldHoleUnit,
  setKvalHole,
  setKvalHoleUnit,
  setFieldShaft,
  setFieldShaftUnit,
  setKvalShaft,
  setKvalShaftUnit,
  setNominalDimension,
  setNominalDimensionUnit,
  setHoleMaxValue,
  setHoleMaxValueUnit,
  setHoleMinValue,
  setHoleMinValueUnit,
  setShaftMaxValue,
  setShaftMaxValueUnit,
  setShaftMinValue,
  setShaftMinValueUnit,
  setVal1,
  setVal1Unit,
  setVal2,
  setVal2Unit,
} = toleranceSlice.actions;

export default toleranceSlice.reducer;
