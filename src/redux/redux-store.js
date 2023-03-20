import { configureStore } from "@reduxjs/toolkit";
import lashingReducer from "./lashingSlice";
import beamsReducer from "./beamsSlice";
import plateCollapseReducer from "./beamsSlice";

const store = configureStore({
  reducer: {
    lashingRing: lashingReducer,
    beams: beamsReducer,
    plateCollapse: plateCollapseReducer,
  },
});

window.store = store;

export default store;
