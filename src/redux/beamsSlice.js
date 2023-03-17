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

const beamsSlice = createSlice({
  name: "lashingRing",
  initialState,
  reducers: "",
});
//sdfgsd
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
} = beamsSlice.actions;

export default beamsSlice.reducer;
