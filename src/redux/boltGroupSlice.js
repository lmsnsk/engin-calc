import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  load: "",
  matLimit: "",
  sliceLimit: "",
  centerDistance: "",
  thickness: "",
  boltParams: [["", "", ""]],
  area: [],
  moment: "",
  pLoad: [],
  pMoment: [],
  pResult: [],
  sigmaSm: "",
  sliseMargin: [],
  collapseMargin: [],
};

const boltGroupSlice = createSlice({
  name: "beams",
  initialState,
  reducers: {
    setLoad(state, action) {
      state.load = action.payload;
    },
    setMatLimit(state, action) {
      state.matLimit = action.payload;
    },
    setSliceLimit(state, action) {
      state.sliceLimit = action.payload;
    },
    setCenterDistance(state, action) {
      state.centerDistance = action.payload;
    },
    setThickness(state, action) {
      state.thickness = action.payload;
    },
    setBoltParams(state, action) {
      state.boltParams = action.payload;
    },
    addRow(state, action) {
      state.boltParams.push(action.payload);
    },
    removeRow(state) {
      if (state.boltParams.length > 1) state.boltParams.pop();
    },
    calculateCollapse(state) {},
  },
});

export const {
  addRow,
  removeRow,
  setLoad,
  setMatLimit,
  setThickness,
  setCenterDistance,
  setBoltParams,
  setSliceLimit,
} = boltGroupSlice.actions;

export default boltGroupSlice.reducer;
