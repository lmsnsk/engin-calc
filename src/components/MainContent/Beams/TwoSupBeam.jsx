import { useSelector } from "react-redux";
import { setLength, setLengthUnit, setLoadDistance, setLoadDistanceUnit } from "../../../redux/beamsSlice";
import InputForm from "../../Input/InputForm";
import stl from "./../MainContent.module.css";
import Units from "../../Units/Units";
import { meterUnitArray } from "../../Units/unitArrays";

const CalcTwoSupBeam = ({ title, calculateFn }) => {
  const length = useSelector((state) => state.beams.length);

  const loadDistance = useSelector((state) => state.beams.loadDistance);

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
        <InputForm
          name="Расстояние до нагрузки"
          value={loadDistance.value}
          unit={
            <Units
              unitArr={meterUnitArray}
              changeUnit={setLoadDistanceUnit}
              currentUnit={loadDistance.unit}
              calculateFn={calculateFn}
            />
          }
          setValue={setLoadDistance}
          calculateFn={calculateFn}
        />
      </div>
    </>
  );
};

export default CalcTwoSupBeam;
