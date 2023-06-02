import { useSelector } from "react-redux";
import stl from "./BoltGroup.module.css";
import {
  addRow,
  calculateBoltGroup,
  removeRow,
  setBoltParams,
  setCenterDistance,
  setLoad,
  setMatLimit,
  setBoltLimit,
  setThickness,
  setLoadUnit,
  setCenterDistanceUnit,
  setThicknessUnit,
  setMatLimitUnit,
  setBoltLimitUnit,
} from "../../../redux/boltGroupSlice";
import MatrixInput from "../../Input/MatrixInput";

import { kgsUnitArray, kgsmm2UnitArray, meterUnitArray } from "../../Units/unitArrays";
import { inputBlock } from "../../supportFunctions/inputBlock";

const titles = ["Диаметр", "Плечо", "Угол"];
const units = ["мм", "мм", <p>&deg;</p>];

const BoltGroupInputBlock = () => {
  const { load, matLimit, boltLimit, centerDistance, thickness, boltParams } = useSelector((state) => state.boltGroup);

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
      name: "Расстояние от центра кручения до нагрузки",
      value: centerDistance.value,
      setValue: setCenterDistance,
      unit: {
        unitArr: meterUnitArray,
        changeUnit: setCenterDistanceUnit,
        currentUnit: centerDistance.unit,
      },
    },
    {
      name: "Толщина пластины",
      value: thickness.value,
      setValue: setThickness,
      unit: {
        unitArr: meterUnitArray,
        changeUnit: setThicknessUnit,
        currentUnit: thickness.unit,
      },
    },
    {
      name: "Предел прочности материала пластины",
      value: matLimit.value,
      setValue: setMatLimit,
      unit: {
        unitArr: kgsmm2UnitArray,
        changeUnit: setMatLimitUnit,
        currentUnit: matLimit.unit,
      },
    },
    {
      name: "Предел прочности материала болта",
      value: boltLimit.value,
      setValue: setBoltLimit,
      unit: {
        unitArr: kgsmm2UnitArray,
        changeUnit: setBoltLimitUnit,
        currentUnit: boltLimit.unit,
      },
    },
  ];

  return (
    <>
      <div className={stl.initialData}>{inputBlock(inputArrayParams, calculateBoltGroup)}</div>
      <h2>Матрица болтов</h2>
      <MatrixInput
        titles={titles}
        value={boltParams}
        units={units}
        setValue={setBoltParams}
        addRow={addRow}
        removeRow={removeRow}
      />
    </>
  );
};

export default BoltGroupInputBlock;
