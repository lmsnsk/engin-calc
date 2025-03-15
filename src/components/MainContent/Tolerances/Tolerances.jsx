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
    if (nominalDimension.value === "") return undefined;
    if (nominalDimension.value >= 1 && nominalDimension.value <= 3) return 0;

    return tolerancesObj.limits.findIndex(
      (el) => nominalDimension.value > el.minLimit && nominalDimension.value <= el.maxLimit
    );
  };

  const index = findIndex();

  const showResult = () => {
    if (
      holeMaxValue.value !== undefined &&
      shaftMinValue.value !== undefined &&
      shaftMaxValue.value !== undefined &&
      holeMinValue.value !== undefined &&
      index >= 0 &&
      kvalHole.value !== "" &&
      kvalShaft.value !== ""
    ) {
      dispatch(setVal1());
      dispatch(setVal2());

      if (val1.value >= 0 && val2.value > 0) {
        return (
          <div className={stl.result}>
            Зазор от {val1.value} мм до {val2.value} мм
          </div>
        );
      } else if (val1.value < 0 && val2.value < 0) {
        return (
          <div className={stl.result}>
            Натяг от {-val2.value} мм до {-val1.value} мм
          </div>
        );
      }
      return (
        <div className={stl.result}>
          Переходная посадка с зазором {val2.value} мм и натягом {-val1.value} мм
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
          value={nominalDimension.value}
          unit=" мм"
          notBlur={true}
        />
      </div>
      {index < 0 && <p className={stl.wrongRange}>Значение размера вне диапазона</p>}
      <ToleranceBlock
        name={"Охватывающая поверхность"}
        fieldList={fieldHolesList}
        field={fieldHole.value}
        setField={setFieldHole}
        obj={tolerancesObj.holes}
        kval={kvalHole.value}
        setKval={setKvalHole}
        nominalDimension={nominalDimension.value}
        index={index}
        minValue={holeMinValue.value}
        maxValue={holeMaxValue.value}
        setMinValue={setHoleMinValue}
        setMaxValue={setHoleMaxValue}
      />
      <ToleranceBlock
        name={"Охватываемая поверхность"}
        fieldList={fieldShaftsList}
        field={fieldShaft.value}
        setField={setFieldShaft}
        obj={tolerancesObj.shafts}
        kval={kvalShaft.value}
        setKval={setKvalShaft}
        nominalDimension={nominalDimension.value}
        index={index}
        minValue={shaftMinValue.value}
        maxValue={shaftMaxValue.value}
        setMinValue={setShaftMinValue}
        setMaxValue={setShaftMaxValue}
      />
      <div>{showResult()}</div>
    </div>
  );
};

export default Tolerances;
