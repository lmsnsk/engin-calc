import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  earParams: {
    earThick: { value: "", unit: { factor: 1, text: "мм" } },
    earRadius: { value: "", unit: { factor: 1, text: "мм" } },
    holeDiam: { value: "", unit: { factor: 1, text: "мм" } },
    jumper: { value: "", unit: { factor: 1, text: "мм" } },
    boltDiam: { value: "", unit: { factor: 1, text: "мм" } },
    load: { value: "", unit: { factor: 1, text: "кгс" } },
    matEarLimit: { value: "", unit: { factor: 1, text: "кгсмм2" } },
    matBoltLimit: { value: "", unit: { factor: 1, text: "кгсмм2" } },
    planeCount: "",
  },
  jumperCustom: "",
  conFactorText: "Неподвижное разъемное",
  conFactor: 1,
  sigmaInEar: { value: "", unit: { factor: 1, text: "кгсмм2" } },
  sigmaSm: { value: "", unit: { factor: 1, text: "кгсмм2" } },
  tauInBolt: { value: "", unit: { factor: 1, text: "кгсмм2" } },
  earFS: "",
  earFSSM: "",
  boltFS: "",
  toogler: true,
};

const lashingSlice = createSlice({
  name: "lashingRing",
  initialState,
  reducers: {
    calculateLashingRing(state) {
      if (
        state.earParams.earThick.value &&
        state.earParams.earRadius.value &&
        state.earParams.holeDiam.value &&
        state.earParams.boltDiam.value &&
        state.earParams.load.value &&
        state.earParams.matEarLimit.value &&
        state.earParams.matBoltLimit.value &&
        state.earParams.planeCount
      ) {
        let jumperCustom =
          (state.earParams.earRadius.value * state.earParams.earRadius.unit.factor * 2 -
            state.earParams.holeDiam.value * state.earParams.holeDiam.unit.factor) /
          2 /
          state.earParams.jumper.unit.factor;
        state.jumperCustom = jumperCustom;
        let factor =
          0.565 +
          0.46 -
          ((0.1 * (state.earParams.earRadius.value * state.earParams.earRadius.unit.factor * 2)) /
            state.earParams.holeDiam.value) *
            state.earParams.holeDiam.unit.factor;
        let sigmaInEar =
          (state.earParams.load.value * state.earParams.load.unit.factor) /
          (2 *
            (state.toogler
              ? jumperCustom * state.earParams.jumper.unit.factor
              : state.earParams.jumper.value * state.earParams.jumper.unit.factor) *
            state.earParams.earThick.value *
            state.earParams.earThick.unit.factor *
            factor) /
          state.sigmaInEar.unit.factor;
        let sigmaSm =
          (state.earParams.load.value * state.earParams.load.unit.factor) /
          (state.earParams.earThick.value *
            state.earParams.earThick.unit.factor *
            state.earParams.holeDiam.value *
            state.earParams.holeDiam.unit.factor) /
          state.sigmaSm.unit.factor;
        let tauInBolt =
          (4 * state.earParams.load.value * state.earParams.load.unit.factor) /
          (Math.PI *
            (state.earParams.boltDiam.value * state.earParams.boltDiam.unit.factor) ** 2 *
            state.earParams.planeCount) /
          state.tauInBolt.unit.factor;
        let earFS =
          (state.earParams.matEarLimit.value * state.earParams.matEarLimit.unit.factor) /
          sigmaInEar /
          state.sigmaInEar.unit.factor;
        let earFSSM =
          (state.earParams.matEarLimit.value *
            state.earParams.matEarLimit.unit.factor *
            state.conFactor) /
          sigmaSm /
          state.sigmaSm.unit.factor;
        let boltFS =
          (state.earParams.matBoltLimit.value * state.earParams.matBoltLimit.unit.factor * 0.63) /
          tauInBolt /
          state.tauInBolt.unit.factor;
        state.sigmaInEar.value = sigmaInEar;
        state.sigmaSm.value = sigmaSm;
        state.tauInBolt.value = tauInBolt;
        state.earFS = earFS;
        state.earFSSM = earFSSM;
        state.boltFS = boltFS;
      }
    },
    setEarThick(state, action) {
      state.earParams.earThick.value = action.payload;
    },
    setEarThickUnit(state, action) {
      state.earParams.earThick.unit = action.payload;
    },
    setEarRadius(state, action) {
      state.earParams.earRadius.value = action.payload;
    },
    setEarRadiusUnit(state, action) {
      state.earParams.earRadius.unit = action.payload;
    },
    setHoleDiam(state, action) {
      state.earParams.holeDiam.value = action.payload;
    },
    setHoleDiamUnit(state, action) {
      state.earParams.holeDiam.unit = action.payload;
    },
    setJumper(state, action) {
      state.earParams.jumper.value = action.payload;
    },
    setJumperUnit(state, action) {
      state.earParams.jumper.unit = action.payload;
    },
    setBoltDiam(state, action) {
      state.earParams.boltDiam.value = action.payload;
    },
    setBoltDiamUnit(state, action) {
      state.earParams.boltDiam.unit = action.payload;
    },
    setLoad(state, action) {
      state.earParams.load.value = action.payload;
    },
    setLoadUnit(state, action) {
      state.earParams.load.unit = action.payload;
    },
    setEMatLimit(state, action) {
      state.earParams.matEarLimit.value = action.payload;
    },
    setEMatLimitUnit(state, action) {
      state.earParams.matEarLimit.unit = action.payload;
    },
    setBMatLimit(state, action) {
      state.earParams.matBoltLimit.value = action.payload;
    },
    setBMatLimitUnit(state, action) {
      state.earParams.matBoltLimit.unit = action.payload;
    },
    setPlaneCount(state, action) {
      state.earParams.planeCount = action.payload;
    },
    setConFactor(state, action) {
      state.conFactor = action.payload.value;
      state.conFactorText = action.payload.name;
    },
    setSigmaInEarUnit(state, action) {
      state.sigmaInEar.unit = action.payload;
    },
    setSigmaSmUnit(state, action) {
      state.sigmaSm.unit = action.payload;
    },
    setTauInBoltUnit(state, action) {
      state.tauInBolt.unit = action.payload;
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
  setToogler,
  setEarThickUnit,
  setEarRadiusUnit,
  setHoleDiamUnit,
  setJumperUnit,
  setBoltDiamUnit,
  setLoadUnit,
  setEMatLimitUnit,
  setBMatLimitUnit,
  setSigmaInEarUnit,
  setSigmaSmUnit,
  setTauInBoltUnit,
} = lashingSlice.actions;

export default lashingSlice.reducer;
