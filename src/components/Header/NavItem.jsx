import { NavLink } from "react-router-dom";
import stl from "./Header.module.css";

const NavItem = (props) => {
  return (
    <div className={stl.dropItem}>
      <NavLink
        to={props.link}
        className={(navData) => (navData.isActive ? stl.active : null)}
        onClick={() => props.effect(false)}
      >
        {props.text}
      </NavLink>
    </div>
  );
};

export default NavItem;
