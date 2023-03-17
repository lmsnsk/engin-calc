import { useState } from "react";
import InputForm from "../../../Input/InputForm";
import Results from "../../../Results/Results";
import stl from "./../../MainContent.module.css";
import CalcTwoSupBeam from "./CalcTwoSupBeam";

const Circle = (props) => {
  let [diam, setDiam] = useState("");
  let [area, setArea] = useState("");
  let [momRes, setMomRes] = useState("");
  let [momIn, setMomIn] = useState("");

  let [mm, mm2, mm3, mm4] = ["мм", "мм2", "мм3", "мм4"];

  let results = [
    { id: 1, name: "Площадь сечения", value: area, unit: mm2 },
    { id: 2, name: "Момент сопотивления сечения", value: momRes, unit: mm3 },
    { id: 3, name: "Момент инерции сечения", value: momIn, unit: mm4 },
  ];

  let calculationSection = () => {
    area = (Math.PI * diam ** 2) / 4;
    momRes = (Math.PI * diam ** 3) / 32;
    momIn = (Math.PI * diam ** 4) / 64;
    setArea(area);
    setMomRes(momRes);
    setMomIn(momIn);
  };

  const inputFn = (name, value, unit, setValue, calculateFn) => {
    return <InputForm name={name} value={value} unit={unit} setValue={setValue} calculateFn={calculateFn} />;
  };

  let sectionParams = { momRes, momIn };

  return (
    <>
      <h2>{props.title}</h2>
      <div className={stl.initialData}>{inputFn("Диаметр", diam, mm, setDiam, calculationSection)}</div>
      <CalcTwoSupBeam
        initialParams={props.initialParams}
        calculationSection={calculationSection}
        sectionParams={sectionParams}
      />
      <Results results={results} />
    </>
  );
};

export default Circle;
