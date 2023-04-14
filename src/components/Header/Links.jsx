import NavItem from "./NavItem";
import boltImg from "./../../assets/images/bolts.svg";
import beamImg from "./../../assets/images/beam.svg";
import eyeletImg from "./../../assets/images/eyelet.svg";
import springImg from "./../../assets/images/spring-icon.svg";

const Links = (props) => {
  return (
    <>
      <NavItem link="/LashingRing" text="Расчет проушин" effect={props.effect} img={eyeletImg} />
      <NavItem link="/Beams" text="Расчет балок" effect={props.effect} img={beamImg} />
      <NavItem link="/BoltGroup" text="Расчёт группы болтов" effect={props.effect} img={boltImg} />
      <NavItem link="/Spring" text="Расчёт пружин" effect={props.effect} img={springImg} />
    </>
  );
};

export default Links;
