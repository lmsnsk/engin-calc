import stl from "./LashingRing.module.css";
import image from "./../../../assets/images/ear.png";
import Results from "../../Results/Results";
import CalculationButton from "../../Input/CalculationButton";
import input from "./../../hoc/input";
import SelectInput from "../../Input/SelectInput";
import {
  calculateLashingRing,
  setBMatLimit,
  setBoltDiam,
  setBoltFS,
  setConFactor,
  setEarFS,
  setEarFSSM,
  setEarRadius,
  setEarThick,
  setEMatLimit,
  setHoleDiam,
  setJumper,
  setLoad,
  setPlaneCount,
  setSigmaInEar,
  setSigmaSm,
  setTauInBolt,
  setToogler,
} from "../../../redux/lashingSlice";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../Input/CheckBox";

const [mm, kgs, kgsmm2, sht] = [
  "мм",
  "кгс",
  <>
    кг/мм<sup>2</sup>
  </>,
  "шт",
];

let paramsArray = [
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

  const results = [
    { id: 1, name: "Напряжения в ушке", value: sigmaInEar, unit: kgsmm2 },
    { id: 2, name: "Запас прочности в ушке", value: earFS, unit: "", color: true },
    { id: 3, name: "Напряжения смятия материала ушка", value: sigmaSm, unit: kgsmm2 },
    { id: 4, name: "Запас прочности по смятию ушка", value: earFSSM, unit: "", color: true },
    { id: 5, name: "Напряжения среза в стержне болта", value: tauInBolt, unit: kgsmm2 },
    { id: 6, name: "Запас прочности в стержне болта", value: boltFS, unit: "", color: true },
  ];

  const dispatch = useDispatch();

  const inputCalculation = () => dispatch(calculateLashingRing());

  function clearEarResults() {
    dispatch(setSigmaInEar(""));
    dispatch(setEarFS(""));
    dispatch(setSigmaSm(""));
    dispatch(setEarFSSM(""));
    dispatch(setTauInBolt(""));
    dispatch(setBoltFS(""));
  }

  return (
    <div className={stl.wrapper}>
      <h1>Расчёт проушин и болтов</h1>
      <div className={stl.imageBox}>
        <img className={stl.image} src={image} alt="Проушина" />
      </div>
      <div className={stl.initialData}>
        {input("Толщина ушка", earThick, mm, setEarThick, inputCalculation)}
        {input("Радиус ушка", earRadius, mm, setEarRadius, inputCalculation)}
        {input("Диаметр отверстия", holeDiam, mm, setHoleDiam, inputCalculation)}
        <div className={stl.label}>Отверстие и радиус ушка соосны</div>
        <CheckBox check={toogler} setCheck={setToogler} />
        {input("Поперечная перемычка", toogler ? jumperCustom : jumper, mm, setJumper, inputCalculation, toogler)}
        {input("Диаметр болта", boltDiam, mm, setBoltDiam, inputCalculation)}
        {input("Нагрузка", load, kgs, setLoad, inputCalculation)}
        {input("Предел прочности ушка", matEarLimit, kgsmm2, setEMatLimit, inputCalculation)}
        {input("Предел прочности болта", matBoltLimit, kgsmm2, setBMatLimit, inputCalculation)}
        {input("Кол-во плоскостей среза", planeCount, sht, setPlaneCount, inputCalculation)}
        <div className={stl.form}>Тип соединения</div>
        <SelectInput
          name="connactionType"
          id="connactionType"
          paramsArray={paramsArray}
          value={conFactor}
          text={conFactorText}
          setValue={setConFactor}
          sideEffect={clearEarResults}
        />
      </div>
      <CalculationButton calculateFn={calculateLashingRing} text="Рассчитать" />
      <Results results={results} />
    </div>
  );
};

export default LashingRing;
