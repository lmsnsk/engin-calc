import { NavLink } from "react-router-dom";
import stl from "./StartPage.module.css";
import earImage from "./../../assets/images/ear3D.png";
import boltGroupImage from "./../../assets/images/bolt-group3D.png";
import beamsImage from "./../../assets/images/beams3D.png";
import bgimage from "./../../assets/images/bc1.jpg";

const StartPage = (props) => {
  function onClick() {
    return props.setValue(false);
  }

  function button(link, image, alt, title) {
    return (
      <NavLink to={link} onClick={onClick}>
        <div className={stl.buttonBox}>
          <img src={image} alt={alt} />
          <div className={stl.title}>{title}</div>
        </div>
      </NavLink>
    );
  }

  return (
    <div className={stl.wrapper}>
      <img className={stl.bgImage} src={bgimage} alt="background" />
      {button("/LashingRing", earImage, "eyelet", "Расчет проушин")}
      {button("/Beams", beamsImage, "beams", "Расчет балок")}
      {button("/BoltGroup", boltGroupImage, "bolt group", "Расчет группы болтов")}
    </div>
  );
};

export default StartPage;
