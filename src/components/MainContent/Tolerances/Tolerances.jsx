import { useDispatch, useSelector } from "react-redux";

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
  setVal1,
  setVal2,
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
    val1,
    val2,
  } = useSelector((state) => state.tolerances);

  const dispatch = useDispatch();

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
      holeMinValue !== undefined &&
      index &&
      index >= 0
    ) {
      dispatch(setVal1());
      dispatch(setVal2());

      if (val1 >= 0 && val2 > 0) {
        return (
          <div className={stl.result}>
            Зазор от {val1} до {val2}
          </div>
        );
      } else if (val1 < 0 && val2 < 0) {
        return (
          <div className={stl.result}>
            Натяг от {-val1} до {-val2}
          </div>
        );
      }
      return (
        <div className={stl.result}>
          Переходная посадка с зазором {val2} и натягом {-val1}
        </div>
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
      {index < 0 && <p className={stl.wrongRange}>Значение размера вне диапазона</p>}
      <ToleranceBlock
        name={"Охватывающая поверхность"}
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
        name={"Охватываемая поверхность"}
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
