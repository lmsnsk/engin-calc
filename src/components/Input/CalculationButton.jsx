import { useDispatch } from "react-redux";
import stl from "./CalculationButton.module.css";

const CalculationButton = (props) => {
  const dispatch = useDispatch();
  const calculateFnContainer = () => {
    dispatch(props.calculateFn());
    setTimeout(scrollToResults, 100);
  };

  function scrollToResults() {
    window.scroll({ top: 2000, left: 0, behavior: "smooth" });
  }

  return (
    <button className={stl.calcBtn} onClick={calculateFnContainer}>
      {props.text}
    </button>
  );
};

export default CalculationButton;
