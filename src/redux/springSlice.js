import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  springType: "",
  F0: "",
  F1: 1,
  F2: 3.1,
  F3: "",
  h: 18,
  delta: 0.15,
  ro: 7800,
  D1: 12,
  d: 1.2,
  c1: 16.13,
  s3w: 2.2,
  c: "",
  D: "",
  n: "",
  s1: "",
  s2: "",
  s3: "",
  l0: "",
  l1: "",
  l2: "",
  l3: "",
  t: "",
  l: "",
  m: "",
};

const springSlice = createSlice({
  name: "spring",
  initialState,
  reducers: {
    calculateSpring(state) {
      const g = 9.8066;
      let F3 = (state.F2 * g) / (1 - state.delta);
      let F0 = 0.2 * F3;
      let c = ((state.F2 - state.F1) * g) / state.h;
      let D = state.D1 - state.d;
      let n = Math.floor(state.c1 / c);
      let s1 = (state.F1 * g) / c;
      let s2 = (state.F2 * g) / c;
      let s3 = F3 / c;
      let l3, l0, l1, l2;
      switch (state.springType) {
        case 1:
          l3 = (n + 1) * state.d;
          l0 = l3 + s3;
          l1 = l0 - s1;
          l2 = l0 - s2;
          break;
        case 2:
          l0 = (n + 1) * state.d;
          l1 = l0 + s1;
          l2 = l0 + s2;
          l3 = l0 + s3;
          break;
        default:
          break;
      }
      let t = l0 / n;
      let l = 3.2 * D * n;
      let m = l * Math.PI * (state.d ** 2 / 4) * (state.ro / 1000000000);
      state.F0 = F0;
      state.F3 = F3;
      state.c = c;
      state.D = D;
      state.n = n;
      state.s1 = s1;
      state.s2 = s2;
      state.s3 = s3;
      state.l3 = l3;
      state.l0 = l0;
      state.l1 = l1;
      state.l2 = l2;
      state.t = t;
      state.l = l;
      state.m = m;
    },
    setSpringType(state, action) {
      state.springType = action.payload.value;
    },
    setF1(state, action) {
      state.F1 = action.payload;
    },
    setF2(state, action) {
      state.F2 = action.payload;
    },
    seth(state, action) {
      state.h = action.payload;
    },
    setDelta(state, action) {
      state.delta = action.payload;
    },
    setRo(state, action) {
      state.ro = action.payload;
    },
    setD1(state, action) {
      state.D1 = action.payload;
    },
    setd(state, action) {
      state.d = action.payload;
    },
    setc1(state, action) {
      state.c1 = action.payload;
    },
    sets3w(state, action) {
      state.s3w = action.payload;
    },
  },
});

export const { setSpringType, calculateSpring, setF1, setF2, seth, setDelta, setRo, setD1, setd, setc1, sets3w } =
  springSlice.actions;

export default springSlice.reducer;
