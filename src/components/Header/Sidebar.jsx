import stl from "./Header.module.css";
import Links from "./Links";

const Sidebar = (props) => {
  return (
    <div className={stl.sidebar}>
      <Links />
    </div>
  );
};

export default Sidebar;
