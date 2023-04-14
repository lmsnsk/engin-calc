import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  load: { value: "", unit: { factor: 1, text: "кгс" } },
  matLimit: { value: "", unit: { factor: 1, text: "кгсмм2" } },
  boltLimit: { value: "", unit: { factor: 1, text: "кгсмм2" } },
  centerDistance: { value: "", unit: { factor: 1, text: "мм" } },
  thickness: { value: "", unit: { factor: 1, text: "мм" } },
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
  name: "boltgroup",
  initialState,
  reducers: {
    setLoad(state, action) {
      state.load.value = action.payload;
    },
    setLoadUnit(state, action) {
      state.load.unit = action.payload;
    },
    setMatLimit(state, action) {
      state.matLimit.value = action.payload;
    },
    setMatLimitUnit(state, action) {
      state.matLimit.unit = action.payload;
    },
    setBoltLimit(state, action) {
      state.boltLimit.value = action.payload;
    },
    setBoltLimitUnit(state, action) {
      state.boltLimit.unit = action.payload;
    },
    setCenterDistance(state, action) {
      state.centerDistance.value = action.payload;
    },
    setCenterDistanceUnit(state, action) {
      state.centerDistance.unit = action.payload;
    },
    setThickness(state, action) {
      state.thickness.value = action.payload;
    },
    setThicknessUnit(state, action) {
      state.thickness.unit = action.payload;
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
    calculateBoltGroup(state) {
      let moment =
        (state.load.value * state.load.unit.factor * (state.centerDistance.value * state.centerDistance.unit.factor)) /
        1000;
      let area = [];
      let sumArea = 0;
      let sumInMom = 0;
      let pLoad = [];
      let pMoment = [];
      let pResult = [];
      let sliseMargin = [];
      let collapseMargin = [];
      for (let i = 0; i < state.boltParams.length; i++) {
        area.push((Math.PI / 4) * state.boltParams[i][0] ** 2);
        sumArea = sumArea + area[i];
        sumInMom = sumInMom + state.boltParams[i][1] ** 2 * area[i];
      }
      for (let i = 0; i < state.boltParams.length; i++) {
        pLoad.push((state.load.value * state.load.unit.factor * area[i]) / sumArea);
        pMoment.push((moment * state.boltParams[i][1] * area[i] * 1000) / sumInMom);
      }
      for (let i = 0; i < state.boltParams.length; i++) {
        pResult.push(
          Math.sqrt(
            pLoad[i] ** 2 +
              pMoment[i] ** 2 -
              2 * pLoad[i] * pMoment[i] * Math.cos(Math.PI - (state.boltParams[i][2] * Math.PI) / 180)
          )
        );
        sliseMargin.push((area[i] * (state.boltLimit.value * state.boltLimit.unit.factor) * 0.63) / pResult[i]);
        collapseMargin.push(
          (state.boltParams[i][0] *
            (state.matLimit.value * state.matLimit.unit.factor) *
            (state.thickness.value * state.thickness.unit.factor)) /
            pResult[i]
        );
      }
      state.moment = moment;
      state.area = area;
      state.pLoad = pLoad;
      state.pMoment = pMoment;
      state.pResult = pResult;
      state.sliseMargin = sliseMargin;
      state.collapseMargin = collapseMargin;
    },
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
  setBoltLimit,
  calculateBoltGroup,
  setLoadUnit,
  setMatLimitUnit,
  setBoltLimitUnit,
  setCenterDistanceUnit,
  setThicknessUnit,
} = boltGroupSlice.actions;

export default boltGroupSlice.reducer;
