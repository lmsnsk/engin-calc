import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import stl from "./SelectMiniInput.module.css";

const SelectMiniInput = (props) => {
  // let paramsArray = [1, 5, 7, 8]; Пример входного массива параметров

  const [isVisible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const selectRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;
    const handleClick = (e) => {
      if (!selectRef.current) return;
      if (!selectRef.current.contains(e.target)) setVisible(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isVisible, setVisible]);

  const setValueContainer = (el) => dispatch(props.setValue(el));

  const onButtonClick = (el) => {
    setVisible(false);
    if (props.value === el) return;
    setValueContainer(el);
    props.sideEffect();
  };

  const onCurrentButtonClick = () => {
    setVisible(!isVisible);
  };

  let selectField = props.paramsArray.map((element) => (
    <button key={element} onClick={() => onButtonClick(element)} className={stl.field}>
      {element}
    </button>
  ));

  return (
    <div ref={selectRef}>
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
