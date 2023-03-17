import { useState } from "react";
import CalculationButton from "../../../Input/CalculationButton";
import InputForm from "../../../Input/InputForm";
import Results from "../../../Results/Results";
import stl from "./../../MainContent.module.css";

const CalcTwoSupBeam = (props) => {
  let [length, setLength] = useState("");
  let [aReaction, setAReaction] = useState("");
  let [bReaction, setBReaction] = useState("");
  let [moment, setMoment] = useState("");
  let [loadDistance, setLoadDistance] = useState("");
  let [strain, setStrain] = useState("");
  let [deflection, setDeflection] = useState("");
  let [safeFactor, setSafeFactor] = useState("");
  // let [crticalLoad, setCrticalLoad] = useState("");

  let [mm, kgs, kgsm, kgsmm2] = ["мм", "кгс", "кгс м", "кгс/мм2"];

  const calculate = () => {
    props.calculationSection();
    aReaction = (props.initialParams.load * (length - loadDistance)) / length;
    bReaction = (props.initialParams.load * loadDistance) / length;
    moment = aReaction * (loadDistance / 1000);
    strain = (moment * 1000) / props.sectionParams.momRes;
    deflection =
      (props.initialParams.load * loadDistance * Math.sqrt((length ** 2 - loadDistance ** 2) / 3) ** 3) /
      (3 * (props.initialParams.elMod * 101.9716) * props.sectionParams.momIn * length);
    safeFactor = props.initialParams.matLimit / strain;
    setAReaction(aReaction);
    setBReaction(bReaction);
    setMoment(moment);
    setStrain(strain);
    setDeflection(deflection);
    setSafeFactor(safeFactor);
  };

  let results = [
    { id: 1, name: "Реакция в точке А", value: aReaction, unit: kgs },
    { id: 2, name: "Реакция в точке Б", value: bReaction, unit: kgs },
    { id: 3, name: "Максимальный изгибающий момент", value: moment, unit: kgsm },
    { id: 4, name: "Максимальные напряжения", value: strain, unit: kgsmm2 },
    { id: 5, name: "Максимальный прогиб", value: deflection, unit: mm },
    { id: 6, name: "Запас прочности", value: safeFactor, unit: "", color: true },
  ];

  const inputFn = (name, value, unit, setValue, calculateFn) => {
    return <InputForm name={name} value={value} unit={unit} setValue={setValue} calculateFn={calculateFn} />;
  };

  return (
    <>
      <div className={stl.initialData}>
        {inputFn("Длина балки", length, mm, setLength, calculate)}
        {inputFn("Расстояние до нагрузки", loadDistance, mm, setLoadDistance, calculate)}
      </div>
      <CalculationButton calculateFn={calculate} />
      <Results results={results} />
    </>
  );
};

export default CalcTwoSupBeam;
