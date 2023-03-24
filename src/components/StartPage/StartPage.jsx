import { NavLink } from "react-router-dom";
import stl from "./StartPage.module.css";

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
      {button("/LashingRing", "", "", "Расчет проушин")}
      {button("/Beams", "", "", "Расчет балок")}
      {button("/BoltGroup", "", "", "Расчет группы болтов")}
    </div>
  );
};

export default StartPage;
