import stl from "./Spring.module.css";
import { useDispatch, useSelector } from "react-redux";
import { calculateF3 } from "../../../redux/springSlice";
import CalculationButton from "../../Input/CalculationButton";
import Results from "../../Results/Results";
import springCompressionImg from "./../../../assets/images/spring-compression.svg";
import springStretchingImg from "./../../../assets/images/spring-stretching.svg";
import SpringInputBlock1 from "./SpringInputBlock1";
import SpringInputBlock2 from "./SpringInputBlock2";

const Spring = ({ results1, results2, calculate, buttonSpringTypeSelect, typeText, paramsSpringTypeArray }) => {
  const { springType, F1, F2, F3, h, ro, D, d, c1 } = useSelector((state) => state.spring);

  const dispatch = useDispatch();

  return (
    <div className={stl.wrapper}>
      <h1>Расчёт пружин</h1>
      <h2>Выберите тип пружины</h2>
      <div className={stl.buttonSelectBox}>
        {buttonSpringTypeSelect(springCompressionImg, paramsSpringTypeArray[0])}
        {buttonSpringTypeSelect(springStretchingImg, paramsSpringTypeArray[1])}
      </div>
      {springType ? (
        <>
          <div className={stl.spring}>
            <h3>{typeText()}</h3>
          </div>
          <SpringInputBlock1 />
          <button className={stl.getF3} onClick={() => dispatch(calculateF3())}>
            Получить силу пружины при максимальной деформации
          </button>
          {F3.value && F3.value > 0 && F2.value > 0 && F1.value > 0 ? <Results results={results1} /> : null}
          {F3.value && F3.value > 0 ? (
            <>
              <h3>Берется из таблиц ГОСТ 13766...76-86 по силе при максимальной деформации</h3>
              <br />
              <SpringInputBlock2 />
              <CalculationButton calculateFn={calculate} text="Рассчитать" />
              {D.value > 0 && d.value > 0 && c1.value > 0 && h.value > 0 && ro.value > 0 ? (
                <>
                  <Results results={results2} />
                </>
              ) : null}
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default Spring;
