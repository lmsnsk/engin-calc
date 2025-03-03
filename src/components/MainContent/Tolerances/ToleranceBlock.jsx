import { useDispatch } from "react-redux";

import SelectMiniInput from "../../Input/SelectMiniInput";

import stl from "./ToleranceBlock.module.css";

const DATA_LENGTH = 25;

const ToleranceBlock = ({
  name,
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

  if (index !== undefined && nominalDimension && index >= 0 && field && kval) {
    dispatch(setMinValue(obj[field][kval].values[index][0]));
    dispatch(setMaxValue(obj[field][kval].values[index][1]));
  }

  const isHoleGap = (val) => {
    if (
      (name === "Охватывающая поверхность" && val >= 0) ||
      (name === "Охватываемая поверхность" && val <= 0)
    ) {
      return true;
    }
    return false;
  };

  const incorrectData = () => {
    if (index !== undefined && nominalDimension && index >= 0 && field && kval) {
      if (obj[field][kval].values.length !== DATA_LENGTH) return true;
    }
    return false;
  };

  const clearKval = () => dispatch(setKval(""));

  return (
    <div className={stl.box}>
      <div className={stl.categoryName}>{name}</div>
      <div className={stl.selectInputs}>
        <SelectMiniInput
          paramsArray={fieldList}
          value={field}
          setValue={setField}
          sideEffect={clearKval}
        />
        {field && (
          <SelectMiniInput
            paramsArray={Object.keys(obj[field])}
            value={kval}
            setValue={setKval}
            sideEffect={() => {}}
          />
        )}
      </div>
      {incorrectData() ? (
        <div className={stl.incorrectDataMsg}>{`Ошибка данных допуска ${field}${kval}!`}</div>
      ) : (
        index >= 0 &&
        field &&
        kval &&
        nominalDimension > 0 && (
          <>
            <h4>
              {field}
              {kval}
            </h4>
            <div className={stl.val}>
              Максимальное значение допуска:
              <p className={isHoleGap(maxValue) ? stl.plusVal : stl.minusVal}>{maxValue}</p>
            </div>
            <div className={stl.val}>
              Минимальное значение допуска:
              <p className={isHoleGap(minValue) ? stl.plusVal : stl.minusVal}>{minValue}</p>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default ToleranceBlock;
