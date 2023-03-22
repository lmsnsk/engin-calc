import NavItem from "./NavItem";
import boltImg from "./../../assets/images/bolts.svg";
import beamImg from "./../../assets/images/beam.svg";
import eyeletImg from "./../../assets/images/eyelet.svg";
import gearImg from "./../../assets/images/gear.svg";

const Links = (props) => {
  return (
    <>
      <NavItem link="/LashingRing" text="Расчет проушин" effect={props.effect} img={eyeletImg} />
      <NavItem link="/Beams" text="Расчет балок" effect={props.effect} img={beamImg} />
      <NavItem link="/BoltGroup" text="Расчёт группы болтов" effect={props.effect} img={boltImg} />
      <NavItem link="/2" text="//В работе//" effect={props.effect} img={gearImg} />
    </>
  );
};

export default Links;
