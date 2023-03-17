import stl from "./Form.module.css";

const SelectInput = (props) => {
  const optionElement = props.paramsArray.map((el) => {
    return (
      <option value={el.value} key={el.name}>
        {el.name}
      </option>
    );
  });
  let defaultSelected;
  props.paramsArray.forEach((el) => {
    if (el.selected) defaultSelected = el.value;
  });

  return (
    <form>
      <select
        className={stl.selectArea}
        defaultValue={defaultSelected}
        onChange={props.onChange}
        onBlur={props.calculateFn}
        name={props.name}
        id={props.id}
      >
        {optionElement}
      </select>
    </form>
  );
};

export default SelectInput;
