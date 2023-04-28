import stl from "./Header.module.css";
import DropMenu from "./DropMenu";

const Header = (props) => {
  return (
    <div className={stl.wrapper}>
      <DropMenu props={props} />
      <div className={stl.title}> Инженерные расчёты</div>
    </div>
  );
};

export default Header;
