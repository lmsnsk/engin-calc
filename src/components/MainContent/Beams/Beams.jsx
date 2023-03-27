import { useDispatch, useSelector } from "react-redux";
import {
  setBeamTypeShowed,
  setElMod,
  setLoad,
  setMatLimit,
  setSectionShowed,
  calculateChannelHorizSection,
  calculateChannelVertSection,
  calculateCircleSection,
  calculateCircleTubeSection,
  calculateRectangleSection,
  calculateRectangleTubeSection,
  calculateTBeamAndCornerSection,
  calculateTwoSupBeam,
  calculateConsoleBeam,
  calculateBuckling,
  setStrain,
  setDeflection,
  setSafeFactor,
  setCriticalLoad,
  setCriticalFactor,
  setAReaction,
  setBReaction,
  setMoment,
} from "../../../redux/beamsSlice";
import InputForm from "../../Input/InputForm";
import SelectInput from "../../Input/SelectInput";
import stl from "./../MainContent.module.css";
import TwoSupBeam from "./TwoSupBeam";
import CalculationButton from "../../Input/CalculationButton";
import Section from "./Section";
import Results from "../../Results/Results";
import ConsoleBeam from "./ConsoleBeam";
import Buckling from "./Buckling";
import circleImg from "./../../../assets/images/circle.svg";
import circleTubeImg from "./../../../assets/images/circleTube.svg";
import rectImg from "./../../../assets/images/rect.svg";
import rectTubeImg from "./../../../assets/images/rectTube.svg";
import channelVertImg from "./../../../assets/images/channelVert.svg";
import channelHorizImg from "./../../../assets/images/channelHoriz.svg";
import tBeamImg from "./../../../assets/images/tBeam.svg";
import cornerImg from "./../../../assets/images/corner.svg";

let [mm, kgs, kgsm, kgsmm2, gpa] = [
  "мм",
  "кгс",
  "кгс м",
  <>
    кг/мм<sup>2</sup>
  </>,
  "ГПа",
];

let titles = [
  "Пруток круглый",
  "Труба круглая",
  "Пруток прямоугольный",
  "Труба прямоугольная",
  "Швеллер стоячий",
  "Швеллер лежачий",
  "Тавр",
  "Уголок",
];

let paramsSectionsArray = titles.map((el, index) => ({ value: index + 1, name: el }));

let paramsBeamTypeArray = [
  { value: 1, name: "Двухопорная балка" },
  { value: 2, name: "Консольная балка" },
  { value: 3, name: "Общая потеря устойчивости" },
];

const Beams = () => {
  const sectionShowed = useSelector((state) => state.beams.sectionShowed);
  const beamTypeShowed = useSelector((state) => state.beams.beamTypeShowed);
  const beamTypeShowedText = useSelector((state) => state.beams.beamTypeShowedText);
  const load = useSelector((state) => state.beams.load);
  const matLimit = useSelector((state) => state.beams.matLimit);
  const elMod = useSelector((state) => state.beams.elMod);
  const aReaction = useSelector((state) => state.beams.aReaction);
  const bReaction = useSelector((state) => state.beams.bReaction);
  const moment = useSelector((state) => state.beams.moment);
  const strain = useSelector((state) => state.beams.strain);
  const deflection = useSelector((state) => state.beams.deflection);
  const safeFactor = useSelector((state) => state.beams.safeFactor);
  const criticalLoad = useSelector((state) => state.beams.criticalLoad);
  const criticalFactor = useSelector((state) => state.beams.criticalFactor);

  const dispatch = useDispatch();

  const calculateCurrentSection = () => dispatch(calculateSection());

  const calculateCurrentBeamType = () => {
    switch (beamTypeShowed) {
      case 1:
        return dispatch(calculateTwoSupBeam());
      case 2:
        return dispatch(calculateConsoleBeam());
      case 3:
        return dispatch(calculateBuckling());
      default:
        return null;
    }
  };

  function calculateSection() {
    switch (sectionShowed) {
      case 1:
        return calculateCircleSection();
      case 2:
        return calculateCircleTubeSection();
      case 3:
        return calculateRectangleSection();
      case 4:
        return calculateRectangleTubeSection();
      case 5:
        return calculateChannelVertSection();
      case 6:
        return calculateChannelHorizSection();
      case 7:
        return calculateTBeamAndCornerSection();
      case 8:
        return calculateTBeamAndCornerSection();
      default:
        return null;
    }
  }

  const currentBeamType = () => {
    switch (beamTypeShowed) {
      case 1:
        return <TwoSupBeam title={paramsBeamTypeArray[0].name} calculateFn={calculateCurrentBeamType} />;
      case 2:
        return <ConsoleBeam title={paramsBeamTypeArray[1].name} calculateFn={calculateCurrentBeamType} />;
      case 3:
        return <Buckling title={paramsBeamTypeArray[2].name} calculateFn={calculateCurrentBeamType} />;
      default:
        return null;
    }
  };

  let results = [
    { id: 1, name: "Реакция в точке А", value: aReaction, unit: kgs },
    { id: 2, name: "Реакция в точке Б", value: bReaction, unit: kgs },
    { id: 3, name: "Максимальный изгибающий момент", value: moment, unit: kgsm },
    { id: 4, name: "Максимальные напряжения", value: strain, unit: kgsmm2 },
    { id: 5, name: "Максимальный прогиб", value: deflection, unit: mm },
    { id: 6, name: "Запас прочности", value: safeFactor, unit: "", color: true },
    { id: 7, name: "Критическая нагрузка", value: criticalLoad, unit: kgs },
    { id: 8, name: "Запас по устойчивости", value: criticalFactor, unit: "", color: true },
  ];

  const clearBeamParams = () => {
    dispatch(setAReaction(""));
    dispatch(setBReaction(""));
    dispatch(setMoment(""));
    dispatch(setStrain(""));
    dispatch(setDeflection(""));
    dispatch(setSafeFactor(""));
    dispatch(setCriticalLoad(""));
    dispatch(setCriticalFactor(""));
  };

  function onButtonClick(section) {
    return dispatch(setSectionShowed(section));
  }

  function buttonSelect(img, section) {
    return (
      <div
        className={`${stl.buttonSelect} ${sectionShowed === section.value ? stl.buttonSelectActive : null}`}
        onClick={() => onButtonClick(section)}
      >
        <img src={img} alt="" />
      </div>
    );
  }

  return (
    <div className={stl.wrapper}>
      <h1>Расчёт балок</h1>
      <h2>Выберите сечение балки</h2>
      <div className={stl.buttonSelectBox}>
        {buttonSelect(circleImg, paramsSectionsArray[0])}
        {buttonSelect(circleTubeImg, paramsSectionsArray[1])}
        {buttonSelect(rectImg, paramsSectionsArray[2])}
        {buttonSelect(rectTubeImg, paramsSectionsArray[3])}
        {buttonSelect(channelVertImg, paramsSectionsArray[4])}
        {buttonSelect(channelHorizImg, paramsSectionsArray[5])}
        {buttonSelect(tBeamImg, paramsSectionsArray[6])}
        {buttonSelect(cornerImg, paramsSectionsArray[7])}
      </div>
      <Section titles={titles} calculateFn={calculateCurrentSection} />
      <div className={stl.initialData}>
        <InputForm name="Нагрузка" value={load} unit={kgs} setValue={setLoad} calculateFn={calculateCurrentBeamType} />
        <InputForm
          name="Предел прочности материала"
          value={matLimit}
          unit={kgsmm2}
          setValue={setMatLimit}
          calculateFn={calculateCurrentBeamType}
        />
        <InputForm
          name="Модуль упругости метериала"
          value={elMod}
          unit={gpa}
          setValue={setElMod}
          calculateFn={calculateCurrentBeamType}
        />
      </div>
      <SelectInput
        name="beamsType"
        id="beamsType"
        paramsArray={paramsBeamTypeArray}
        value={beamTypeShowed}
        setValue={setBeamTypeShowed}
        text={beamTypeShowedText}
        sideEffect={clearBeamParams}
      />
      {currentBeamType()}
      <CalculationButton calculateFn={calculateCurrentBeamType} text="Рассчитать" />
      <Results results={results} />
    </div>
  );
};

export default Beams;