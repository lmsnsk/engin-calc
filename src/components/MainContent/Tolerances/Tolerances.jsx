import { useSelector } from "react-redux";

import InputForm from "../../Input/InputForm";
import ToleranceBlock from "./ToleranceBlock";

import {
  setFieldShaft,
  setFieldHole,
  setKvalHole,
  setKvalShaft,
  setNominalDimension,
} from "../../../redux/toleranceSlice";

import { tolerancesObj } from "../../Units/tolerances";

const fieldHolesList = Object.keys(tolerancesObj.holes);
const fieldShaftsList = Object.keys(tolerancesObj.shafts);

const Tolerances = () => {
  const { kvalHole, fieldHole, kvalShaft, fieldShaft, nominalDimension } = useSelector(
    (state) => state.tolerances
  );

  const findIndex = () => {
    let index;
    tolerancesObj.limits.forEach((el) => {
      if (nominalDimension >= 1 && nominalDimension <= 3) {
        index = 0;
      } else if (nominalDimension > el.minLimit && nominalDimension <= el.maxLimit) {
        index = tolerancesObj.limits.indexOf(el);
      }
    });
    return index;
  };

  return (
    <div>
      <div>
        <InputForm
          name="Номинальный размер"
          setValue={setNominalDimension}
          value={nominalDimension}
          unit="мм"
          calculateFn={() => {}} ////////////////////!
          notBlur={true}
        />
      </div>
      <ToleranceBlock
        fieldList={fieldHolesList}
        field={fieldHole}
        setField={setFieldHole}
        obj={tolerancesObj.holes}
        kval={kvalHole}
        setKval={setKvalHole}
        nominalDimension={nominalDimension}
        findIndex={findIndex}
      />
      <ToleranceBlock
        fieldList={fieldShaftsList}
        field={fieldShaft}
        setField={setFieldShaft}
        obj={tolerancesObj.shafts}
        kval={kvalShaft}
        setKval={setKvalShaft}
        nominalDimension={nominalDimension}
        findIndex={findIndex}
      />
    </div>
  );
};

export default Tolerances;
