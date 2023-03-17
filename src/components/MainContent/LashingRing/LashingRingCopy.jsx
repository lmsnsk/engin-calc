import stl from "./../MainContent.module.css";
import image from "./../../../assets/images/lashing-ring.jpg";
import Results from "../../Results/Results";
import CalculationButton from "../../Input/CalculationButton";
import InputForm from "../../Input/InputForm";
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
} from "../../../redux/lashingSlice";
import SelectHandMadeInput from "../../Input/SelectHandMadeInput";
import { useSelector } from "react-redux";

const [mm, kgs, kgsmm2, sht] = ["мм", "кгс", "кгс/мм2", "шт"];

let paramsArray = [
  { value: 0.2, name: "Подвижное" },
  { value: 0.65, name: "Малоподвижное" },
  { value: 1, name: "Неподвижное разъемное" },
  { value: 1.3, name: "Неподвижное неразъемное" },
];

const LashingRingCopy = () => {
  const earThick = useSelector((state) => state.lashingRing.earParams.earThick.value);
  const earRadius = useSelector((state) => state.lashingRing.earParams.earRadius.value);
  const holeDiam = useSelector((state) => state.lashingRing.earParams.holeDiam.value);
  const jumper = useSelector((state) => state.lashingRing.earParams.jumper.value);
  const boltDiam = useSelector((state) => state.lashingRing.earParams.boltDiam.value);
  const load = useSelector((state) => state.lashingRing.earParams.load.value);
  const matEarLimit = useSelector((state) => state.lashingRing.earParams.matEarLimit.value);
  const matBoltLimit = useSelector((state) => state.lashingRing.earParams.matBoltLimit.value);
  const planeCount = useSelector((state) => state.lashingRing.earParams.planeCount.value);
  const conFactor = useSelector((state) => state.lashingRing.conFactor);
  const conFactorText = useSelector((state) => state.lashingRing.conFactorText);
  const sigmaInEar = useSelector((state) => state.lashingRing.sigmaInEar);
  const earFS = useSelector((state) => state.lashingRing.earFS);
  const sigmaSm = useSelector((state) => state.lashingRing.sigmaSm);
  const earFSSM = useSelector((state) => state.lashingRing.earFSSM);
  const tauInBolt = useSelector((state) => state.lashingRing.tauInBolt);
  const boltFS = useSelector((state) => state.lashingRing.boltFS);

  const inputFn = (name, value, unit, setValue, toogler) => {
    return <InputForm name={name} value={value} unit={unit} setValue={setValue} toogler={toogler} />;
  };

  //let jumperCustom

  let results = [
    { id: 1, name: "Напряжения в ушке", value: sigmaInEar, unit: kgsmm2 },
    { id: 2, name: "Запас прочности в ушке", value: earFS, unit: "", color: true },
    { id: 3, name: "Напряжения смятия материала ушка", value: sigmaSm, unit: kgsmm2 },
    { id: 4, name: "Запас прочности по смятию ушка", value: earFSSM, unit: "", color: true },
    { id: 5, name: "Напряжения среза в стержне болта", value: tauInBolt, unit: kgsmm2 },
    { id: 6, name: "Запас прочности в стержне болта", value: boltFS, unit: "", color: true },
  ];

  return (
    <div className={stl.wrapper}>
      <h1>Расчёт проушин и болтов</h1>
      <img className={stl.image} src={image} alt="Проушина" />
      <div className={stl.initialData}>
        {inputFn("Толщина ушка", earThick, mm, setEarThick)}
        {inputFn("Радиус ушка", earRadius, mm, setEarRadius)}
        {inputFn("Диаметр отверстия", holeDiam, mm, setHoleDiam)}
        <div className={stl.label}>Автоматически считать перемычку</div>
        <div>
          <input
            className={stl.checkbox}
            type="checkbox"
            // onChange={onValueChange} value={props.value}
          />
        </div>
        {inputFn("Поперечная перемычка", jumper, mm, setJumper)}
        {inputFn("Диаметр болта", boltDiam, mm, setBoltDiam)}
        {inputFn("Нагрузка", load, kgs, setLoad)}
        {inputFn("Предел прочности ушка", matEarLimit, kgsmm2, setEMatLimit)}
        {inputFn("Предел прочности болта", matBoltLimit, kgsmm2, setBMatLimit)}
        {inputFn("Кол-во плоскостей среза", planeCount, sht, setPlaneCount)}
        <div className={stl.form}>Тип соединения</div>
        <SelectHandMadeInput
          name="connactionType"
          id="connactionType"
          paramsArray={paramsArray}
          value={conFactor}
          text={conFactorText}
          setValue={setConFactor}
        />
      </div>
      <CalculationButton calculateFn={calculateLashingRing} />
      <Results results={results} />
    </div>
  );
};

export default LashingRingCopy;
