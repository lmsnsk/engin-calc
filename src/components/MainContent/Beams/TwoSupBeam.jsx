import { useSelector } from "react-redux";
import { setLength, setLoadDistance } from "../../../redux/beamsSlice";
import InputForm from "../../Input/InputForm";
import stl from "./../MainContent.module.css";

const CalcTwoSupBeam = (props) => {
  const length = useSelector((state) => state.beams.length);

  const loadDistance = useSelector((state) => state.beams.loadDistance);

  return (
    <>
      <div className={stl.initialData}>
        <InputForm name="Длина балки" value={length} unit="мм" setValue={setLength} calculateFn={props.calculateFn} />
        <InputForm
          name="Расстояние до нагрузки"
          value={loadDistance}
          unit="мм"
          setValue={setLoadDistance}
          calculateFn={props.calculateFn}
        />
      </div>
    </>
  );
};

export default CalcTwoSupBeam;
