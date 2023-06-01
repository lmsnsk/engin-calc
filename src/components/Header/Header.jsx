import stl from "./Header.module.css";
import DropMenu from "./DropMenu";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className={stl.wrapper}>
      {location.pathname !== "/" && <DropMenu />}
      <div className={stl.title}> Инженерные расчёты</div>
    </div>
  );
};

export default Header;
