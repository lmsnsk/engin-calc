import { NavLink } from "react-router-dom";
import stl from "./Header.module.css";

const NavItem = (props) => {
  return (
    <NavLink
      to={props.link}
      className={(navData) => (navData.isActive ? stl.active : null)}
      onClick={() => props.effect(false)}
    >
      <div className={stl.dropItem}>
        <div className={stl.iconBox}>
          <img className={stl.icon} src={props.img} alt="" />
        </div>
        {props.text}
      </div>
    </NavLink>
  );
};

export default NavItem;
