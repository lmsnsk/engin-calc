import { useDispatch } from "react-redux";
import stl from "./InputForm.module.css";

const InputForm = (props) => {
  const dispatch = useDispatch();
  const setValueContainer = (el) => dispatch(props.setValue(el));

  const onValueChange = (e) => {
    setValueContainer(e.target.value);
  };

  //Отменяет отправку формы при нажатии Enter
  const pressKey = (event) => {
    if (event.keyCode === 13) event.preventDefault();
  };

  return (
    <>
      <div className={!props.disableInput ? stl.form : stl.formDisable}>{props.name}</div>
      <form className={stl.form} onKeyDown={pressKey}>
        {!props.disableInput ? (
          <input
            className={stl.input}
            required
            type="number"
            onChange={onValueChange}
            value={props.value}
            onBlur={props.calculateFn}
          />
        ) : (
          <input
            className={stl.inputDisable}
            required
            type="number"
            onChange={onValueChange}
            value={props.value}
            disabled
          />
        )}
        <p>{props.unit}</p>
      </form>
    </>
  );
};

export default InputForm;
