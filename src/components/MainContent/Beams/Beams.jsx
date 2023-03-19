import { useDispatch, useSelector } from "react-redux";
import {
  calculateTwoSupBeam,
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
} from "../../../redux/beamsSlice";
import InputForm from "../../Input/InputForm";
import SelectHandMadeInput from "../../Input/SelectHandMadeInput";
import stl from "./../MainContent.module.css";
import TwoSupBeam from "./Sections/TwoSupBeam";
import CalculationButton from "../../Input/CalculationButton";
import Section from "./Sections/Section";
import Results from "../../Results/Results";

let [mm, kgs, kgsm, kgsmm2, gpa] = ["мм", "кгс", "кгс м", "кгс/мм2", "ГПа"];

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

const Beams = (props) => {
  const sectionShowed = useSelector((state) => state.beams.sectionShowed);
  const sectionShowedText = useSelector((state) => state.beams.sectionShowedText);
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

  const dispatch = useDispatch();
  const calculateCurrentSection = () => dispatch(calculateSection());
  const calculateCurrentBeamType = () => dispatch(calculateTwoSupBeam());

  const currentBeamType = () => {
    switch (beamTypeShowed) {
      case 1:
        return <TwoSupBeam title={paramsBeamTypeArray[0].name} calculateFn={calculateCurrentBeamType} />;
      case 2:
        return <TwoSupBeam title={titles[1]} />;
      case 3:
        return <TwoSupBeam title={titles[2]} />;
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

  let results = [
    { id: 1, name: "Реакция в точке А", value: aReaction, unit: kgs },
    { id: 2, name: "Реакция в точке Б", value: bReaction, unit: kgs },
    { id: 3, name: "Максимальный изгибающий момент", value: moment, unit: kgsm },
    { id: 4, name: "Максимальные напряжения", value: strain, unit: kgsmm2 },
    { id: 5, name: "Максимальный прогиб", value: deflection, unit: mm },
    { id: 6, name: "Запас прочности", value: safeFactor, unit: "", color: true },
  ];

  return (
    <div className={stl.content}>
      <div className={stl.wrapper}>
        <h1>Расчёт балок</h1>
        <SelectHandMadeInput
          name="sections"
          id="sections"
          paramsArray={paramsSectionsArray}
          value={sectionShowed}
          setValue={setSectionShowed}
          text={sectionShowedText}
        />
        <Section titles={titles} calculateFn={calculateCurrentSection} />
        <div className={stl.initialData}>
          <InputForm
            name="Нагрузка"
            value={load}
            unit={kgs}
            setValue={setLoad}
            calculateFn={calculateCurrentBeamType}
          />
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
        <SelectHandMadeInput
          name="beamsType"
          id="beamsType"
          paramsArray={paramsBeamTypeArray}
          value={beamTypeShowed}
          setValue={setBeamTypeShowed}
          text={beamTypeShowedText}
        />
        {currentBeamType()}
        <CalculationButton calculateFn={calculateCurrentBeamType} text="Рассчитать" />
        <Results results={results} />
      </div>
    </div>
  );
};

export default Beams;
