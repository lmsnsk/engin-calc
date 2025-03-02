import SelectMiniInput from "../../Input/SelectMiniInput";

const ToleranceBlock = ({
  fieldList,
  field,
  setField,
  obj,
  setKval,
  kval,
  nominalDimension,
  findIndex,
}) => {
  let index = findIndex();
  let minValue;
  let maxValue;

  if (index !== undefined && field && kval) {
    minValue = obj[field][kval].values[index][0];
    maxValue = obj[field][kval].values[index][1];
  }

  return (
    <div>
      <div>Охватывающая поверхность</div>
      <SelectMiniInput paramsArray={fieldList} value={field} setValue={setField} />
      {field && (
        <SelectMiniInput paramsArray={Object.keys(obj[field])} value={kval} setValue={setKval} />
      )}
      {index === undefined ? (
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
