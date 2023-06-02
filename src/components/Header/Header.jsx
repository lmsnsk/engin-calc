import { Link, useLocation } from "react-router-dom";
import stl from "./Header.module.css";
import DropMenu from "./DropMenu";

const Header = () => {
  const location = useLocation();
  return (
    <div className={stl.wrapper}>
      {location.pathname !== "/" && <DropMenu />}
      <Link to="/">
        <div className={stl.title}> Инженерные расчёты</div>
      </Link>
    </div>
  );
};

export default Header;
