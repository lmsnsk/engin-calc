import { useState } from "react";
import stl from "./Header.module.css";
import NavItem from "./NavItem";

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
            <NavItem link="/LashingRing" text="Расчет проушин" />
            <NavItem link="/Beams" text="Расчет балок" />
            <NavItem link="/1" text="Расчет группы болтов" />
            <NavItem link="/2" text="Расчет пружины" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
