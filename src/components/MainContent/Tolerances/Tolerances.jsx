import { useSelector } from "react-redux";

import InputForm from "../../Input/InputForm";
import ToleranceBlock from "./ToleranceBlock";

import {
  setFieldShaft,
  setFieldHole,
  setKvalHole,
  setKvalShaft,
  setNominalDimension,
  setHoleMinValue,
  setHoleMaxValue,
  setShaftMinValue,
  setShaftMaxValue,
} from "../../../redux/toleranceSlice";

import { tolerancesObj } from "../../Units/tolerances";

import stl from "./Tolerances.module.css";

const fieldHolesList = Object.keys(tolerancesObj.holes);
const fieldShaftsList = Object.keys(tolerancesObj.shafts);

const Tolerances = () => {
  const {
    kvalHole,
    fieldHole,
    kvalShaft,
    fieldShaft,
    nominalDimension,
    holeMaxValue,
    holeMinValue,
    shaftMaxValue,
    shaftMinValue,
  } = useSelector((state) => state.tolerances);

  const findIndex = () => {
    if (nominalDimension === "") return undefined;
    if (nominalDimension >= 1 && nominalDimension <= 3) return 0;

    return tolerancesObj.limits.findIndex(
      (el) => nominalDimension > el.minLimit && nominalDimension <= el.maxLimit
    );
  };

  let index = findIndex();

  const showResult = () => {
    if (
      holeMaxValue !== undefined &&
      shaftMinValue !== undefined &&
      shaftMaxValue !== undefined &&
      holeMinValue !== undefined
    ) {
      const val1 = +(holeMinValue - shaftMaxValue).toFixed(5);
      const val2 = +(holeMaxValue - shaftMinValue).toFixed(5);

      if (val1 >= 0 && val2 > 0) {
        return (
          <>
            Зазор от {val1} до {val2}
          </>
        );
      } else if (val1 < 0 && val2 < 0) {
        return (
          <>
            Натяг от {-val1} до {-val2}
          </>
        );
      }
      return (
        <>
          Переходная посадка с зазором {val2} и натягом {-val1}
        </>
      );
    }
  };

  return (
    <div className={stl.wrapper}>
      <div className={stl.initialData}>
        <InputForm
          name="Номинальный размер"
          setValue={setNominalDimension}
          value={nominalDimension}
          unit=" мм"
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
        index={index}
        minValue={holeMinValue}
        maxValue={holeMaxValue}
        setMinValue={setHoleMinValue}
        setMaxValue={setHoleMaxValue}
      />
      <ToleranceBlock
        fieldList={fieldShaftsList}
        field={fieldShaft}
        setField={setFieldShaft}
        obj={tolerancesObj.shafts}
        kval={kvalShaft}
        setKval={setKvalShaft}
        nominalDimension={nominalDimension}
        index={index}
        minValue={shaftMinValue}
        maxValue={shaftMaxValue}
        setMinValue={setShaftMinValue}
        setMaxValue={setShaftMaxValue}
      />
      <div>{showResult()}</div>
    </div>
  );
};

export default Tolerances;
