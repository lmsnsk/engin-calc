import { useState } from "react";
import InputForm from "../../../Input/InputForm";
import Results from "../../../Results/Results";
import stl from "./../../MainContent.module.css";

const RectangleTube = (props) => {
  let [width, setWidth] = useState("");
  let [heigth, setHeigth] = useState("");
  let [thickWall, setThickWall] = useState("");
  let [area, setArea] = useState("");
  let [momRes, setMomRes] = useState("");
  let [momIn, setMomIn] = useState("");

  let [mm, mm2, mm3, mm4] = ["мм", "мм2", "мм3", "мм4"];

  let results = [
    { id: 1, name: "Площадь сечения", value: area, unit: mm2 },
    { id: 2, name: "Момент сопотивления сечения", value: momRes, unit: mm3 },
    { id: 3, name: "Момент инерции сечения", value: momIn, unit: mm4 },
  ];

  let widthInner = width - 2 * thickWall;
  let heigthInner = heigth - 2 * thickWall;

  let calculationSection = () => {
    area = width * heigth - widthInner * heigthInner;
    momRes = (width * heigth ** 3 - widthInner * heigthInner ** 3) / (6 * heigth);
    momIn = (width * heigth ** 3 - widthInner * heigthInner ** 3) / 12;
    setArea(area);
    setMomRes(momRes);
    setMomIn(momIn);
  };

  const inputFn = (name, value, unit, setValue, calculateFn) => {
    return <InputForm name={name} value={value} unit={unit} setValue={setValue} calculateFn={calculateFn} />;
  };

  return (
    <>
      <h2>{props.title}</h2>
      <div className={stl.initialData}>
        {inputFn("Ширина", width, mm, setWidth, calculationSection)}
        {inputFn("Высота", heigth, mm, setHeigth, calculationSection)}
        {inputFn("Толщина стенки", thickWall, mm, setThickWall, calculationSection)}
      </div>
      <Results results={results} />
    </>
  );
};

export default RectangleTube;
