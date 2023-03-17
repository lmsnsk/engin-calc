import { useDispatch } from "react-redux";
import stl from "./CalculationButton.module.css";

const CalculationButton = (props) => {
  const dispatch = useDispatch();
  const calculateFnContainer = () => dispatch(props.calculateFn());

  return (
    <button className={stl.calcBtn} onClick={calculateFnContainer}>
      Рассчтитать
    </button>
  );
};

export default CalculationButton;
