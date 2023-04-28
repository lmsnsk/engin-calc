import stl from "./Spring.module.css";
import { useSelector } from "react-redux";
import { calculateSpring, setD1, setd, setc1, setD1Unit, setdUnit, setc1Unit } from "../../../redux/springSlice";
import { meterUnitArray, nmmUnitArray } from "../../Units/unitArrays";
import { inputBlock } from "../../supportFunctions/inputBlock";

const SpringInputBlock2 = () => {
  const { D1, d, c1 } = useSelector((state) => state.spring);

  const inputArrayParams = [
    {
      name: "Внейшний диаметр пружины",
      value: D1.value,
      setValue: setD1,
      unit: {
        unitArr: meterUnitArray,
        changeUnit: setD1Unit,
        currentUnit: D1.unit,
      },
    },
    {
      name: "Диаметр проволоки пружины",
      value: d.value,
      setValue: setd,
      unit: {
        unitArr: meterUnitArray,
        changeUnit: setdUnit,
        currentUnit: d.unit,
      },
    },
    {
      name: "Жесткость одного витка",
      value: c1.value,
      setValue: setc1,
      unit: {
        unitArr: nmmUnitArray,
        changeUnit: setc1Unit,
        currentUnit: c1.unit,
      },
    },
  ];

  return <div className={stl.initialData}>{inputBlock(inputArrayParams, calculateSpring)}</div>;
};

export default SpringInputBlock2;
