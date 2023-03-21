import { useSelector } from "react-redux";
import {
  addRow,
  removeRow,
  setBoltParams,
  setCenterDistance,
  setLoad,
  setMatLimit,
  setSliceLimit,
  setThickness,
} from "../../../redux/boltGroupSlice";
import InputForm from "../../Input/InputForm";
import MatrixInput from "../../Input/MatrixInput";
import stl from "./../MainContent.module.css";

const BoltGroup = () => {
  const load = useSelector((state) => state.boltGroup.load);
  const matLimit = useSelector((state) => state.boltGroup.matLimit);
  const sliceLimit = useSelector((state) => state.boltGroup.sliceLimit);
  const centerDistance = useSelector((state) => state.boltGroup.centerDistance);
  const thickness = useSelector((state) => state.boltGroup.thickness);
  const boltParams = useSelector((state) => state.boltGroup.boltParams);

  const titles = ["Диаметр", "Плечо", "Угол"];
  const units = ["мм", "мм", "град"];

  function input(name, value, unit, setValue, calculateFn, disableInput) {
    return (
      <InputForm
        name={name}
        value={value}
        unit={unit}
        setValue={setValue}
        calculateFn={calculateFn}
        disableInput={disableInput}
      />
    );
  }

  return (
    <div className={stl.wrapper}>
      <h1>Расчет группы болтов</h1>
      <div className={stl.initialData}>
        {input("Нагрузка", load, "мм", setLoad, () => {})}
        {input("Расстояние от центра кручения до нагрузки", centerDistance, "мм", setCenterDistance, () => {})}
        {input("Толщина пластины", thickness, "мм", setThickness, () => {})}
        {input("Предел прочности смятия пластины", matLimit, "кгс/мм2", setMatLimit, () => {})}
        {input("Предел прочности на срез болта", sliceLimit, "кгс/мм2", setSliceLimit, () => {})}
      </div>
      <h2>Матрица болтов</h2>
      <MatrixInput
        titles={titles}
        value={boltParams}
        units={units}
        setValue={setBoltParams}
        addRow={addRow}
        removeRow={removeRow}
      />
    </div>
  );
};

export default BoltGroup;
