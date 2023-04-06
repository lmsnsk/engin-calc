import { useEffect, useRef, useState } from "react";
import stl from "./Header.module.css";
import Links from "./Links";

const Header = (props) => {
  const [isVisible, setVisible] = useState(false);
  const headerRef = useRef(null);

  function link(e) {
    setVisible(e);
    setTimeout(() => window.scroll({ top: 0, left: 0, behavior: "smooth" }), 100);
  }

  useEffect(() => {
    if (!isVisible) return;
    const handleClick = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) setVisible(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isVisible, setVisible]);

  return (
    <div className={stl.wrapper}>
      <div className={isVisible ? stl.change : null} ref={headerRef}>
        {!props.startPegeVisible ? (
          <button className={stl.navButton} onClick={() => setVisible(!isVisible)}>
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
