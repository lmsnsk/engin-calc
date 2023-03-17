import { useDispatch } from "react-redux";
import stl from "./Form.module.css";

const InputForm = (props) => {
  const dispatch = useDispatch();
  const setValueContainer = (el) => dispatch(props.setValue(el));

  const onValueChange = (e) => {
    setValueContainer(e.target.value);
  };

  const pressKey = (event) => {
    if (event.keyCode === 13) event.preventDefault();
  };

  return (
    <>
      <div className={stl.form}>{props.name}</div>
      <form className={stl.form} onKeyDown={pressKey}>
        <input className={stl.input} required type="number" onChange={onValueChange} value={props.value} />
        <p>{props.unit}</p>
      </form>
    </>
  );
};

export default InputForm;
