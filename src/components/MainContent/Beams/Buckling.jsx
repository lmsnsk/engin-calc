import { useDispatch, useSelector } from "react-redux";
import { setLength, setlengthFactor } from "../../../redux/beamsSlice";
import InputForm from "../../Input/InputForm";
import stl from "./../MainContent.module.css";
import buckling1Img from "./../../../assets/images/buckling1.svg";
import buckling2Img from "./../../../assets/images/buckling2.svg";
import buckling3Img from "./../../../assets/images/buckling3.svg";
import buckling4Img from "./../../../assets/images/buckling4.svg";
import buckling5Img from "./../../../assets/images/buckling5.svg";
import buckling6Img from "./../../../assets/images/buckling6.svg";
import buckling7Img from "./../../../assets/images/buckling7.svg";
import buckling8Img from "./../../../assets/images/buckling8.svg";

const Buckling = (props) => {
  const length = useSelector((state) => state.beams.length);
  const lengthFactor = useSelector((state) => state.beams.lengthFactor);

  const paramsArray = [1, 2, 2.000001, 0.5000001, 0.33, 1.00001, 0.5, 0.7];

  const dispatch = useDispatch();

  function onLengthFactorButtonClick(type) {
    props.clearBeamParams();
    return dispatch(setlengthFactor(type));
  }

  function lengthFactorSelect(img, param) {
    return (
      <div
        className={`${stl.buttonSelect} ${stl.buttonLengthFactorSelect} ${
          lengthFactor === param ? stl.buttonSelectActive : null
        }`}
        onClick={() => onLengthFactorButtonClick(param)}
      >
        <img src={img} alt="" />
      </div>
    );
  }

  return (
    <>
      <h2>{props.title}</h2>
      <br />
      <div className={stl.initialData}>
        <InputForm name="Длина балки" value={length} unit="мм" setValue={setLength} />
      </div>
      <h2>Тип закрепления балки</h2>
      <div className={stl.buttonSelectBox}>
        {lengthFactorSelect(buckling1Img, paramsArray[0])}
        {lengthFactorSelect(buckling2Img, paramsArray[1])}
        {lengthFactorSelect(buckling3Img, paramsArray[2])}
        {lengthFactorSelect(buckling4Img, paramsArray[3])}
        {lengthFactorSelect(buckling5Img, paramsArray[4])}
        {lengthFactorSelect(buckling6Img, paramsArray[5])}
        {lengthFactorSelect(buckling7Img, paramsArray[6])}
        {lengthFactorSelect(buckling8Img, paramsArray[7])}
      </div>
    </>
  );
};

export default Buckling;
