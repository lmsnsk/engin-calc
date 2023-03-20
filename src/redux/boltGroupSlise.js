import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  load: "",
  matLimit: "",
  thickness: [],
  diam: [],
  quantity: [],
  sigmaSm: "",
};

const boltGroupSlise = createSlice({
  name: "beams",
  initialState,
  reducers: {
    setLoad(state, action) {
      state.load = action.payload;
    },
    setMatLimit(state, action) {
      state.matLimit = action.payload;
    },
    setThickness(state, action) {
      state.thickness = action.payload;
    },
    setDiam(state, action) {
      state.diam = action.payload;
    },
    setqQuantity(state, action) {
      state.quantity = action.payload;
    },
    calculateCollapse(state) {},
  },
});

export const { setLoad, setMatLimit, setThickness, setDiam, setqQuantity } = boltGroupSlise.actions;

export default boltGroupSlise.reducer;
