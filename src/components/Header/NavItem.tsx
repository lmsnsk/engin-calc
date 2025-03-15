import { FC } from "react";
import { NavLink } from "react-router-dom";

import stl from "./Header.module.css";

interface NavItemProps {
  link: string;
  text: string;
  effect: (e: boolean) => void;
  img: string;
}

const NavItem: FC<NavItemProps> = ({ link, text, effect, img }) => {
  return (
    <NavLink
      to={link}
      className={(navData) => (navData.isActive ? stl.active : undefined)}
      onClick={() => effect(false)} //!
    >
      <div className={stl.dropItem}>
        <div className={stl.iconBox}>
          <img className={stl.icon} src={img} alt="" />
        </div>
        {text}
      </div>
    </NavLink>
  );
};

export default NavItem;
