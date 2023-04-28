import stl from "./BoltGroup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { calculateBoltGroup } from "../../../redux/boltGroupSlice";
import CalculationButton from "../../Input/CalculationButton";
import boltsImg from "./../../../assets/images/bolt-group.png";
import Results from "../../Results/Results";
import BoltGroupInputBlock from "./BoltGroupInputBlock";

const BoltGroup = () => {
  const { sliseMargin, collapseMargin } = useSelector((state) => state.boltGroup);

  const dispatch = useDispatch();

  function calculate() {
    dispatch(calculateBoltGroup());
  }

  const resultsSlice = sliseMargin.map((el, index) => ({
    id: index,
    name: `Болт ${index + 1}`,
    value: el,
    unit: "",
    color: true,
  }));
  const resultsCollapse = collapseMargin.map((el, index) => ({
    id: index,
    name: `Болт ${index + 1}`,
    value: el,
    unit: "",
    color: true,
  }));

  return (
    <div className={stl.wrapper}>
      <h1>Расчет группы болтов</h1>
      <div className={stl.imageBox}>
        <img className={stl.imageBolt} src={boltsImg} alt="bolts" />
      </div>
      <BoltGroupInputBlock />
      <CalculationButton calculateFn={calculate} text="Рассчитать" />
      <div className={stl.matrixResult}>
        <div>
          {resultsSlice[0]?.value ? <h2>Запас по срезу</h2> : null}
          <Results results={resultsSlice} />
        </div>
        <div>
          {resultsCollapse[0]?.value ? <h2>Запас по смятию</h2> : null}
          <Results results={resultsCollapse} />
        </div>
      </div>
    </div>
  );
};

export default BoltGroup;
