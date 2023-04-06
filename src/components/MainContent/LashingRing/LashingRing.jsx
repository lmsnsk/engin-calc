import stl from "./LashingRing.module.css";
import image from "./../../../assets/images/ear.png";
import Results from "../../Results/Results";
import CalculationButton from "../../Input/CalculationButton";
import SelectInput from "../../Input/SelectInput";
import {
  calculateLashingRing,
  setBMatLimit,
  setBoltDiam,
  setConFactor,
  setEarRadius,
  setEarThick,
  setEMatLimit,
  setHoleDiam,
  setJumper,
  setLoad,
  setPlaneCount,
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
} from "../../../redux/lashingSlice";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../Input/CheckBox";
import Units from "../../Units/Units";
import InputForm from "../../Input/InputForm";

const meterUnitArray = [
  { text: "мм", factor: 1 },
  { text: "см", factor: 10 },
  { text: "м", factor: 1000 },
];
const kgsUnitArray = [
  { text: "кгс", factor: 1 },
  { text: "тс", factor: 1000 },
  { text: "Н", factor: 1 / 9.81 },
  { text: "кН", factor: 1000 / 9.81 },
];
const kgsmm2UnitArray = [
  { text: "кгс/мм2", factor: 1 },
  { text: "Мпа", factor: 1 / 9.81 },
];

const paramsArray = [
  { value: 0.2, name: "Подвижное" },
  { value: 0.65, name: "Малоподвижное" },
  { value: 1, name: "Неподвижное разъемное" },
  { value: 1.3, name: "Неподвижное неразъемное" },
];

const LashingRing = () => {
  const earThick = useSelector((state) => state.lashingRing.earParams.earThick);
  const earRadius = useSelector((state) => state.lashingRing.earParams.earRadius);
  const holeDiam = useSelector((state) => state.lashingRing.earParams.holeDiam);
  const jumper = useSelector((state) => state.lashingRing.earParams.jumper);
  const boltDiam = useSelector((state) => state.lashingRing.earParams.boltDiam);
  const load = useSelector((state) => state.lashingRing.earParams.load);
  const matEarLimit = useSelector((state) => state.lashingRing.earParams.matEarLimit);
  const matBoltLimit = useSelector((state) => state.lashingRing.earParams.matBoltLimit);
  const planeCount = useSelector((state) => state.lashingRing.earParams.planeCount);
  const conFactor = useSelector((state) => state.lashingRing.conFactor);
  const conFactorText = useSelector((state) => state.lashingRing.conFactorText);
  const sigmaInEar = useSelector((state) => state.lashingRing.sigmaInEar);
  const earFS = useSelector((state) => state.lashingRing.earFS);
  const sigmaSm = useSelector((state) => state.lashingRing.sigmaSm);
  const earFSSM = useSelector((state) => state.lashingRing.earFSSM);
  const tauInBolt = useSelector((state) => state.lashingRing.tauInBolt);
  const boltFS = useSelector((state) => state.lashingRing.boltFS);
  const toogler = useSelector((state) => state.lashingRing.toogler);
  const jumperCustom = useSelector((state) => state.lashingRing.jumperCustom);

  const dispatch = useDispatch();

  const results = [
    {
      id: 1,
      name: "Напряжения в ушке",
      value: sigmaInEar.value,
      unit: (
        <Units
          unitArr={kgsmm2UnitArray}
          changeUnit={setSigmaInEarUnit}
          currentUnit={sigmaInEar.unit}
          calculateFn={calculateLashingRing}
        />
      ),
    },
    { id: 2, name: "Запас прочности в ушке", value: earFS, unit: "", color: true },
    {
      id: 3,
      name: "Напряжения смятия материала ушка",
      value: sigmaSm.value,
      unit: (
        <Units
          unitArr={kgsmm2UnitArray}
          changeUnit={setSigmaSmUnit}
          currentUnit={sigmaSm.unit}
          calculateFn={calculateLashingRing}
        />
      ),
    },
    { id: 4, name: "Запас прочности по смятию ушка", value: earFSSM, unit: "", color: true },
    {
      id: 5,
      name: "Напряжения среза в стержне болта",
      value: tauInBolt.value,
      unit: (
        <Units
          unitArr={kgsmm2UnitArray}
          changeUnit={setTauInBoltUnit}
          currentUnit={tauInBolt.unit}
          calculateFn={calculateLashingRing}
        />
      ),
    },
    { id: 6, name: "Запас прочности в стержне болта", value: boltFS, unit: "", color: true },
  ];

  return (
    <div className={stl.wrapper}>
      <h1>Расчёт проушин и болтов</h1>
      <div className={stl.imageBox}>
        <img className={stl.image} src={image} alt="Проушина" />
      </div>
      <div className={stl.initialData}>
        <InputForm
          name="Толщина ушка"
          value={earThick.value}
          unit={
            <Units
              unitArr={meterUnitArray}
              changeUnit={setEarThickUnit}
              currentUnit={earThick.unit}
              calculateFn={calculateLashingRing}
            />
          }
          setValue={setEarThick}
          calculateFn={calculateLashingRing}
        />
        <InputForm
          name="Радиус ушка"
          value={earRadius.value}
          unit={
            <Units
              unitArr={meterUnitArray}
              changeUnit={setEarRadiusUnit}
              currentUnit={earRadius.unit}
              calculateFn={calculateLashingRing}
            />
          }
          setValue={setEarRadius}
          calculateFn={calculateLashingRing}
        />
        <InputForm
          name="Диаметр отверстия"
          value={holeDiam.value}
          unit={
            <Units
              unitArr={meterUnitArray}
              changeUnit={setHoleDiamUnit}
              currentUnit={holeDiam.unit}
              calculateFn={calculateLashingRing}
            />
          }
          setValue={setHoleDiam}
          calculateFn={calculateLashingRing}
        />
        <div className={stl.label}>Отверстие и радиус ушка соосны</div>
        <CheckBox
          check={toogler}
          setCheck={setToogler}
          sideEffect={function () {
            dispatch(calculateLashingRing());
          }}
        />
        <InputForm
          name="Поперечная перемычка"
          value={toogler ? jumperCustom : jumper.value}
          unit={
            <Units
              unitArr={meterUnitArray}
              changeUnit={setJumperUnit}
              currentUnit={jumper.unit}
              calculateFn={calculateLashingRing}
            />
          }
          setValue={setJumper}
          disableInput={toogler}
          calculateFn={calculateLashingRing}
        />
        <InputForm
          name="Диаметр болта"
          value={boltDiam.value}
          unit={
            <Units
              unitArr={meterUnitArray}
              changeUnit={setBoltDiamUnit}
              currentUnit={boltDiam.unit}
              calculateFn={calculateLashingRing}
            />
          }
          setValue={setBoltDiam}
          calculateFn={calculateLashingRing}
        />
        <InputForm
          name="Нагрузка"
          value={load.value}
          unit={
            <Units
              unitArr={kgsUnitArray}
              changeUnit={setLoadUnit}
              currentUnit={load.unit}
              calculateFn={calculateLashingRing}
            />
          }
          setValue={setLoad}
          calculateFn={calculateLashingRing}
        />
        <InputForm
          name="Предел прочности ушка"
          value={matEarLimit.value}
          unit={
            <Units
              unitArr={kgsmm2UnitArray}
              changeUnit={setEMatLimitUnit}
              currentUnit={matEarLimit.unit}
              calculateFn={calculateLashingRing}
            />
          }
          setValue={setEMatLimit}
          calculateFn={calculateLashingRing}
        />
        <InputForm
          name="Предел прочности болта"
          value={matBoltLimit.value}
          unit={
            <Units
              unitArr={kgsmm2UnitArray}
              changeUnit={setBMatLimitUnit}
              currentUnit={matBoltLimit.unit}
              calculateFn={calculateLashingRing}
            />
          }
          setValue={setBMatLimit}
          calculateFn={calculateLashingRing}
        />
        <InputForm
          name="Кол-во плоскостей среза"
          value={planeCount}
          unit={<p>шт</p>}
          setValue={setPlaneCount}
          calculateFn={calculateLashingRing}
        />
        <div className={stl.form}>Тип соединения</div>
        <SelectInput
          name="connactionType"
          id="connactionType"
          paramsArray={paramsArray}
          value={conFactor}
          text={conFactorText}
          setValue={setConFactor}
          sideEffect={function () {
            dispatch(calculateLashingRing());
          }}
        />
      </div>
      <CalculationButton calculateFn={calculateLashingRing} text="Рассчитать" />
      <Results results={results} />
    </div>
  );
};

export default LashingRing;
