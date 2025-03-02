import { useDispatch } from "react-redux";

import SelectMiniInput from "../../Input/SelectMiniInput";

import stl from "./Tolerances.module.css";

const ToleranceBlock = ({
  fieldList,
  field,
  setField,
  obj,
  setKval,
  kval,
  nominalDimension,
  index,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}) => {
  const dispatch = useDispatch();

  if (index !== undefined && nominalDimension >= 0 && field && kval) {
    dispatch(setMinValue(obj[field][kval].values[index][0]));
    dispatch(setMaxValue(obj[field][kval].values[index][1]));
  }

  return (
    <div>
      <div>Охватывающая поверхность</div>
      <SelectMiniInput paramsArray={fieldList} value={field} setValue={setField} />
      {field && (
        <SelectMiniInput paramsArray={Object.keys(obj[field])} value={kval} setValue={setKval} />
      )}
      {index < 0 ? (
        <div>Значение размера вне диапазона</div>
      ) : (
        field &&
        kval &&
        nominalDimension > 0 && (
          <>
            <div>Максимальное значение допуска: {maxValue}</div>
            <div>Минимальное значение допуска: {minValue}</div>
          </>
        )
      )}
    </div>
  );
};

export default ToleranceBlock;
