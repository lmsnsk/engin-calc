import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  earParams: {
    earThick: "",
    earRadius: "",
    holeDiam: "",
    jumper: "",
    boltDiam: "",
    load: "",
    matEarLimit: "",
    matBoltLimit: "",
    planeCount: "",
  },
  jumperCustom: "",
  conFactorText: "",
  conFactor: 1,
  sigmaInEar: "",
  sigmaSm: "",
  tauInBolt: "",
  earFS: "",
  earFSSM: "",
  boltFS: "",
  toogler: false,
};

const lashingSlice = createSlice({
  name: "lashingRing",
  initialState,
  reducers: {
    calculateLashingRing(state) {
      let jumperCustom = (state.earParams.earRadius * 2 - state.earParams.holeDiam) / 2;
      state.jumperCustom = jumperCustom;
      let factor = 0.565 + 0.46 - (0.1 * (state.earParams.earRadius * 2)) / state.earParams.holeDiam;
      let sigmaInEar =
        state.earParams.load /
        (2 * (state.toogler ? state.jumperCustom : state.earParams.jumper) * state.earParams.earThick * factor);
      let sigmaSm = state.earParams.load / (state.earParams.earThick * state.earParams.holeDiam);
      let tauInBolt =
        (4 * state.earParams.load) / (Math.PI * state.earParams.boltDiam ** 2 * state.earParams.planeCount);
      let earFS = state.earParams.matEarLimit / sigmaInEar;
      let earFSSM = (state.earParams.matEarLimit * state.conFactor) / sigmaInEar;
      let boltFS = (state.earParams.matBoltLimit * 0.63) / tauInBolt;
      state.sigmaInEar = sigmaInEar;
      state.sigmaSm = sigmaSm;
      state.tauInBolt = tauInBolt;
      state.earFS = earFS;
      state.earFSSM = earFSSM;
      state.boltFS = boltFS;
    },
    setEarThick(state, action) {
      state.earParams.earThick = action.payload;
    },
    setEarRadius(state, action) {
      state.earParams.earRadius = action.payload;
    },
    setHoleDiam(state, action) {
      state.earParams.holeDiam = action.payload;
    },
    setJumper(state, action) {
      state.earParams.jumper = action.payload;
    },
    setBoltDiam(state, action) {
      state.earParams.boltDiam = action.payload;
    },
    setLoad(state, action) {
      state.earParams.load = action.payload;
    },
    setEMatLimit(state, action) {
      state.earParams.matEarLimit = action.payload;
    },
    setBMatLimit(state, action) {
      state.earParams.matBoltLimit = action.payload;
    },
    setPlaneCount(state, action) {
      state.earParams.planeCount = action.payload;
    },
    setConFactor(state, action) {
      state.conFactor = action.payload.value;
      state.conFactorText = action.payload.name;
    },
    setSigmaInEar(state, action) {
      state.sigmaInEar = action.payload;
    },
    setSigmaSm(state, action) {
      state.sigmaSm = action.payload;
    },
    setTauInBolt(state, action) {
      state.tauInBolt = action.payload;
    },
    setEarFS(state, action) {
      state.earFS = action.payload;
    },
    setEarFSSM(state, action) {
      state.earFSSM = action.payload;
    },
    setBoltFS(state, action) {
      state.boltFS = action.payload;
    },
    setToogler(state, action) {
      state.toogler = action.payload;
    },
  },
});

export const {
  calculateLashingRing,
  setEarThick,
  setEarRadius,
  setHoleDiam,
  setJumper,
  setBoltDiam,
  setLoad,
  setEMatLimit,
  setBMatLimit,
  setPlaneCount,
  setConFactor,
  setSigmaInEar,
  setSigmaSm,
  setTauInBolt,
  setEarFS,
  setEarFSSM,
  setBoltFS,
  setToogler,
} = lashingSlice.actions;

export default lashingSlice.reducer;
