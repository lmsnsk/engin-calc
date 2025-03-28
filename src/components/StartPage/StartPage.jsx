import { NavLink } from "react-router-dom";

import stl from "./StartPage.module.css";

import earImage from "./../../assets/images/ear3D.png";
import boltGroupImage from "./../../assets/images/bolt-group3D.png";
import beamsImage from "./../../assets/images/beams3D.png";
import bgImage from "./../../assets/images/bc1.jpg";
import springImage from "./../../assets/images/spring3D.png";
import tolerancesImage from "./../../assets/images/tolerances.png";

const StartPage = () => {
  function button(link, image, alt, title) {
    return (
      <NavLink to={link}>
        <div className={stl.buttonBox}>
          <img src={image} alt={alt} />
          <div className={stl.title}>{title}</div>
        </div>
      </NavLink>
    );
  }

  return (
    <div className={stl.wrapper}>
      <img className={stl.bgImage} src={bgImage} alt="background" />
      {button("/LashingRing", earImage, "eyelet", "Расчет проушин")}
      {button("/Beams", beamsImage, "beams", "Расчет балок")}
      {button("/BoltGroup", boltGroupImage, "bolt group", "Расчет группы болтов")}
      {button("/Spring", springImage, "spring", "Расчет пружин")}
      {button("/Tolerances", tolerancesImage, "tolerances", "Допуски и посадки")}
    </div>
  );
};

export default StartPage;
