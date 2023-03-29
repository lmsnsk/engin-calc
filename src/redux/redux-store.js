import { configureStore } from "@reduxjs/toolkit";
import lashingReducer from "./lashingSlice";
import beamsReducer from "./beamsSlice";
import boltGroupReducer from "./boltGroupSlice";
import springReducer from "./springSlice";

const store = configureStore({
  reducer: {
    lashingRing: lashingReducer,
    beams: beamsReducer,
    boltGroup: boltGroupReducer,
    spring: springReducer,
  },
});

window.store = store;

export default store;
