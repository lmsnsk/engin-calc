// import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import lashingReducer from "./lashingSlice";

// const reducers = combineReducers({ lashingRing: lashingReducer });
// const store = createStore(reducers);
const store = configureStore({
  reducer: {
    lashingRing: lashingReducer,
  },
});

window.store = store;

export default store;
