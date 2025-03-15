import { useDispatch } from "react-redux";

import stl from "./ToleranceBlock.module.css";

import SelectMiniInput from "../../Input/SelectMiniInput";

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

  return (
    <div className={stl.box}>
      <div className={stl.categoryName}>{name}</div>
      <div className={stl.selectInputs}>
        <SelectMiniInput
          paramsArray={fieldList}
          value={field}
          setValue={setField}
          sideEffect={() => dispatch(setKval(""))}
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
            <div className={stl.tolRes}>
              <span>{field}</span>
              <span>{kval}</span>
              <span className={stl.recomended}>
                {obj[field][kval].rec ? "Рекомендуемый" : null}
              </span>
            </div>
            <div className={stl.val}>
              Максимальное значение допуска:
              <p className={isHoleGap(maxValue) ? stl.plusVal : stl.minusVal}>
                {isNaN(maxValue) ? "-" : maxValue}
              </p>
              мм
            </div>
            <div className={stl.val}>
              Минимальное значение допуска:
              <p className={isHoleGap(minValue) ? stl.plusVal : stl.minusVal}>
                {isNaN(minValue) ? "-" : minValue}
              </p>
              мм
            </div>
          </>
        )
      )}
    </div>
  );
};

export default ToleranceBlock;
