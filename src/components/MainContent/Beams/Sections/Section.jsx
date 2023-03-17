import { useState } from "react";
import InputForm from "../../../Input/InputForm";
import Results from "../../../Results/Results";
import stl from "./../../MainContent.module.css";

const Section = (props) => {
  let [area, setArea] = useState("");
  let [momRes, setMomRes] = useState("");
  let [momIn, setMomIn] = useState("");

  let [mm, mm2, mm3, mm4] = ["мм", "мм2", "мм3", "мм4"];

  let results = [
    { id: 1, name: "Площадь сечения", value: area, unit: mm2 },
    { id: 2, name: "Момент сопотивления сечения", value: momRes, unit: mm3 },
    { id: 3, name: "Момент инерции сечения", value: momIn, unit: mm4 },
  ];

  props.calculateSection(area, momRes, momIn, setArea, setMomRes, setMomIn);

  const inputFn = (name, value, unit, setValue, calculateFn) => {
    return <InputForm name={name} value={value} unit={unit} setValue={setValue} calculateFn={calculateFn} />;
  };

  let inputElement = props.inputArray.map((el) => {
    return inputFn(el[0], el[1], mm, el[2], props.calculateSection);
  });

  return (
    <>
      <h2>{props.title}</h2>
      <div className={stl.initialData}>{inputElement}</div>
      <Results results={results} />
    </>
  );
};

export default Section;
