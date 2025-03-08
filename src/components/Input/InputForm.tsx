import { ChangeEvent, FC } from "react";
import { Action } from "redux";
import { useAppDispatch } from "../../redux/hooks";

import stl from "./InputForm.module.css";

interface InputFormProps {
  calculateFn: () => Action;
  disableInput: boolean;
  name: string;
  setValue: any;
  value: number;
  unit: any;
  notBlur: boolean;
}

const InputForm: FC<InputFormProps> = ({
  calculateFn,
  disableInput,
  name,
  setValue,
  value,
  unit,
  notBlur,
}) => {
  const dispatch = useAppDispatch();
  const onBlurFn = () => dispatch(calculateFn());
  const setValueContainer = (el: number) => dispatch(setValue(el));

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueContainer(+e.target.value);
  };

  //Отменяет отправку формы при нажатии Enter
  const pressKey = (event: KeyboardEvent) => {
    if (+event.key === 13) event.preventDefault();
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
