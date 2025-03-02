import { useDispatch } from "react-redux";
import stl from "./InputForm.module.css";

const InputForm = ({ calculateFn, disableInput, name, setValue, value, unit, notBlur }) => {
  const dispatch = useDispatch();
  const onBlurFn = () => dispatch(calculateFn());
  const setValueContainer = (el) => dispatch(setValue(el));

  const onValueChange = (e) => {
    setValueContainer(e.target.value);
  };

  //Отменяет отправку формы при нажатии Enter
  const pressKey = (event) => {
    if (event.keyCode === 13) event.preventDefault();
  };

  return (
    <>
      <div className={!disableInput ? stl.form : stl.formDisable}>{name}</div>
      <form className={stl.form} onKeyDown={pressKey}>
        {!disableInput ? (
          <input
            className={stl.input}
            required
            type="number"
            onChange={onValueChange}
            value={value}
            onBlur={notBlur ? () => {} : onBlurFn}
          />
        ) : (
          <input
            className={stl.inputDisable}
            required
            type="number"
            onChange={onValueChange}
            value={value}
            disabled
          />
        )}
        {unit}
      </form>
    </>
  );
};

export default InputForm;
