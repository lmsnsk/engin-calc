import { useState } from "react";
import InputForm from "../../Input/InputForm";
import SelectHandMadeInput from "../../Input/SelectHandMadeInput";
import stl from "./../MainContent.module.css";
import ChannelHoriz from "./Sections/ChannelHoriz";
import ChannelVert from "./Sections/ChannelVert";
import Circle from "./Sections/Circle";
import CircleTube from "./Sections/CircleTube";
import Corner from "./Sections/Corner";
import Rectangle from "./Sections/Rectangle";
import RectangleTube from "./Sections/RectangleTube";
import TBeam from "./Sections/TBeam";
// import SelectInput from "../../Input/SelectInput";
// import RectangleTubeCopy from "./Sections/RectangleTube copy";

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

let paramsArray = titles.map((el, index) => ({ value: index + 1, name: el }));

const Beams = () => {
  let [sectionShowed, setSectionShowed] = useState("");
  let [load, setLoad] = useState("");
  let [matLimit, setMatLimit] = useState("");
  let [elMod, setElMod] = useState("");

  let initialParams = { load: load, matLimit: matLimit, elMod: elMod };

  const inputFn = (name, value, unit, setValue, calculateFn) => {
    return <InputForm name={name} value={value} unit={unit} setValue={setValue} calculateFn={calculateFn} />;
  };

  // const onSectionChange = (e) => {
  //   setSectionShowed(+e.target.value);
  // };

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

  return (
    <div className={stl.content}>
      <div className={stl.wrapper}>
        <h1>Расчёт балок</h1>
        <SelectHandMadeInput
          name="beams"
          id="beams"
          paramsArray={paramsArray}
          value={sectionShowed}
          setValue={setSectionShowed}
        />
        {currentSection()}
        <div className={stl.initialData}>
          {inputFn("Нагрузка", load, kgs, setLoad)}
          {inputFn("Предел прочности материала", matLimit, kgsmm2, setMatLimit)}
          {inputFn("Модуль упругости метериала", elMod, gpa, setElMod)}
        </div>
      </div>
    </div>
  );
};

export default Beams;
