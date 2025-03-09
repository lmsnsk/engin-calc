import { FC } from "react";
import { Action } from "redux";

import stl from "./LashingRing.module.css";

import image from "./../../../assets/images/ear.png";
import Results, { IResults } from "../../Results/Results";
import LashingInputBlock from "./LashingInputBlock";
import { paramsArrayItem } from "./LashingRingContainer";
import CalculationButton from "../../Input/CalculationButton";

interface LashingRingProps {
  results: IResults[];
  paramsArray: paramsArrayItem[];
  calculate: () => Action;
}

const LashingRing: FC<LashingRingProps> = ({ results, paramsArray, calculate }) => {
  return (
    <div className={stl.wrapper}>
      <h1>Расчёт проушин и болтов</h1>
      <div className={stl.imageBox}>
        <img className={stl.image} src={image} alt="Проушина" />
      </div>
      <LashingInputBlock paramsArray={paramsArray} calculateFn={calculate} />
      <CalculationButton calculateFn={calculate} text="Рассчитать" />
      <Results results={results} />
    </div>
  );
};

export default LashingRing;
