import { FC, useEffect, useRef, useState } from "react";
import { Action } from "redux";
import { useAppDispatch } from "../../redux/hooks";

import stl from "./SelectInput.module.css";

import { scrolling } from "../supportFunctions/scrolling";

export interface IParams {
  value: number;
  name: string;
}

interface ISelectInputProps {
  text: string;
  paramsArray: IParams[];
  setValue: (el: IParams) => Action;
  sideEffect: () => void;
}

const SelectInput: FC<ISelectInputProps> = ({ text, paramsArray, setValue, sideEffect }) => {
  // const paramsArray = [
  //   { value: 0.2, name: "Подвижное" },
  //   { value: 0.65, name: "Малоподвижное" },
  //   { value: 1, name: "Неподвижное разъемное" },
  //   { value: 1.3, name: "Неподвижное неразъемное" },
  // ]; Пример входного массива параметров

  const [isVisible, setVisible] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isVisible) return;
    const handleClick = (e: MouseEvent) => {
      if (!selectRef.current) return;
      if (!e.composedPath().includes(selectRef.current)) setVisible(false);
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [isVisible, setVisible]);

  function onCurrentButtonClick() {
    if (!selectRef.current) return;
    setVisible(!isVisible);
    scrolling(isVisible, selectRef.current);
  }

  const setValueContainer = (el: IParams) => dispatch(setValue(el));

  const onButtonClick = (el: IParams) => {
    setVisible(false);
    setValueContainer(el);
    sideEffect();
  };

  const selectField = paramsArray.map((element) => (
    <button key={element.name} onClick={() => onButtonClick(element)} className={stl.field}>
      {element.name}
    </button>
  ));

  return (
    <div ref={selectRef}>
      <div>
        <button onClick={onCurrentButtonClick} className={stl.currentField} id="selectInput">
          <span>{text}</span>
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
