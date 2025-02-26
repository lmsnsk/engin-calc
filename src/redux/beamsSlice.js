import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sectionShowed: "",
  beamTypeShowed: "",
  load: { value: "", unit: { factor: 1, text: "кгс" } },
  matLimit: { value: "", unit: { factor: 1, text: "кгсмм2" } },
  elMod: { value: "", unit: { factor: 1, text: "ГПа" } },
  diam: { value: "", unit: { factor: 1, text: "мм" } },
  width: { value: "", unit: { factor: 1, text: "мм" } },
  heigth: { value: "", unit: { factor: 1, text: "мм" } },
  thickWall: { value: "", unit: { factor: 1, text: "мм" } },
  thickShelf: { value: "", unit: { factor: 1, text: "мм" } },
  area: { value: "", unit: { factor: 1, text: "мм2" } },
  momRes: { value: "", unit: { factor: 1, text: "мм3" } },
  momIn: { value: "", unit: { factor: 1, text: "мм4" } },
  length: { value: "", unit: { factor: 1, text: "мм" } },
  lengthFactor: "",
  aReaction: { value: "", unit: { factor: 1, text: "кгс" } },
  bReaction: { value: "", unit: { factor: 1, text: "кгс" } },
  moment: { value: "", unit: { factor: 1, text: "кгсм" } },
  loadDistance: { value: "", unit: { factor: 1, text: "мм" } },
  strain: { value: "", unit: { factor: 1, text: "кгсмм2" } },
  deflection: { value: "", unit: { factor: 1, text: "мм" } },
  safeFactor: "",
  criticalLoad: { value: "", unit: { factor: 1, text: "кгс" } },
  criticalFactor: "",
};

const beamsSlice = createSlice({
  name: "beams",
  initialState,
  reducers: {
    setSectionShowed(state, action) {
      state.sectionShowed = action.payload.value;
    },
    setBeamTypeShowed(state, action) {
      state.beamTypeShowed = action.payload.value;
    },
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
    setElMod(state, action) {
      state.elMod.value = action.payload;
    },
    setElModUnit(state, action) {
      state.elMod.unit = action.payload;
    },
    setDiam(state, action) {
      state.diam.value = action.payload;
    },
    setDiamUnit(state, action) {
      state.diam.unit = action.payload;
    },
    setWidth(state, action) {
      state.width.value = action.payload;
    },
    setWidthUnit(state, action) {
      state.width.unit = action.payload;
    },
    setHeigth(state, action) {
      state.heigth.value = action.payload;
    },
    setHeigthUnit(state, action) {
      state.heigth.unit = action.payload;
    },
    setThickWall(state, action) {
      state.thickWall.value = action.payload;
    },
    setThickWallUnit(state, action) {
      state.thickWall.unit = action.payload;
    },
    setThickShelf(state, action) {
      state.thickShelf.value = action.payload;
    },
    setThickShelfUnit(state, action) {
      state.thickShelf.unit = action.payload;
    },
    setArea(state, action) {
      state.area.value = action.payload;
    },
    setAreaUnit(state, action) {
      state.area.unit = action.payload;
    },
    setMomRes(state, action) {
      state.momRes.value = action.payload;
    },
    setMomResUnit(state, action) {
      state.momRes.unit = action.payload;
    },
    setMomIn(state, action) {
      state.momIn.value = action.payload;
    },
    setMomInUnit(state, action) {
      state.momIn.unit = action.payload;
    },
    setLength(state, action) {
      state.length.value = action.payload;
    },
    setLengthUnit(state, action) {
      state.length.unit = action.payload;
    },
    setlengthFactor(state, action) {
      state.lengthFactor = action.payload;
    },
    setAReaction(state, action) {
      state.aReaction.value = action.payload;
    },
    setAReactionUnit(state, action) {
      state.aReaction.unit = action.payload;
    },
    setBReaction(state, action) {
      state.bReaction.value = action.payload;
    },
    setBReactionUnit(state, action) {
      state.bReaction.unit = action.payload;
    },
    setMoment(state, action) {
      state.moment.value = action.payload;
    },
    setMomentUnit(state, action) {
      state.moment.unit = action.payload;
    },
    setLoadDistance(state, action) {
      state.loadDistance.value = action.payload;
    },
    setLoadDistanceUnit(state, action) {
      state.loadDistance.unit = action.payload;
    },
    setStrain(state, action) {
      state.strain.value = action.payload;
    },
    setStrainUnit(state, action) {
      state.strain.unit = action.payload;
    },
    setDeflection(state, action) {
      state.deflection.value = action.payload;
    },
    setDeflectionUnit(state, action) {
      state.deflection.unit = action.payload;
    },
    setSafeFactor(state, action) {
      state.safeFactor = action.payload;
    },
    setCriticalLoad(state, action) {
      state.criticalLoad.value = action.payload;
    },
    setCriticalLoadUnit(state, action) {
      state.criticalLoad.unit = action.payload;
    },
    setCriticalFactor(state, action) {
      state.criticalFactor = action.payload;
    },
    calculateCircleSection(state) {
      let area =
        (Math.PI * (state.diam.value * state.diam.unit.factor) ** 2) / 4 / state.area.unit.factor;
      let momRes =
        (Math.PI * (state.diam.value * state.diam.unit.factor) ** 3) /
        32 /
        state.momRes.unit.factor;
      let momIn =
        (Math.PI * (state.diam.value * state.diam.unit.factor) ** 4) / 64 / state.momIn.unit.factor;
      state.area.value = area;
      state.momRes.value = momRes;
      state.momIn.value = momIn;
    },
    calculateCircleTubeSection(state) {
      let innerDiam =
        state.diam.value * state.diam.unit.factor -
        2 * (state.thickWall.value * state.thickWall.unit.factor);
      let area =
        (Math.PI * ((state.diam.value * state.diam.unit.factor) ** 2 - innerDiam ** 2)) /
        4 /
        state.area.unit.factor;
      let momRes =
        (Math.PI * ((state.diam.value * state.diam.unit.factor) ** 4 - innerDiam ** 4)) /
        (32 * state.diam.value * state.diam.unit.factor) /
        state.momRes.unit.factor;
      let momIn =
        (Math.PI * ((state.diam.value * state.diam.unit.factor) ** 4 - innerDiam ** 4)) /
        64 /
        state.momIn.unit.factor;
      state.area.value = area;
      state.momRes.value = momRes;
      state.momIn.value = momIn;
    },
    calculateRectangleSection(state) {
      let area =
        (state.width.value *
          state.width.unit.factor *
          (state.heigth.value * state.heigth.unit.factor)) /
        state.area.unit.factor;
      let momRes =
        (state.width.value *
          state.width.unit.factor *
          (state.heigth.value * state.heigth.unit.factor) ** 2) /
        6 /
        state.momRes.unit.factor;
      let momIn =
        (state.width.value *
          state.width.unit.factor *
          (state.heigth.value * state.heigth.unit.factor) ** 3) /
        12 /
        state.momIn.unit.factor;
      state.area.value = area;
      state.momRes.value = momRes;
      state.momIn.value = momIn;
    },
    calculateRectangleTubeSection(state) {
      let widthInner =
        state.width.value * state.width.unit.factor -
        2 * (state.thickWall.value * state.thickWall.unit.factor);
      let heigthInner =
        state.heigth.value * state.heigth.unit.factor -
        2 * (state.thickWall.value * state.thickWall.unit.factor);
      let area =
        (state.width.value *
          state.width.unit.factor *
          (state.heigth.value * state.heigth.unit.factor) -
          widthInner * heigthInner) /
        state.area.unit.factor;
      let momRes =
        (state.width.value *
          state.width.unit.factor *
          (state.heigth.value * state.heigth.unit.factor) ** 3 -
          widthInner * heigthInner ** 3) /
        (6 * (state.heigth.value * state.heigth.unit.factor)) /
        state.momRes.unit.factor;
      let momIn =
        (state.width.value *
          state.width.unit.factor *
          (state.heigth.value * state.heigth.unit.factor) ** 3 -
          widthInner * heigthInner ** 3) /
        12 /
        state.momIn.unit.factor;
      state.area.value = area;
      state.momRes.value = momRes;
      state.momIn.value = momIn;
    },
    calculateChannelVertSection(state) {
      let widthInner =
        state.width.value * state.width.unit.factor -
        state.thickWall.value * state.thickWall.unit.factor;
      let heigthInner =
        state.heigth.value * state.heigth.unit.factor -
        2 * (state.thickShelf.value * state.thickShelf.unit.factor);
      let area =
        (state.width.value *
          state.width.unit.factor *
          (state.heigth.value * state.heigth.unit.factor) -
          widthInner * heigthInner) /
        state.area.unit.factor;
      let momRes =
        (state.width.value *
          state.width.unit.factor *
          (state.heigth.value * state.heigth.unit.factor) ** 3 -
          widthInner * heigthInner ** 3) /
        (6 * (state.heigth.value * state.heigth.unit.factor)) /
        state.momRes.unit.factor;
      let momIn =
        (state.width.value *
          state.width.unit.factor *
          (state.heigth.value * state.heigth.unit.factor) ** 3 -
          widthInner * heigthInner ** 3) /
        12 /
        state.momIn.unit.factor;
      state.area.value = area;
      state.momRes.value = momRes;
      state.momIn.value = momIn;
    },
    calculateChannelHorizSection(state) {
      let widthInner =
        state.width.value * state.width.unit.factor -
        2 * (state.thickShelf.value * state.thickShelf.unit.factor);
      let area =
        (widthInner * (state.thickWall.value * state.thickWall.unit.factor) +
          state.heigth.value *
            state.heigth.unit.factor *
            2 *
            (state.thickShelf.value * state.thickShelf.unit.factor)) /
        state.area.unit.factor;
      let y1 =
        (2 *
          (state.thickShelf.value * state.thickShelf.unit.factor) *
          (state.heigth.value * state.heigth.unit.factor) ** 2 +
          widthInner * (state.thickWall.value * state.thickWall.unit.factor) ** 2) /
        (2 * area);
      let y2 = state.heigth.value * state.heigth.unit.factor - y1;
      let momIn =
        (state.width.value * state.width.unit.factor * y1 ** 3 -
          widthInner * (y1 - state.thickWall.value * state.thickWall.unit.factor) ** 3 +
          2 * (state.thickShelf.value * state.thickShelf.unit.factor) * y2 ** 3) /
        3 /
        state.momIn.unit.factor;
      let momRes = momIn / y2 / state.momRes.unit.factor;
      state.area.value = area;
      state.momRes.value = momRes;
      state.momIn.value = momIn;
    },
    calculateTBeamAndCornerSection(state) {
      let widthInner =
        state.width.value * state.width.unit.factor -
        state.thickWall.value * state.thickWall.unit.factor;
      let area =
        (widthInner * (state.thickShelf.value * state.thickShelf.unit.factor) +
          state.heigth.value *
            state.heigth.unit.factor *
            (state.thickWall.value * state.thickWall.unit.factor)) /
        state.area.unit.factor;
      let y1 =
        (state.thickWall.value *
          state.thickWall.unit.factor *
          (state.heigth.value * state.heigth.unit.factor) ** 2 +
          widthInner * (state.thickShelf.value * state.thickShelf.unit.factor) ** 2) /
        (2 * area);
      let y2 = state.heigth.value * state.heigth.unit.factor - y1;
      let momIn =
        (state.width.value * state.width.unit.factor * y1 ** 3 -
          widthInner * (y1 - state.thickShelf.value * state.thickShelf.unit.factor) ** 3 +
          state.thickWall.value * state.thickWall.unit.factor * y2 ** 3) /
        3 /
        state.momIn.unit.factor;
      let momRes = momIn / y2 / state.momRes.unit.factor;
      state.area.value = area;
      state.momRes.value = momRes;
      state.momIn.value = momIn;
    },
    calculateTwoSupBeam(state) {
      let aReaction =
        (((state.load.value *
          state.load.unit.factor *
          (state.length.value * state.length.unit.factor -
            state.loadDistance.value * state.loadDistance.unit.factor)) /
          state.length.value) *
          state.length.unit.factor) /
        state.aReaction.unit.factor;
      let bReaction =
        (((state.load.value *
          state.load.unit.factor *
          state.loadDistance.value *
          state.loadDistance.unit.factor) /
          state.length.value) *
          state.length.unit.factor) /
        state.bReaction.unit.factor;
      let moment =
        (aReaction *
          state.aReaction.unit.factor *
          ((state.loadDistance.value * state.loadDistance.unit.factor) / 1000)) /
        state.moment.unit.factor;
      let strain =
        (moment * state.moment.unit.factor * 1000) /
        (state.momRes.value * state.momRes.unit.factor) /
        state.strain.unit.factor;
      let deflection =
        (state.load.value *
          state.load.unit.factor *
          (state.loadDistance.value * state.loadDistance.unit.factor) *
          Math.sqrt(
            ((state.length.value * state.length.unit.factor) ** 2 -
              (state.loadDistance.value * state.loadDistance.unit.factor) ** 2) /
              3
          ) **
            3) /
        (3 *
          (state.elMod.value * state.elMod.unit.factor * 101.9716) *
          state.momIn.value *
          state.momIn.unit.factor *
          state.length.value *
          state.length.unit.factor) /
        state.deflection.unit.factor;
      let safeFactor =
        (state.matLimit.value * state.matLimit.unit.factor) / (strain * state.strain.unit.factor);
      state.aReaction.value = aReaction;
      state.bReaction.value = bReaction;
      state.moment.value = moment;
      state.strain.value = strain;
      state.deflection.value = deflection;
      state.safeFactor = safeFactor;
    },
    calculateConsoleBeam(state) {
      let aReaction = (state.load.value * state.load.unit.factor) / state.aReaction.unit.factor;
      let moment =
        (aReaction *
          state.aReaction.unit.factor *
          ((state.length.value * state.length.unit.factor) / 1000)) /
        state.moment.unit.factor;
      let strain =
        (moment * state.moment.unit.factor * 1000) /
        (state.momRes.value * state.momRes.unit.factor) /
        state.strain.unit.factor;
      let deflection =
        (state.load.value *
          state.load.unit.factor *
          (state.length.value * state.length.unit.factor) ** 3) /
        (3 *
          (state.elMod.value * state.elMod.unit.factor * 101.9716) *
          state.momIn.value *
          state.momIn.unit.factor) /
        state.deflection.unit.factor;
      let safeFactor =
        (state.matLimit.value * state.matLimit.unit.factor) / (strain * state.strain.unit.factor);
      state.aReaction.value = aReaction;
      state.moment.value = moment;
      state.strain.value = strain;
      state.deflection.value = deflection;
      state.safeFactor = safeFactor;
    },
    calculateBuckling(state) {
      let criticalLoad =
        (Math.PI ** 2 *
          (state.elMod.value * state.elMod.unit.factor * 101.9716) *
          state.momIn.value *
          state.momIn.unit.factor) /
        (state.lengthFactor * state.length.value * state.length.unit.factor) ** 2 /
        state.criticalLoad.unit.factor;
      let criticalFactor =
        (criticalLoad * state.criticalLoad.unit.factor) /
        (state.load.value * state.load.unit.factor);
      state.criticalLoad.value = criticalLoad;
      state.criticalFactor = criticalFactor;
    },
  },
});

export const {
  setSectionShowed,
  setBeamTypeShowed,
  setLoad,
  setMatLimit,
  setElMod,
  setDiam,
  setWidth,
  setHeigth,
  setThickWall,
  setThickShelf,
  setArea,
  setMomRes,
  setMomIn,
  setLength,
  setlengthFactor,
  setAReaction,
  setBReaction,
  setMoment,
  setLoadDistance,
  setStrain,
  setDeflection,
  setSafeFactor,
  setCriticalLoad,
  setCriticalFactor,
  calculateCircleSection,
  calculateCircleTubeSection,
  calculateRectangleSection,
  calculateRectangleTubeSection,
  calculateChannelHorizSection,
  calculateChannelVertSection,
  calculateTBeamAndCornerSection,
  calculateTwoSupBeam,
  calculateConsoleBeam,
  calculateBuckling,
  setDiamUnit,
  setWidthUnit,
  setHeigthUnit,
  setThickWallUnit,
  setThickShelfUnit,
  setAreaUnit,
  setMomResUnit,
  setMomInUnit,
  setLoadUnit,
  setMatLimitUnit,
  setElModUnit,
  setLengthUnit,
  setLoadDistanceUnit,
  setAReactionUnit,
  setBReactionUnit,
  setMomentUnit,
  setDeflectionUnit,
  setStrainUnit,
  setCriticalLoadUnit,
} = beamsSlice.actions;

export default beamsSlice.reducer;
