import { Action } from "redux";
import { useDispatch } from "react-redux";
import { FC, useEffect, useRef, useState } from "react";

import stl from "./Units.module.css";

import { unitText } from "./unitArrays";
import { scrolling } from "../supportFunctions/scrolling";

interface IUnit {
  text: string;
  factor: string;
}

interface IUnits {
  unitArr: IUnit[];
  changeUnit: (val: IUnit) => Action;
  currentUnit: IUnit;
  calculateFn: () => Action;
}

const Units: FC<IUnits> = ({ unitArr, changeUnit, currentUnit, calculateFn }) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const unitRef = useRef<HTMLDivElement>(null);

  const unitHandler = (unit: IUnit) => {
    dispatch(changeUnit(unit));
    setVisible(false);
    dispatch(calculateFn());
  };

  function onCurrentButtonClick() {
    if (!unitRef.current) return;
    setVisible(!isVisible);
    scrolling(isVisible, unitRef.current);
  }

  useEffect(() => {
    if (!isVisible) return;
    const handleClick = (e: MouseEvent) => {
      if (!unitRef.current) return;
      if (!e.composedPath().includes(unitRef.current)) setVisible(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isVisible, setVisible]);

  return (
    <div className={stl.wrapper} ref={unitRef}>
      <div className={stl.mainUnit} onClick={onCurrentButtonClick}>
        {unitText(currentUnit.text)}
      </div>
      {isVisible ? (
        <div className={stl.dropBox}>
          {unitArr.map((el) => (
            <div className={stl.dropItem} key={el.text} onClick={() => unitHandler(el)}>
              {unitText(el.text)}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Units;
