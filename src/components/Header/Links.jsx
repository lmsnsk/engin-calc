import NavItem from "./NavItem";
import boltImg from "./../../assets/images/bolts.svg";
import beamImg from "./../../assets/images/beam.svg";
import eyeletImg from "./../../assets/images/eyelet.svg";
import springImg from "./../../assets/images/spring-icon.svg";
import tolerancesImg from "./../../assets/images/tolerances.svg";

const Links = ({ effect }) => {
  return (
    <>
      <NavItem link="/LashingRing" text="Расчет проушин" effect={effect} img={eyeletImg} />
      <NavItem link="/Beams" text="Расчет балок" effect={effect} img={beamImg} />
      <NavItem link="/BoltGroup" text="Расчёт группы болтов" effect={effect} img={boltImg} />
      <NavItem link="/Spring" text="Расчёт пружин" effect={effect} img={springImg} />
      <NavItem link="/Tolerances" text="Допуски и посадки" effect={effect} img={tolerancesImg} />
    </>
  );
};

export default Links;
