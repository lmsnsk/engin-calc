import { useState } from "react";
import stl from "./Header.module.css";
import Links from "./Links";

const Header = (props) => {
  const [isVisible, setVisibility] = useState(false);
  return (
    <div className={stl.wrapper}>
      <div className={isVisible ? stl.change : null}>
        <button className={stl.navButton} onClick={() => setVisibility(!isVisible)}>
          <div className={stl.bar1}></div>
          <div className={stl.bar2}></div>
          <div className={stl.bar3}></div>
        </button>
        {isVisible ? (
          <div className={stl.dropContainer}>
            <Links effect={setVisibility} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
