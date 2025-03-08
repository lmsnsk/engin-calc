import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import stl from "./Header.module.css";

import Links from "./Links";

const DropMenu: FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  function link(e: boolean) {
    setVisible(e);
    setTimeout(() => window.scroll({ top: 0, left: 0, behavior: "smooth" }), 100);
  }

  useEffect(() => {
    if (!isVisible) return;
    const handleClick = (e: MouseEvent) => {
      if (!headerRef.current) return;
      if (!e.target) return;
      if (!e.composedPath().includes(headerRef.current)) setVisible(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isVisible, setVisible]);

  return (
    <div className={isVisible ? stl.change : undefined} ref={headerRef}>
      {location.pathname !== "/" ? (
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
  );
};

export default DropMenu;
