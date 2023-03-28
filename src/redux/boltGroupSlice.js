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
  name: "boltgroup",
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
    calculateBoltGroup(state) {
      let moment = (state.load * state.centerDistance) / 1000;
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
        pLoad.push((state.load * area[i]) / sumArea);
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
        sliseMargin.push((area[i] * state.sliceLimit) / pResult[i]);
        collapseMargin.push((state.boltParams[i][0] * state.matLimit * state.thickness) / pResult[i]);
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
  setSliceLimit,
  calculateBoltGroup,
} = boltGroupSlice.actions;

export default boltGroupSlice.reducer;
