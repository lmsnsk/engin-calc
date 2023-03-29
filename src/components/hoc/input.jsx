import InputForm from "../Input/InputForm";

export default function input(name, value, unit, setValue, calculateFn, disableInput) {
  return (
    <InputForm
      name={name}
      value={value}
      unit={unit}
      setValue={setValue}
      calculateFn={calculateFn}
      disableInput={disableInput}
    />
  );
}
