import { useSelector } from "react-redux";
import { setBeamTypeShowed, setElMod, setLoad, setMatLimit, setSectionShowed } from "../../../redux/beamsSlice";
import InputForm from "../../Input/InputForm";
import SelectHandMadeInput from "../../Input/SelectHandMadeInput";
import stl from "./../MainContent.module.css";
import TwoSupBeam from "./Sections/TwoSupBeam";
import ChannelHoriz from "./Sections/ChannelHoriz";
import ChannelVert from "./Sections/ChannelVert";
import Circle from "./Sections/Circle";
import CircleTube from "./Sections/CircleTube";
import Corner from "./Sections/Corner";
import Rectangle from "./Sections/Rectangle";
import RectangleTube from "./Sections/RectangleTube";
import TBeam from "./Sections/TBeam";
import CalculationButton from "../../Input/CalculationButton";

let [kgs, kgsmm2, gpa] = ["кгс", "кгс/мм2", "ГПа"];

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
  const sectionShowedText = useSelector((state) => state.beams.sectionShowedText);
  const beamTypeShowed = useSelector((state) => state.beams.beamTypeShowed);
  const beamTypeShowedText = useSelector((state) => state.beams.beamTypeShowedText);
  const load = useSelector((state) => state.beams.load);
  const matLimit = useSelector((state) => state.beams.matLimit);
  const elMod = useSelector((state) => state.beams.elMod);

  let initialParams = { load: load, matLimit: matLimit, elMod: elMod };

  const currentSection = () => {
    switch (sectionShowed) {
      case 1:
        return <Circle title={titles[0]} initialParams={initialParams} />;
      case 2:
        return <CircleTube title={titles[1]} />;
      case 3:
        return <Rectangle title={titles[2]} />;
      case 4:
        return <RectangleTube title={titles[3]} />;
      case 5:
        return <ChannelVert title={titles[4]} />;
      case 6:
        return <ChannelHoriz title={titles[5]} />;
      case 7:
        return <TBeam title={titles[6]} />;
      case 8:
        return <Corner title={titles[7]} />;
      default:
        return null;
    }
  };

  const currentBeamType = () => {
    switch (beamTypeShowed) {
      case 1:
        return <TwoSupBeam title={paramsBeamTypeArray[0].name} initialParams={initialParams} />;
      case 2:
        return <TwoSupBeam title={titles[1]} />;
      case 3:
        return <TwoSupBeam title={titles[2]} />;
      default:
        return null;
    }
  };

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
        {currentSection()}
        <div className={stl.initialData}>
          <InputForm name="Нагрузка" value={load} unit={kgs} setValue={setLoad} />
          <InputForm name="Предел прочности материала" value={matLimit} unit={kgsmm2} setValue={setMatLimit} />
          <InputForm name="Модуль упругости метериала" value={elMod} unit={gpa} setValue={setElMod} />
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
        <CalculationButton calculateFn={() => {}} />
      </div>
    </div>
  );
};

export default Beams;
