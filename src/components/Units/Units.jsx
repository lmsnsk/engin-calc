import stl from "./Units.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const Units = ({ unitArr, changeUnit, currentUnit, calculateFn }) => {
  const [isVisible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const unitRef = useRef(null);

  const unitHandler = (unit) => {
    dispatch(changeUnit(unit));
    setVisible(false);
    dispatch(calculateFn());
  };

  const unitText = (text) => {
    switch (text) {
      case "кгс/мм2":
        return (
          <>
            кг/мм<sup>2</sup>
          </>
        );
      default:
        return text;
    }
  };

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
      <div className={stl.mainUnit} onClick={() => setVisible(!isVisible)}>
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
      ) : (
        <div className={`${stl.dropBox} ${stl.dropBoxHidden}`}></div>
      )}
    </div>
  );
};

export default Units;
