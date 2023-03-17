import stl from "./../MainContent.module.css";
import image from "./../../../assets/images/lashing-ring.jpg";
import { useState } from "react";
import Results from "../../Results/Results";
import CalculationButton from "../../Input/CalculationButton";
import InputForm from "../../Input/InputForm";
import SelectHandMadeInput from "../../Input/SelectHandMadeInput";

const LashingRing = (props) => {
  let [earThick, setEarThick] = useState("");
  let [earRadius, setEarRadius] = useState("");
  let [holeDiam, setHoleDiam] = useState("");
  let [jumper, setJumper] = useState("");
  let [boltDiam, setBoltDiam] = useState("");
  let [load, setLoad] = useState("");
  let [matEarLimit, setEMatLimit] = useState("");
  let [matBoltLimit, setBMatLimit] = useState("");
  let [planeCount, setPlaneCount] = useState("");
  let [conFactor, setConFactor] = useState(1);

  let [sigmaInEar, setSigmaInEar] = useState("");
  let [sigmaSm, setSigmaSm] = useState("");
  let [tauInBolt, setTauInBolt] = useState("");
  let [earFS, setEarFS] = useState("");
  let [earFSSM, setEarFSSM] = useState("");
  let [boltFS, setBoltFS] = useState("");

  const inputFn = (name, value, unit, setValue, calculateFn) => {
    return <InputForm name={name} value={value} unit={unit} setValue={setValue} calculateFn={calculateFn} />;
  };

  let [mm, kgs, kgsmm2, sht] = ["мм", "кгс", "кгс/мм2", "шт"];
  //let jumperCustom
  let factor;

  let results = [
    { id: 1, name: "Напряжения в ушке", value: sigmaInEar, unit: kgsmm2 },
    { id: 2, name: "Запас прочности в ушке", value: earFS, unit: "", color: true },
    { id: 3, name: "Напряжения смятия материала ушка", value: sigmaSm, unit: kgsmm2 },
    { id: 4, name: "Запас прочности по смятию ушка", value: earFSSM, unit: "", color: true },
    { id: 5, name: "Напряжения среза в стержне болта", value: tauInBolt, unit: kgsmm2 },
    { id: 6, name: "Запас прочности в стержне болта", value: boltFS, unit: "", color: true },
  ];

  const calculateLashingRing = () => {
    //jumperCustom = (earRadius * 2 - holeDiam) / 2;
    factor = 0.565 + 0.46 - (0.1 * (earRadius * 2)) / holeDiam;
    sigmaInEar = load / (2 * jumper * earThick * factor);
    sigmaSm = load / (earThick * holeDiam);
    tauInBolt = (4 * load) / (Math.PI * boltDiam ** 2 * planeCount);
    earFS = matEarLimit / sigmaInEar;
    earFSSM = (matEarLimit * conFactor) / sigmaInEar;
    boltFS = (matBoltLimit * 0.63) / tauInBolt;
    setSigmaInEar(sigmaInEar);
    setSigmaSm(sigmaSm);
    setTauInBolt(tauInBolt);
    setConFactor(conFactor);
    setEarFS(earFS);
    setEarFSSM(earFSSM);
    setBoltFS(boltFS);
  };

  let paramsArray = [
    { value: 0.2, name: "Подвижное" },
    { value: 0.65, name: "Малоподвижное" },
    { value: 1, name: "Неподвижное разъемное", selected: true },
    { value: 1.3, name: "Неподвижное неразъемное" },
  ];

  return (
    <div className={stl.wrapper}>
      <h1>Расчёт проушин и болтов</h1>
      <img className={stl.image} src={image} alt="Проушина" />
      <div className={stl.initialData}>
        {inputFn("Толщина ушка", earThick, mm, setEarThick, calculateLashingRing)}
        {inputFn("Радиус ушка", earRadius, mm, setEarRadius, calculateLashingRing)}
        {inputFn("Диаметр отверстия", holeDiam, mm, setHoleDiam, calculateLashingRing)}
        {inputFn("Поперечная перемычка", jumper, mm, setJumper, calculateLashingRing)}
        {inputFn("Диаметр болта", boltDiam, mm, setBoltDiam, calculateLashingRing)}
        {inputFn("Нагрузка", load, kgs, setLoad, calculateLashingRing)}
        {inputFn("Предел прочности ушка", matEarLimit, kgsmm2, setEMatLimit, calculateLashingRing)}
        {inputFn("Предел прочности болта", matBoltLimit, kgsmm2, setBMatLimit, calculateLashingRing)}
        {inputFn("Кол-во плоскостей среза", planeCount, sht, setPlaneCount, calculateLashingRing)}
        <div className={stl.form}>Тип соединения</div>
        <SelectHandMadeInput
          name="connactionType"
          id="connactionType"
          paramsArray={paramsArray}
          value={conFactor}
          setValue={setConFactor}
        />
      </div>
      <CalculationButton calculateFn={calculateLashingRing} />
      <Results results={results} />
    </div>
  );
};

export default LashingRing;
