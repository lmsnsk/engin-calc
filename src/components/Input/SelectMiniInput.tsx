import { Action } from "redux";
import { useAppDispatch } from "../../redux/hooks";
import { FC, useEffect, useRef, useState } from "react";

import stl from "./SelectMiniInput.module.css";

interface ISelectMiniInputProps {
  value: string;
  paramsArray: string[];
  setValue: (el: string) => Action;
  sideEffect: () => void;
}

const SelectMiniInput: FC<ISelectMiniInputProps> = ({
  value,
  paramsArray,
  setValue,
  sideEffect,
}) => {
  // let paramsArray = [1, 5, 7, 8]; Пример входного массива параметров

  const [isVisible, setVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;
    const handleClick = (e: MouseEvent) => {
      if (!selectRef.current) return;
      if (!e.composedPath().includes(selectRef.current)) setVisible(false);
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [isVisible, setVisible]);

  const setValueContainer = (el: string) => dispatch(setValue(el));

  const onButtonClick = (el: string) => {
    setVisible(false);
    if (value === el) return;
    setValueContainer(el);
    sideEffect();
  };

  const onCurrentButtonClick = () => {
    setVisible(!isVisible);
  };

  let selectField = paramsArray.map((element) => (
    <button key={element} onClick={() => onButtonClick(element)} className={stl.field}>
      {element}
    </button>
  ));

  return (
    <div ref={selectRef}>
      <div>
        <button onClick={onCurrentButtonClick} className={stl.currentField}>
          <span>{value}</span>
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
