import { useSelector } from "react-redux";
import { setLength, setLoadDistance } from "../../../redux/beamsSlice";
import InputForm from "../../Input/InputForm";
import stl from "./../MainContent.module.css";

const CalcTwoSupBeam = (props) => {
  const length = useSelector((state) => state.beams.length);

  const loadDistance = useSelector((state) => state.beams.loadDistance);

  return (
    <>
      <h2>{props.title}</h2>
      <br />
      <div className={stl.initialData}>
        <InputForm name="Длина балки" value={length} unit="мм" setValue={setLength} />
        <InputForm name="Расстояние до нагрузки" value={loadDistance} unit="мм" setValue={setLoadDistance} />
      </div>
    </>
  );
};

export default CalcTwoSupBeam;
