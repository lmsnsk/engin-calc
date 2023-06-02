import { useState } from "react";
import { useDispatch } from "react-redux";
import stl from "./SelectMiniInput.module.css";

const SelectMiniInput = (props) => {
  // let paramsArray = [1, 5, 7, 8]; Пример входного массива параметров

  let [isVisible, setVisibility] = useState(false);

  const onCurrentButtonClick = () => {
    setVisibility(!isVisible);
  };

  const dispatch = useDispatch();
  const setValueContainer = (el) => dispatch(props.setValue(el));
  const onButtonClick = (el) => {
    setVisibility(false);
    setValueContainer(el);
  };

  let selectField = props.paramsArray.map((element) => (
    <button key={element} onClick={() => onButtonClick(element)} className={stl.field}>
      {element}
    </button>
  ));

  return (
    <div>
      <div>
        <button onClick={onCurrentButtonClick} className={stl.currentField}>
          <span>{props.value}</span>
          <span className={stl.bar}>
            <span className={isVisible ? stl.changeBar1 : stl.bar1}></span>
            <span className={isVisible ? stl.changeBar2 : stl.bar2}></span>
          </span>
        </button>
      </div>
      {isVisible && <div className={stl.dropBox}>{selectField}</div>}
    </div>
  );
};

export default SelectMiniInput;
