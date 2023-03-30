import { useState } from "react";
import stl from "./Header.module.css";
import Links from "./Links";

const Header = (props) => {
  const [isVisible, setVisibility] = useState(false);
  function link(e) {
    setVisibility(e);
    setTimeout(() => window.scroll({ top: 0, left: 0, behavior: "smooth" }), 100);
  }
  return (
    <div className={stl.wrapper}>
      <div className={isVisible ? stl.change : null}>
        {!props.startPegeVisible ? (
          <button className={stl.navButton} onClick={() => setVisibility(!isVisible)}>
            <div className={stl.bar1}></div>
            <div className={stl.bar2}></div>
            <div className={stl.bar3}></div>
          </button>
        ) : null}
        {isVisible ? (
          <div className={stl.dropContainer}>
            <Links effect={link} />
          </div>
        ) : null}
      </div>
      <div className={stl.title}> Инженерные расчёты</div>
    </div>
  );
};

export default Header;
