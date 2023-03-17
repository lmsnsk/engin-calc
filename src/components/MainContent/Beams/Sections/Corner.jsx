import { useState } from "react";
import InputForm from "../../../Input/InputForm";
import Results from "../../../Results/Results";
import stl from "./../../MainContent.module.css";

const Corner = (props) => {
  let [width, setWidth] = useState("");
  let [heigth, setHeigth] = useState("");
  let [thickWall, setThickWall] = useState("");
  let [thickShelf, setThickShelf] = useState("");
  let [area, setArea] = useState("");
  let [momRes, setMomRes] = useState("");
  let [momIn, setMomIn] = useState("");

  let [mm, mm2, mm3, mm4] = ["мм", "мм2", "мм3", "мм4"];

  let results = [
    { id: 1, name: "Площадь сечения", value: area, unit: mm2 },
    { id: 2, name: "Момент сопотивления сечения", value: momRes, unit: mm3 },
    { id: 3, name: "Момент инерции сечения", value: momIn, unit: mm4 },
  ];

  let widthInner = width - thickWall;

  let calculationSection = () => {
    area = widthInner * thickShelf + heigth * thickWall;
    let y1 = (thickWall * heigth ** 2 + widthInner * thickShelf ** 2) / (2 * area);
    let y2 = heigth - y1;
    momIn = (width * y1 ** 3 - widthInner * (y1 - thickShelf) ** 3 + thickWall * y2 ** 3) / 3;
    momRes = momIn / y2;
    console.log(y1, y2);
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
        {inputFn("Толщина полки", thickShelf, mm, setThickShelf, calculationSection)}
      </div>
      <Results results={results} />
    </>
  );
};

export default Corner;
