import stl from "./../MainContent.module.css";
import image from "./../../../assets/images/lashing-ring.jpg";
import Results from "../../Results/Results";
import CalculationButton from "../../Input/CalculationButton";
import InputForm from "../../Input/InputForm";
import SelectHandMadeInput from "../../Input/SelectHandMadeInput";
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
} from "../../../redux/lashingSlice";
import { useSelector } from "react-redux";
import CheckBox from "../../Input/CheckBox";

const [mm, kgs, kgsmm2, sht] = ["мм", "кгс", "кгс/мм2", "шт"];

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

  let results = [
    { id: 1, name: "Напряжения в ушке", value: sigmaInEar, unit: kgsmm2 },
    { id: 2, name: "Запас прочности в ушке", value: earFS, unit: "", color: true },
    { id: 3, name: "Напряжения смятия материала ушка", value: sigmaSm, unit: kgsmm2 },
    { id: 4, name: "Запас прочности по смятию ушка", value: earFSSM, unit: "", color: true },
    { id: 5, name: "Напряжения среза в стержне болта", value: tauInBolt, unit: kgsmm2 },
    { id: 6, name: "Запас прочности в стержне болта", value: boltFS, unit: "", color: true },
  ];

  return (
    <div className={stl.content}>
      <div className={stl.wrapper}>
        <h1>Расчёт проушин и болтов</h1>
        <img className={stl.image} src={image} alt="Проушина" />
        <div className={stl.initialData}>
          <InputForm name="Толщина ушка" value={earThick} unit={mm} setValue={setEarThick} />
          <InputForm name="Радиус ушка" value={earRadius} unit={mm} setValue={setEarRadius} />
          <InputForm name="Диаметр отверстия" value={holeDiam} unit={mm} setValue={setHoleDiam} />
          <div className={stl.label}>Автоматически считать перемычку</div>
          <CheckBox check={toogler} setCheck={setToogler} />
          <InputForm
            name="Поперечная перемычка"
            value={toogler ? jumperCustom : jumper}
            unit={mm}
            setValue={setJumper}
            disableInput={toogler}
          />
          <InputForm name="Диаметр болта" value={boltDiam} unit={mm} setValue={setBoltDiam} />
          <InputForm name="Нагрузка" value={load} unit={kgs} setValue={setLoad} />
          <InputForm name="Предел прочности ушка" value={matEarLimit} unit={kgsmm2} setValue={setEMatLimit} />
          <InputForm name="Предел прочности болта" value={matBoltLimit} unit={kgsmm2} setValue={setBMatLimit} />
          <InputForm name="Кол-во плоскостей среза" value={planeCount} unit={sht} setValue={setPlaneCount} />
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
    </div>
  );
};

export default LashingRing;
