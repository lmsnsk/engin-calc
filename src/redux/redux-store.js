import { configureStore } from "@reduxjs/toolkit";
import lashingReducer from "./lashingSlice";
import beamsReducer from "./beamsSlice";
import boltGroupReducer from "./boltGroupSlice";

const store = configureStore({
  reducer: {
    lashingRing: lashingReducer,
    beams: beamsReducer,
    boltGroup: boltGroupReducer,
  },
});

window.store = store;

export default store;
