import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sectionShowed: "",
  sectionShowedText: "",
  beamTypeShowed: "",
  beamTypeShowedText: "",
  load: "",
  matLimit: "",
  elMod: "",
  diam: "",
  width: "",
  heigth: "",
  thickWall: "",
  thickShelf: "",
  area: "",
  momRes: "",
  momIn: "",
  length: "",
  aReaction: "",
  bReaction: "",
  moment: "",
  loadDistance: "",
  strain: "",
  deflection: "",
  safeFactor: "",
};

const beamsSlice = createSlice({
  name: "beams",
  initialState,
  reducers: {
    setSectionShowed(state, action) {
      state.sectionShowed = action.payload.value;
      state.sectionShowedText = action.payload.name;
    },
    setBeamTypeShowed(state, action) {
      state.beamTypeShowed = action.payload.value;
      state.beamTypeShowedText = action.payload.name;
    },
    setLoad(state, action) {
      state.sectionShowed = action.payload;
    },
    setMatLimit(state, action) {
      state.matLimit = action.payload;
    },
    setElMod(state, action) {
      state.elMod = action.payload;
    },
    setDiam(state, action) {
      state.diam = action.payload;
    },
    setWidth(state, action) {
      state.width = action.payload;
    },
    setHeigth(state, action) {
      state.heigth = action.payload;
    },
    setThickWall(state, action) {
      state.thickWall = action.payload;
    },
    setThickShelf(state, action) {
      state.thickShelf = action.payload;
    },
    setArea(state, action) {
      state.area = action.payload;
    },
    setMomRes(state, action) {
      state.momRes = action.payload;
    },
    setMomIn(state, action) {
      state.momIn = action.payload;
    },
    setLength(state, action) {
      state.length = action.payload;
    },
    setAReaction(state, action) {
      state.aReaction = action.payload;
    },
    setBReaction(state, action) {
      state.bReaction = action.payload;
    },
    setMoment(state, action) {
      state.moment = action.payload;
    },
    setLoadDistance(state, action) {
      state.loadDistance = action.payload;
    },
    setStrain(state, action) {
      state.strain = action.payload;
    },
    setDeflection(state, action) {
      state.deflection = action.payload;
    },
    setSafeFactor(state, action) {
      state.safeFactor = action.payload;
    },
    calculateCircleSection(state) {
      let area = (Math.PI * state.diam ** 2) / 4;
      let momRes = (Math.PI * state.diam ** 3) / 32;
      let momIn = (Math.PI * state.diam ** 4) / 64;
      state.area = area;
      state.momRes = momRes;
      state.momIn = momIn;
    },
    calculateCircleTubeSection(state) {
      let innerDiam = state.diam - 2 * state.thickWall;
      let area = (Math.PI * (state.diam ** 2 - innerDiam ** 2)) / 4;
      let momRes = (Math.PI * (state.diam ** 4 - innerDiam ** 4)) / (32 * state.diam);
      let momIn = (Math.PI * (state.diam ** 4 - innerDiam ** 4)) / 64;
      state.area = area;
      state.momRes = momRes;
      state.momIn = momIn;
    },
    calculateRectangleSection(state) {
      let area = state.width * state.heigth;
      let momRes = (state.width * state.heigth ** 2) / 6;
      let momIn = (state.width * state.heigth ** 3) / 12;
      state.area = area;
      state.momRes = momRes;
      state.momIn = momIn;
    },
    calculateRectangleTubeSection(state) {
      let widthInner = state.width - 2 * state.thickWall;
      let heigthInner = state.heigth - 2 * state.thickWall;
      let area = state.width * state.heigth - widthInner * heigthInner;
      let momRes = (state.width * state.heigth ** 3 - widthInner * heigthInner ** 3) / (6 * state.heigth);
      let momIn = (state.width * state.heigth ** 3 - widthInner * heigthInner ** 3) / 12;
      state.area = area;
      state.momRes = momRes;
      state.momIn = momIn;
    },
    calculateChannelVertSection(state) {
      let widthInner = state.width - state.thickWall;
      let heigthInner = state.heigth - 2 * state.thickShelf;
      let area = state.width * state.heigth - widthInner * heigthInner;
      let momRes = (state.width * state.heigth ** 3 - widthInner * heigthInner ** 3) / (6 * state.heigth);
      let momIn = (state.width * state.heigth ** 3 - widthInner * heigthInner ** 3) / 12;
      state.area = area;
      state.momRes = momRes;
      state.momIn = momIn;
    },
    calculateChannelHorizSection(state) {
      let widthInner = state.width - 2 * state.thickShelf;
      let area = widthInner * state.thickWall + state.heigth * 2 * state.thickShelf;
      let y1 = (2 * state.thickShelf * state.heigth ** 2 + widthInner * state.thickWall ** 2) / (2 * area);
      let y2 = state.heigth - y1;
      let momIn =
        (state.width * y1 ** 3 - widthInner * (y1 - state.thickWall) ** 3 + 2 * state.thickShelf * y2 ** 3) / 3;
      let momRes = momIn / y2;
      state.area = area;
      state.momRes = momRes;
      state.momIn = momIn;
    },
    calculateTBeamAndCornerSection(state) {
      let widthInner = state.width - state.thickWall;
      let area = widthInner * state.thickShelf + state.heigth * state.thickWall;
      let y1 = (state.thickWall * state.heigth ** 2 + widthInner * state.thickShelf ** 2) / (2 * area);
      let y2 = state.heigth - y1;
      let momIn = (state.width * y1 ** 3 - widthInner * (y1 - state.thickShelf) ** 3 + state.thickWall * y2 ** 3) / 3;
      let momRes = momIn / y2;
      state.area = area;
      state.momRes = momRes;
      state.momIn = momIn;
    },
    calculateTwoSupBeam(state) {
      let aReaction = (state.load * (state.length - state.loadDistance)) / state.length;
      let bReaction = (state.load * state.loadDistance) / state.length;
      let moment = aReaction * (state.loadDistance / 1000);
      let strain = (moment * 1000) / state.momRes;
      let deflection =
        (state.load * state.loadDistance * Math.sqrt((state.length ** 2 - state.loadDistance ** 2) / 3) ** 3) /
        (3 * (state.elMod * 101.9716) * state.momIn * state.length);
      let safeFactor = state.matLimit / strain;
      state.aReaction = aReaction;
      state.bReaction = bReaction;
      state.moment = moment;
      state.strain = strain;
      state.deflection = deflection;
      state.safeFactor = safeFactor;
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
  setAReaction,
  setBReaction,
  setMoment,
  setLoadDistance,
  setStrain,
  setDeflection,
  setSafeFactor,
  calculateCircleSection,
  calculateCircleTubeSection,
  calculateRectangleSection,
  calculateRectangleTubeSection,
  calculateChannelHorizSection,
  calculateChannelVertSection,
  calculateTBeamAndCornerSection,
  calculateTwoSupBeam,
} = beamsSlice.actions;

export default beamsSlice.reducer;
