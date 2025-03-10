import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { scrolling } from "../supportFunctions/scrolling";

import stl from "./SelectInput.module.css";

const SelectInput = (props) => {
  // const paramsArray = [
  //   { value: 0.2, name: "Подвижное" },
  //   { value: 0.65, name: "Малоподвижное" },
  //   { value: 1, name: "Неподвижное разъемное" },
  //   { value: 1.3, name: "Неподвижное неразъемное" },
  // ]; Пример входного массива параметров

  const [isVisible, setVisible] = useState(false);
  const selectRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isVisible) return;
    const handleClick = (e) => {
      if (!selectRef.current) return;
      if (!selectRef.current.contains(e.target)) setVisible(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isVisible, setVisible]);

  function onCurrentButtonClick() {
    setVisible(!isVisible);
    scrolling(isVisible, selectRef.current);
  }

  const setValueContainer = (el) => dispatch(props.setValue(el));
  const onButtonClick = (el) => {
    setVisible(false);
    setValueContainer(el);
    props.sideEffect();
  };

  let selectField = props.paramsArray.map((element) => (
    <button key={element.name} onClick={() => onButtonClick(element)} className={stl.field}>
      {element.name}
    </button>
  ));

  return (
    <div ref={selectRef}>
      <div>
        <button onClick={onCurrentButtonClick} className={stl.currentField} id="selectInput">
          <span>{props.text}</span>
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

export default SelectInput;
