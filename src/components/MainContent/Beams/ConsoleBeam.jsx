import { useSelector } from "react-redux";
import { setLength } from "../../../redux/beamsSlice";
import InputForm from "../../Input/InputForm";
import stl from "./../MainContent.module.css";

const ConsoleBeam = (props) => {
  const length = useSelector((state) => state.beams.length);

  return (
    <>
      <h2>{props.title}</h2>
      <br />
      <div className={stl.initialData}>
        <InputForm name="Длина балки" value={length} unit="мм" setValue={setLength} calculateFn={props.calculateFn} />
      </div>
    </>
  );
};

export default ConsoleBeam;
