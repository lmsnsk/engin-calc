import stl from "./Units.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { unitText } from "./unitArrays";

const Units = ({ unitArr, changeUnit, currentUnit, calculateFn }) => {
  const [isVisible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const unitRef = useRef(null);
  const unitScrollRef = useRef(null);

  const unitHandler = (unit) => {
    dispatch(changeUnit(unit));
    setVisible(false);
    dispatch(calculateFn());
  };

  function onCurrentButtonClick() {
    setVisible(!isVisible);
    scrolling();
  }

  function getCoordinate() {
    let coordinates = unitScrollRef.current.getBoundingClientRect();
    return coordinates.top;
  }

  function scrolling() {
    if (getCoordinate() + 150 > document.documentElement.clientHeight && isVisible === false) {
      setTimeout(() => window.scrollBy({ top: 150, left: 0, behavior: "smooth" }), 100);
    }
  }

  useEffect(() => {
    if (!isVisible) return;
    const handleClick = (e) => {
      if (!unitRef.current) return;
      if (!unitRef.current.contains(e.target)) setVisible(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isVisible, setVisible]);

  return (
    <div className={stl.wrapper} ref={unitRef}>
      <div className={stl.mainUnit} onClick={onCurrentButtonClick} ref={unitScrollRef}>
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
