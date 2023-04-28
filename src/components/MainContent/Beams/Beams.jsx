import { useDispatch, useSelector } from "react-redux";
import { setBeamTypeShowed, setSectionShowed } from "../../../redux/beamsSlice";
import stl from "./Beams.module.css";
import CalculationButton from "../../Input/CalculationButton";
import Section from "./Section";
import Results from "../../Results/Results";
import circleImg from "./../../../assets/images/circle.svg";
import circleTubeImg from "./../../../assets/images/circleTube.svg";
import rectImg from "./../../../assets/images/rect.svg";
import rectTubeImg from "./../../../assets/images/rectTube.svg";
import channelVertImg from "./../../../assets/images/channelVert.svg";
import channelHorizImg from "./../../../assets/images/channelHoriz.svg";
import tBeamImg from "./../../../assets/images/tBeam.svg";
import cornerImg from "./../../../assets/images/corner.svg";
import consoleImg from "./../../../assets/images/console.svg";
import twoBSupImg from "./../../../assets/images/2bsup.svg";
import bucklingImg from "./../../../assets/images/buckling.svg";
import BeamsInputBlock from "./BeamsInputBlock";

const Beams = ({
  titles,
  results,
  paramsSectionsArray,
  paramsBeamTypeArray,
  calculate,
  clearBeamParams,
  currentBeamType,
}) => {
  const { sectionShowed, beamTypeShowed } = useSelector((state) => state.beams);

  const dispatch = useDispatch();

  function onSectionButtonClick(section) {
    if (section !== sectionShowed) {
      dispatch(setSectionShowed(section));
      clearBeamParams();
    }
  }

  function onBeamTypeButtonClick(type) {
    if (type !== beamTypeShowed) {
      clearBeamParams();
      dispatch(setBeamTypeShowed(type));
    }
  }

  function buttonSectionSelect(img, param) {
    return (
      <div
        className={`${stl.buttonSelect} ${sectionShowed === param.value ? stl.buttonSelectActive : null}`}
        onClick={() => onSectionButtonClick(param)}
      >
        <img src={img} alt="" />
      </div>
    );
  }

  function buttonBeamTypeSelect(img, param) {
    return (
      <div
        className={`${stl.buttonSelect} ${stl.buttonBeamTypeSelect} ${
          beamTypeShowed === param.value ? stl.buttonSelectActive : null
        }`}
        onClick={() => onBeamTypeButtonClick(param)}
      >
        <img src={img} alt="" />
      </div>
    );
  }

  return (
    <div className={stl.wrapper}>
      <h1>Расчёт балок</h1>
      <h2>Выберите сечение балки</h2>
      <div className={stl.buttonSelectBox}>
        {buttonSectionSelect(circleImg, paramsSectionsArray[0])}
        {buttonSectionSelect(circleTubeImg, paramsSectionsArray[1])}
        {buttonSectionSelect(rectImg, paramsSectionsArray[2])}
        {buttonSectionSelect(rectTubeImg, paramsSectionsArray[3])}
        {buttonSectionSelect(channelVertImg, paramsSectionsArray[4])}
        {buttonSectionSelect(channelHorizImg, paramsSectionsArray[5])}
        {buttonSectionSelect(tBeamImg, paramsSectionsArray[6])}
        {buttonSectionSelect(cornerImg, paramsSectionsArray[7])}
      </div>
      <Section titles={titles} calculateFn={calculate} />
      <BeamsInputBlock calculate={calculate} />
      <h2>Выберите тип балки</h2>
      <div className={stl.buttonSelectBox}>
        {buttonBeamTypeSelect(twoBSupImg, paramsBeamTypeArray[0])}
        {buttonBeamTypeSelect(consoleImg, paramsBeamTypeArray[1])}
        {buttonBeamTypeSelect(bucklingImg, paramsBeamTypeArray[2])}
      </div>
      {currentBeamType()}
      <CalculationButton calculateFn={calculate} text="Рассчитать" needDispatch={true} />
      <Results results={results} />
    </div>
  );
};

export default Beams;
