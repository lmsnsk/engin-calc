import { useSelector } from "react-redux";
import { setLength, setLengthUnit } from "../../../redux/beamsSlice";
import { meterUnitArray } from "../../Units/unitArrays";
import InputForm from "../../Input/InputForm";
import Units from "../../Units/Units";
import stl from "./../MainContent.module.css";

const ConsoleBeam = ({ calculateFn, title }) => {
  const length = useSelector((state) => state.beams.length);

  return (
    <>
      <h2>{title}</h2>
      <br />
      <div className={stl.initialData}>
        <InputForm
          name="Длина балки"
          value={length.value}
          unit={
            <Units
              unitArr={meterUnitArray}
              changeUnit={setLengthUnit}
              currentUnit={length.unit}
              calculateFn={calculateFn}
            />
          }
          setValue={setLength}
          calculateFn={calculateFn}
        />
      </div>
    </>
  );
};

export default ConsoleBeam;
