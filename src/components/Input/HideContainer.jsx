import { useState } from "react";
import stl from "./HideContainer.module.css";

const HideContainer = (props) => {
  const [isVisible, setVisibility] = useState(false);
  const changeVisibility = () => {
    setVisibility(!isVisible);
  };

  return (
    <div className={stl.wrapper}>
      <div className={stl.hider} onClick={changeVisibility}>
        <span className={stl.bar}>
          <span className={isVisible ? stl.changeBar1 : stl.bar1}></span>
          <span className={isVisible ? stl.changeBar2 : stl.bar2}></span>
          {props.title}
        </span>
      </div>
      <div className={!isVisible ? stl.hideBox : null}>{props.data}</div>
    </div>
  );
};

export default HideContainer;
