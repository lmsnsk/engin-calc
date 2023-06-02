import { useSelector } from "react-redux";
import { kgsmm2UnitArray, kgsUnitArray, gpaUnitArray } from "../../Units/unitArrays";
import { setElMod, setLoad, setMatLimit, setLoadUnit, setMatLimitUnit, setElModUnit } from "../../../redux/beamsSlice";
import { inputBlock } from "./../../supportFunctions/inputBlock";
import stl from "./Beams.module.css";

const BeamsInputBlock = ({ calculate }) => {
  const { load, matLimit, elMod } = useSelector((state) => state.beams);

  const inputArrayParams = [
    {
      name: "Нагрузка",
      value: load.value,
      setValue: setLoad,
      unit: {
        unitArr: kgsUnitArray,
        changeUnit: setLoadUnit,
        currentUnit: load.unit,
      },
    },
    {
      name: "Предел прочности материала",
      value: matLimit.value,
      setValue: setMatLimit,
      unit: {
        unitArr: kgsmm2UnitArray,
        changeUnit: setMatLimitUnit,
        currentUnit: matLimit.unit,
      },
    },
    {
      name: "Модуль упругости метериала",
      value: elMod.value,
      setValue: setElMod,
      unit: {
        unitArr: gpaUnitArray,
        changeUnit: setElModUnit,
        currentUnit: elMod.unit,
      },
    },
  ];

  return <div className={stl.initialData}>{inputBlock(inputArrayParams, calculate)}</div>;
};

export default BeamsInputBlock;
