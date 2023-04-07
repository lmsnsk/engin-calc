import stl from "./CalculationButton.module.css";

const CalculationButton = ({ text, calculateFn }) => {
  const calculateFnContainer = () => {
    calculateFn();
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
