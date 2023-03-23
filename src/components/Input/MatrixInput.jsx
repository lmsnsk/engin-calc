import { useDispatch } from "react-redux";
import stl from "./MatrixInput.module.css";

const MatrixInput = (props) => {
  let rowsQuantity = props.value.length;
  let boltsParams = props.value.map((el) => [...el]);
  const titles = props.titles.map((el) => <p key={el}>{el}</p>);
  const dispatch = useDispatch();

  function onChange(index1, index2) {
    return function (e) {
      boltsParams[index1][index2] = +e.target.value;
      dispatch(props.setValue(boltsParams));
    };
  }

  const addRowField = () => dispatch(props.addRow(props.value[rowsQuantity - 1]));
  const removeRowField = () => dispatch(props.removeRow());

  function initMatrixRow(i) {
    return props.titles.map((el, index) => (
      <div key={el}>
        <input
          required
          type="number"
          className={stl.input}
          value={props.value[i][index]}
          onChange={onChange(i, index)}
          onBlur={() => {}}
        />
        <p className={stl.unit}>{props.units[index]}</p>
      </div>
    ));
  }

  const matrixData = props.value.map((el, index) => (
    <div className={stl.titles} key={index}>
      {initMatrixRow(index)}
    </div>
  ));

  const addRemoveButtons = (
    <div className={stl.buttonBox}>
      {rowsQuantity > 1 ? (
        <button className={stl.remove} onClick={removeRowField}>
          <div className={stl.bar1}></div>
        </button>
      ) : null}
      <button className={stl.add} onClick={addRowField}>
        <div className={stl.bar1}></div>
        <div className={stl.bar2}></div>
      </button>
    </div>
  );

  return (
    <>
      {addRemoveButtons}
      <div className={stl.titles}>{titles}</div>
      {matrixData}
      {addRemoveButtons}
    </>
  );
};

export default MatrixInput;
