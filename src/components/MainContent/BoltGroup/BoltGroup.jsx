import { useSelector } from "react-redux";
import {
  addRow,
  calculateBoltGroup,
  removeRow,
  setBoltParams,
  setCenterDistance,
  setLoad,
  setMatLimit,
  setSliceLimit,
  setThickness,
} from "../../../redux/boltGroupSlice";
import CalculationButton from "../../Input/CalculationButton";
import InputForm from "../../Input/InputForm";
import MatrixInput from "../../Input/MatrixInput";
import stl from "./BoltGroup.module.css";
import boltsImg from "./../../../assets/images/bolt-group.png";
import Results from "../../Results/Results";

const BoltGroup = () => {
  const load = useSelector((state) => state.boltGroup.load);
  const matLimit = useSelector((state) => state.boltGroup.matLimit);
  const sliceLimit = useSelector((state) => state.boltGroup.sliceLimit);
  const centerDistance = useSelector((state) => state.boltGroup.centerDistance);
  const thickness = useSelector((state) => state.boltGroup.thickness);
  const boltParams = useSelector((state) => state.boltGroup.boltParams);
  const sliseMargin = useSelector((state) => state.boltGroup.sliseMargin);
  const collapseMargin = useSelector((state) => state.boltGroup.collapseMargin);

  const titles = ["Диаметр", "Плечо", "Угол"];
  const units = ["мм", "мм", "град"];
  const kgmm2 = (
    <>
      кг/мм<sup>2</sup>
    </>
  );

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

  const resultsSlice = sliseMargin.map((el, index) => ({
    id: index,
    name: `Болт ${index + 1}`,
    value: el,
    unit: "",
    color: true,
  }));
  const resultsCollapse = collapseMargin.map((el, index) => ({
    id: index,
    name: `Болт ${index + 1}`,
    value: el,
    unit: "",
    color: true,
  }));

  return (
    <div className={stl.wrapper}>
      <h1>Расчет группы болтов</h1>
      <div className={stl.imageBox}>
        <img className={stl.imageBolt} src={boltsImg} alt="bolts" />
      </div>
      <div className={stl.initialData}>
        {input("Нагрузка", load, "кгс", setLoad)}
        {input("Расстояние от центра кручения до нагрузки", centerDistance, "мм", setCenterDistance)}
        {input("Толщина пластины", thickness, "мм", setThickness, function () {})}
        {input("Предел прочности смятия пластины", matLimit, kgmm2, setMatLimit)}
        {input("Предел прочности на срез болта", sliceLimit, kgmm2, setSliceLimit)}
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
      <CalculationButton calculateFn={calculateBoltGroup} text="Рассчитать" />
      <div className={stl.matrixResult}>
        <div>
          {resultsSlice[0]?.value ? <h2>Запас по срезу</h2> : null}
          <Results results={resultsSlice} />
        </div>
        <div>
          {resultsCollapse[0]?.value ? <h2>Запас по смятию</h2> : null}
          <Results results={resultsCollapse} />
        </div>
      </div>
    </div>
  );
};

export default BoltGroup;
