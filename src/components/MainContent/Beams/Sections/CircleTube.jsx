import { useState } from "react";
import InputForm from "../../../Input/InputForm";
import Results from "../../../Results/Results";
import stl from "./../../MainContent.module.css";

const CircleTube = (props) => {
  let [diam, setDiam] = useState("");
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

  let innerDiam = diam - 2 * thickWall;

  let calculationSection = () => {
    area = (Math.PI * (diam ** 2 - innerDiam ** 2)) / 4;
    momRes = (Math.PI * (diam ** 4 - innerDiam ** 4)) / (32 * diam);
    momIn = (Math.PI * (diam ** 4 - innerDiam ** 4)) / 64;
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
        {inputFn("Диаметр", diam, mm, setDiam, calculationSection)}
        {inputFn("Толщина стенки", thickWall, mm, setThickWall, calculationSection)}
      </div>
      <Results results={results} />
    </>
  );
};

export default CircleTube;
