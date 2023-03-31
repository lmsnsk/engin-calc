import InputForm from "../Input/InputForm";

export default function input(name, value, unit, setValue, disableInput) {
  return <InputForm name={name} value={value} unit={unit} setValue={setValue} disableInput={disableInput} />;
}
