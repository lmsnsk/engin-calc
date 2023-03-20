import { useSelector } from "react-redux";
import { setLength, setlengthFactor } from "../../../redux/beamsSlice";
import InputForm from "../../Input/InputForm";
import SelectMiniInput from "../../Input/SelectMiniInput";
import stl from "./../MainContent.module.css";

const Buckling = (props) => {
  const length = useSelector((state) => state.beams.length);
  const lengthFactor = useSelector((state) => state.beams.lengthFactor);

  const paramsArray = [0.33, 0.5, 0.7, 1, 2];

  return (
    <>
      <div className={stl.initialData}>
        <InputForm name="Длина балки" value={length} unit="мм" setValue={setLength} calculateFn={props.calculateFn} />
        <div className={stl.form}>Коэффициент приведения длины</div>
        <SelectMiniInput
          name="lengthFactor"
          id="lengthFactor"
          paramsArray={paramsArray}
          value={lengthFactor}
          setValue={setlengthFactor}
        />
      </div>
    </>
  );
};

export default Buckling;
