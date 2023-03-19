import NavItem from "./NavItem";

const Links = (props) => {
  return (
    <>
      <NavItem link="/LashingRing" text="Расчет проушин" />
      <NavItem link="/Beams" text="Расчет балок" />
      <NavItem link="/1" text="Расчет группы болтов" />
      <NavItem link="/2" text="Расчет пружины" />
    </>
  );
};

export default Links;
