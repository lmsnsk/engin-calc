import stl from "./LashingRing.module.css";
import image from "./../../../assets/images/ear.png";
import Results from "../../Results/Results";
import CalculationButton from "../../Input/CalculationButton";
import LashingInputBlock from "./LashingInputBlock";

const LashingRing = ({ results, paramsArray, calculate, inputArrayParams }) => {
  return (
    <div className={stl.wrapper}>
      <h1>Расчёт проушин и болтов</h1>
      <div className={stl.imageBox}>
        <img className={stl.image} src={image} alt="Проушина" />
      </div>
      <LashingInputBlock paramsArray={paramsArray} calculateFn={calculate} inputArrayParams={inputArrayParams} />
      <CalculationButton calculateFn={calculate} text="Рассчитать" />
      <Results results={results} />
    </div>
  );
};

export default LashingRing;
