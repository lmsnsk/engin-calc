import stl from "./BoltGroup.module.css";
import { useDispatch, useSelector } from "react-redux";
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
import Units from "./../../Units/Units";
import CalculationButton from "../../Input/CalculationButton";
import InputForm from "../../Input/InputForm";
import MatrixInput from "../../Input/MatrixInput";
import boltsImg from "./../../../assets/images/bolt-group.png";
import Results from "../../Results/Results";
import { kgsUnitArray, kgsmm2UnitArray, meterUnitArray } from "../../Units/unitArrays";

const BoltGroup = () => {
  const load = useSelector((state) => state.boltGroup.load);
  const matLimit = useSelector((state) => state.boltGroup.matLimit);
  const boltLimit = useSelector((state) => state.boltGroup.boltLimit);
  const centerDistance = useSelector((state) => state.boltGroup.centerDistance);
  const thickness = useSelector((state) => state.boltGroup.thickness);
  const boltParams = useSelector((state) => state.boltGroup.boltParams);
  const sliseMargin = useSelector((state) => state.boltGroup.sliseMargin);
  const collapseMargin = useSelector((state) => state.boltGroup.collapseMargin);

  const titles = ["Диаметр", "Плечо", "Угол"];
  const units = ["мм", "мм", <p>&deg;</p>];

  const dispatch = useDispatch();

  function calculate() {
    dispatch(calculateBoltGroup());
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
        <InputForm
          name="Нагрузка"
          value={load.value}
          setValue={setLoad}
          calculateFn={calculateBoltGroup}
          unit={
            <Units
              unitArr={kgsUnitArray}
              changeUnit={setLoadUnit}
              currentUnit={load.unit}
              calculateFn={calculateBoltGroup}
            />
          }
        />
        <InputForm
          name="Расстояние от центра кручения до нагрузки"
          value={centerDistance.value}
          setValue={setCenterDistance}
          calculateFn={calculateBoltGroup}
          unit={
            <Units
              unitArr={meterUnitArray}
              changeUnit={setCenterDistanceUnit}
              currentUnit={centerDistance.unit}
              calculateFn={calculateBoltGroup}
            />
          }
        />
        <InputForm
          name="Толщина пластины"
          value={thickness.value}
          setValue={setThickness}
          calculateFn={calculateBoltGroup}
          unit={
            <Units
              unitArr={meterUnitArray}
              changeUnit={setThicknessUnit}
              currentUnit={thickness.unit}
              calculateFn={calculateBoltGroup}
            />
          }
        />
        <InputForm
          name="Предел прочности материала пластины"
          value={matLimit.value}
          setValue={setMatLimit}
          calculateFn={calculateBoltGroup}
          unit={
            <Units
              unitArr={kgsmm2UnitArray}
              changeUnit={setMatLimitUnit}
              currentUnit={matLimit.unit}
              calculateFn={calculateBoltGroup}
            />
          }
        />
        <InputForm
          name="Предел прочности материала болта"
          value={boltLimit.value}
          setValue={setBoltLimit}
          calculateFn={calculateBoltGroup}
          unit={
            <Units
              unitArr={kgsmm2UnitArray}
              changeUnit={setBoltLimitUnit}
              currentUnit={boltLimit.unit}
              calculateFn={calculateBoltGroup}
            />
          }
        />
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
      <CalculationButton calculateFn={calculate} text="Рассчитать" />
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
