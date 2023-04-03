import { useDispatch } from "react-redux";
import stl from "./CalculationButton.module.css";

const CalculationButton = (props) => {
  const dispatch = useDispatch();
  const calculateFnContainer = () => {
    dispatch(props.calculateFn());
    setTimeout(scrollToResults, 100);
  };

  function scrollToResults() {
    let element = document.querySelector("#result");
    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
  }

  return (
    <button className={stl.calcBtn} onClick={calculateFnContainer}>
      {props.text}
    </button>
  );
};

export default CalculationButton;
