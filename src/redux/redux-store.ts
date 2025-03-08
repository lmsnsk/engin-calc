import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import beamsReducer from "./beamsSlice";
import springReducer from "./springSlice";
import lashingReducer from "./lashingSlice";
import toleranceReducer from "./toleranceSlice";
import boltGroupReducer from "./boltGroupSlice";

const store = configureStore({
  reducer: {
    lashingRing: lashingReducer,
    beams: beamsReducer,
    boltGroup: boltGroupReducer,
    spring: springReducer,
    tolerances: toleranceReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
