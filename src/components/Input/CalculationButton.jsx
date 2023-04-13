import { useDispatch } from "react-redux";
import stl from "./CalculationButton.module.css";

const CalculationButton = ({ text, calculateFn, needDispatch }) => {
  const dispatch = useDispatch();
  const calculateFnContainer = () => {
    if (needDispatch) {
      dispatch(calculateFn());
    } else {
      calculateFn();
    }
    setTimeout(scrollToResults, 100);
  };

  function scrollToResults() {
    window.scroll({ top: 2000, left: 0, behavior: "smooth" });
  }

  return (
    <button className={stl.calcBtn} onClick={calculateFnContainer}>
      {text}
    </button>
  );
};

export default CalculationButton;
