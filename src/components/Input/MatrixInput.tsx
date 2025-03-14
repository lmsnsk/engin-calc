import { ChangeEvent, FC } from "react";
import { useAppDispatch } from "../../redux/hooks";

import stl from "./MatrixInput.module.css";

interface MatrixInputProps {
  value: number[][];
  titles: string[];
  setValue: Function;
  addRow: Function;
  removeRow: Function;
  units: string[];
}

const MatrixInput: FC<MatrixInputProps> = ({
  value,
  titles,
  setValue,
  addRow,
  removeRow,
  units,
}) => {
  const rowsQuantity = value.length;
  const boltsParams = value.map((el) => [...el]);
  const titlesArray = titles.map((el) => el);
  const dispatch = useAppDispatch();

  const onChange = (index1: number, index2: number) => {
    return function (e: ChangeEvent<HTMLInputElement>) {
      boltsParams[index1][index2] = +e.target.value;
      dispatch(setValue(boltsParams));
    };
  };

  const addRowField = () => dispatch(addRow(value[rowsQuantity - 1]));
  const removeRowField = () => dispatch(removeRow());

  function initMatrixRow(i: number) {
    return titlesArray.map((el, index) => (
      <div key={el}>
        <input
          required
          type="number"
          className={stl.input}
          value={value[i][index]}
          onChange={onChange(i, index)}
        />
        <div className={stl.unit}>{units[index]}</div>
      </div>
    ));
  }

  const matrixData = value.map((_, index) => (
    <div className={stl.titles} key={index}>
      {initMatrixRow(index)}
    </div>
  ));

  const addRemoveButtons = (
    <div className={stl.buttonBox}>
      {rowsQuantity === 1 || (
        <button className={stl.remove} onClick={removeRowField}>
          <div className={stl.bar1}></div>
        </button>
      )}
      <button className={stl.add} onClick={addRowField}>
        <div className={stl.bar1}></div>
        <div className={stl.bar2}></div>
      </button>
    </div>
  );

  return (
    <>
      {addRemoveButtons}
      <div className={stl.titles}>
        <div>{titlesArray[0]}</div>
        <div>{titlesArray[1]}</div>
        <div>{titlesArray[2]}</div>
      </div>
      {matrixData}
      {addRemoveButtons}
    </>
  );
};

export default MatrixInput;
