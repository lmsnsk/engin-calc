import { FC } from "react";

import stl from "./Header.module.css";

import Links from "./Links";

const Sidebar: FC = () => {
  const scrollUp = () => {
    setTimeout(() => window.scroll({ top: 0, left: 0, behavior: "smooth" }), 100);
  };

  return (
    <div className={stl.sidebar}>
      <Links effect={scrollUp} />
    </div>
  );
};

export default Sidebar;
