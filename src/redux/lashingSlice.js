import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  earParams: {
    earThick: { value: "", name: "Толщина ушка" },
    earRadius: { value: "", name: "Радиус ушка" },
    holeDiam: { value: "", name: "Диаметр отверстия" },
    jumper: { value: "", name: "Поперечная перемычка" },
    boltDiam: { value: "", name: "Диаметр болта" },
    load: { value: "", name: "Нагрузка" },
    matEarLimit: { value: "", name: "Предел прочности ушка" },
    matBoltLimit: { value: "", name: "Предел прочности болта" },
    planeCount: { value: "", name: "Кол-во плоскостей среза" },
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
      let jumperCustom = (state.earParams.earRadius.value * 2 - state.earParams.holeDiam.value) / 2;
      state.jumperCustom = jumperCustom;
      let factor = 0.565 + 0.46 - (0.1 * (state.earParams.earRadius.value * 2)) / state.earParams.holeDiam.value;
      let sigmaInEar =
        state.earParams.load.value /
        (2 *
          (state.toogler ? state.jumperCustom : state.earParams.jumper.value) *
          state.earParams.earThick.value *
          factor);
      let sigmaSm = state.earParams.load.value / (state.earParams.earThick.value * state.earParams.holeDiam.value);
      let tauInBolt =
        (4 * state.earParams.load.value) /
        (Math.PI * state.earParams.boltDiam.value ** 2 * state.earParams.planeCount.value);
      let earFS = state.earParams.matEarLimit.value / sigmaInEar;
      let earFSSM = (state.earParams.matEarLimit.value * state.conFactor) / sigmaInEar;
      let boltFS = (state.earParams.matBoltLimit.value * 0.63) / tauInBolt;
      state.sigmaInEar = sigmaInEar;
      state.sigmaSm = sigmaSm;
      state.tauInBolt = tauInBolt;
      state.earFS = earFS;
      state.earFSSM = earFSSM;
      state.boltFS = boltFS;
    },
    setEarThick(state, action) {
      state.earParams.earThick.value = action.payload;
    },
    setEarRadius(state, action) {
      state.earParams.earRadius.value = action.payload;
    },
    setHoleDiam(state, action) {
      state.earParams.holeDiam.value = action.payload;
    },
    setJumper(state, action) {
      state.earParams.jumper.value = action.payload;
    },
    setBoltDiam(state, action) {
      state.earParams.boltDiam.value = action.payload;
    },
    setLoad(state, action) {
      state.earParams.load.value = action.payload;
    },
    setEMatLimit(state, action) {
      state.earParams.matEarLimit.value = action.payload;
    },
    setBMatLimit(state, action) {
      state.earParams.matBoltLimit.value = action.payload;
    },
    setPlaneCount(state, action) {
      state.earParams.planeCount.value = action.payload;
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
