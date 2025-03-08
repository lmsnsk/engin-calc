import { FC } from "react";
import { Action } from "redux";
import { useAppDispatch } from "../../redux/hooks";

import stl from "./CalculationButton.module.css";

interface CalculationButtonProps {
  text: string;
  calculateFn: () => Action;
  needDispatch: boolean;
}

const CalculationButton: FC<CalculationButtonProps> = ({ text, calculateFn, needDispatch }) => {
  const dispatch = useAppDispatch();

  const calculateFnContainer = () => {
    if (needDispatch) {
      dispatch(calculateFn());
    } else {
      calculateFn();
    }
    setTimeout(scrollToResults, 100);
  };

  const scrollToResults = () => {
    window.scroll({ top: 2000, left: 0, behavior: "smooth" });
  };

  return (
    <button className={stl.calcBtn} onClick={calculateFnContainer}>
      {text}
    </button>
  );
};

export default CalculationButton;
