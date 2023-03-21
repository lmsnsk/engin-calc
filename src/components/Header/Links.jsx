import NavItem from "./NavItem";

const Links = (props) => {
  return (
    <>
      <NavItem link="/LashingRing" text="Расчет проушин" effect={props.effect} />
      <NavItem link="/Beams" text="Расчет балок" effect={props.effect} />
      <NavItem link="/BoltGroup" text="Расчёт группы болтов" effect={props.effect} />
      <NavItem link="/2" text="//В работе//" effect={props.effect} />
    </>
  );
};

export default Links;
