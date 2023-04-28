import stl from "./Spring.module.css";
import { useSelector } from "react-redux";
import {
  setF1,
  setF2,
  seth,
  setDelta,
  setRo,
  calculateF3,
  setF1Unit,
  setF2Unit,
  sethUnit,
  setRoUnit,
} from "../../../redux/springSlice";
import { kgm3UnitArray, kgsUnitArray, meterUnitArray } from "../../Units/unitArrays";
import { inputBlock } from "./../../supportFunctions/inputBlock";

const SpringInputBlock1 = () => {
  const { springType, F1, F2, h, delta, ro } = useSelector((state) => state.spring);

  function resultTextDelta() {
    if (springType === 1) {
      return "Относительный инерциальный зазор";
    } else if (springType === 2) {
      return "Коэффициент максимальной деформации";
    } else {
      return "";
    }
  }

  const inputArrayParams = [
    {
      name: "Рабочий ход пружины",
      value: h.value,
      setValue: seth,
      unit: {
        unitArr: meterUnitArray,
        changeUnit: sethUnit,
        currentUnit: h.unit,
      },
    },
    {
      name: "Плотность материала пружины",
      value: ro.value,
      setValue: setRo,
      unit: {
        unitArr: kgm3UnitArray,
        changeUnit: setRoUnit,
        currentUnit: ro.unit,
      },
    },
    {
      name: resultTextDelta(),
      value: delta,
      setValue: setDelta,
      unit: { currentUnit: null },
    },
    {
      name: "Сила пружины при предварительной деформации",
      value: F1.value,
      setValue: setF1,
      unit: {
        unitArr: kgsUnitArray,
        changeUnit: setF1Unit,
        currentUnit: F1.unit,
      },
    },
    {
      name: "Сила пружины при рабочей деформации",
      value: F2.value,
      setValue: setF2,
      unit: {
        unitArr: kgsUnitArray,
        changeUnit: setF2Unit,
        currentUnit: F2.unit,
      },
    },
  ];

  return <div className={stl.initialData}>{inputBlock(inputArrayParams, calculateF3)}</div>;
};

export default SpringInputBlock1;
