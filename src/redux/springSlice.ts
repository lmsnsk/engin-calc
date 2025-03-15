import { createSlice } from "@reduxjs/toolkit";

interface springStateItem {
  value: string | number;
  unit: {
    factor: number;
    text: string;
  };
}

interface springState {
  springType: string;
  F0: springStateItem;
  F1: springStateItem;
  F2: springStateItem;
  F3: springStateItem;
  h: springStateItem;
  delta: number;
  ro: springStateItem;
  D1: springStateItem;
  d: springStateItem;
  c1: springStateItem;
  c: springStateItem;
  D: springStateItem;
  n: string | number;
  s1: springStateItem;
  s2: springStateItem;
  s3: springStateItem;
  l0: springStateItem;
  l1: springStateItem;
  l2: springStateItem;
  l3: springStateItem;
  t: springStateItem;
  l: springStateItem;
  m: springStateItem;
}

const initialState: springState = {
  springType: "",
  F0: { value: "", unit: { factor: 1, text: "кгс" } },
  F1: { value: "", unit: { factor: 1, text: "кгс" } },
  F2: { value: "", unit: { factor: 1, text: "кгс" } },
  F3: { value: "", unit: { factor: 1 / 9.81, text: "Н" } },
  h: { value: "", unit: { factor: 1, text: "мм" } },
  delta: 0.08,
  ro: { value: "", unit: { factor: 1, text: "кгм3" } },
  D1: { value: "", unit: { factor: 1, text: "мм" } },
  d: { value: "", unit: { factor: 1, text: "мм" } },
  c1: { value: "", unit: { factor: 1, text: "Н/мм" } },
  c: { value: "", unit: { factor: 1, text: "Н/мм" } },
  D: { value: "", unit: { factor: 1, text: "мм" } },
  n: "",
  s1: { value: "", unit: { factor: 1, text: "мм" } },
  s2: { value: "", unit: { factor: 1, text: "мм" } },
  s3: { value: "", unit: { factor: 1, text: "мм" } },
  l0: { value: "", unit: { factor: 1, text: "мм" } },
  l1: { value: "", unit: { factor: 1, text: "мм" } },
  l2: { value: "", unit: { factor: 1, text: "мм" } },
  l3: { value: "", unit: { factor: 1, text: "мм" } },
  t: { value: "", unit: { factor: 1, text: "мм" } },
  l: { value: "", unit: { factor: 1, text: "мм" } },
  m: { value: "", unit: { factor: 1, text: "кг" } },
};

const springSlice = createSlice({
  name: "spring",
  initialState,
  reducers: {
    setSpringType(state, action) {
      state.springType = action.payload.value;
    },
    setF1(state, action) {
      state.F1.value = action.payload;
    },
    setF1Unit(state, action) {
      state.F1.unit = action.payload;
    },
    setF2(state, action) {
      state.F2.value = action.payload;
    },
    setF2Unit(state, action) {
      state.F2.unit = action.payload;
    },
    seth(state, action) {
      state.h.value = action.payload;
    },
    sethUnit(state, action) {
      state.h.unit = action.payload;
    },
    setDelta(state, action) {
      state.delta = action.payload;
    },
    setRo(state, action) {
      state.ro.value = action.payload;
    },
    setRoUnit(state, action) {
      state.ro.unit = action.payload;
    },
    setD1(state, action) {
      state.D1.value = action.payload;
    },
    setD1Unit(state, action) {
      state.D1.unit = action.payload;
    },
    setd(state, action) {
      state.d.value = action.payload;
    },
    setdUnit(state, action) {
      state.d.unit = action.payload;
    },
    setc1(state, action) {
      state.c1.value = action.payload;
    },
    setc1Unit(state, action) {
      state.c1.unit = action.payload;
    },
    setF3Unit(state, action) {
      state.F3.unit = action.payload;
    },
    setF0Unit(state, action) {
      state.F0.unit = action.payload;
    },
    setCUnit(state, action) {
      state.c.unit = action.payload;
    },
    setDUnit(state, action) {
      state.D.unit = action.payload;
    },
    setS1Unit(state, action) {
      state.s1.unit = action.payload;
    },
    setS2Unit(state, action) {
      state.s2.unit = action.payload;
    },
    setS3Unit(state, action) {
      state.s3.unit = action.payload;
    },
    setL0Unit(state, action) {
      state.l0.unit = action.payload;
    },
    setL1Unit(state, action) {
      state.l1.unit = action.payload;
    },
    setL2Unit(state, action) {
      state.l2.unit = action.payload;
    },
    setL3Unit(state, action) {
      state.l3.unit = action.payload;
    },
    setLUnit(state, action) {
      state.l.unit = action.payload;
    },
    setTUnit(state, action) {
      state.t.unit = action.payload;
    },
    setMUnit(state, action) {
      state.m.unit = action.payload;
    },
    calculateF3(state) {
      let F3 = (+state.F2.value * state.F2.unit.factor) / (1 - state.delta) / state.F3.unit.factor;
      state.F3.value = F3;
    },
    calculateSpring(state) {
      const g = 9.8066;
      let F3: number =
        (+state.F2.value * state.F2.unit.factor) / (1 - state.delta) / state.F3.unit.factor;
      let F0: number = (0.2 * F3) / g / state.F0.unit.factor;
      let c: number =
        ((+state.F2.value * state.F2.unit.factor - +state.F1.value * state.F1.unit.factor) * g) /
        (+state.h.value * state.h.unit.factor) /
        state.c.unit.factor;
      let D: number =
        (+state.D1.value * state.D1.unit.factor - +state.d.value * state.d.unit.factor) /
        state.D.unit.factor;
      let n: number = Math.round(
        (+state.c1.value * state.c1.unit.factor) / (c * state.c.unit.factor)
      );
      let s1: number =
        (+state.F1.value * state.F1.unit.factor * g) /
        (c * state.c.unit.factor) /
        state.s1.unit.factor;
      let s2: number =
        (+state.F2.value * state.F2.unit.factor * g) /
        (c * state.c.unit.factor) /
        state.s2.unit.factor;
      let s3: number = F3 / (c * state.c.unit.factor) / state.s3.unit.factor;
      let l3;
      let l0;
      let l1;
      let l2;

      switch (+state.springType) {
        case 1:
          l3 = ((n + 1) * (+state.d.value * state.d.unit.factor)) / state.l3.unit.factor;
          l0 = (l3 * state.l3.unit.factor + s3 * state.s3.unit.factor) / state.l0.unit.factor;
          l1 = (l0 * state.l0.unit.factor - s1 * state.s1.unit.factor) / state.l1.unit.factor;
          l2 = (l0 * state.l0.unit.factor - s2 * state.s2.unit.factor) / state.l2.unit.factor;
          break;
        case 2:
          l0 = ((n + 1) * (+state.d.value * state.d.unit.factor)) / state.l0.unit.factor;
          l1 = (l0 * state.l0.unit.factor + s1 * state.s1.unit.factor) / state.l1.unit.factor;
          l2 = (l0 * state.l0.unit.factor + s2 * state.s2.unit.factor) / state.l2.unit.factor;
          l3 = (l0 * state.l0.unit.factor + s3 * state.s3.unit.factor) / state.l3.unit.factor;
          break;
      }

      let t;

      if (l0) {
        t = (l0 * state.l0.unit.factor) / n / state.t.unit.factor;
      }

      let l = (3.2 * (D * state.D.unit.factor) * n) / state.l.unit.factor;
      let m =
        (l *
          state.l.unit.factor *
          Math.PI *
          ((+state.d.value * state.d.unit.factor) ** 2 / 4) *
          ((+state.ro.value * state.ro.unit.factor) / 1000000000)) /
        state.m.unit.factor;

      state.F0.value = F0;
      state.c.value = c;
      state.D.value = D;
      state.n = n;
      state.F3.value = F3;
      state.s1.value = s1;
      state.s2.value = s2;
      state.s3.value = s3;
      if (l3) state.l3.value = l3;
      if (l0) state.l0.value = l0;
      if (l1) state.l1.value = l1;
      if (l2) state.l2.value = l2;
      if (t) state.t.value = t;
      state.l.value = l;
      state.m.value = m;
    },
  },
});

export const {
  setSpringType,
  calculateF3,
  calculateSpring,
  setF1,
  setF2,
  seth,
  setDelta,
  setRo,
  setD1,
  setd,
  setc1,
  setF1Unit,
  setF2Unit,
  sethUnit,
  setRoUnit,
  setD1Unit,
  setdUnit,
  setc1Unit,
  setF3Unit,
  setF0Unit,
  setCUnit,
  setDUnit,
  setS1Unit,
  setS2Unit,
  setS3Unit,
  setLUnit,
  setL0Unit,
  setL1Unit,
  setL2Unit,
  setL3Unit,
  setTUnit,
  setMUnit,
} = springSlice.actions;

export default springSlice.reducer;
