import { useDispatch } from "react-redux";
import stl from "./CheckBox.module.css";

const CheckBox = (props) => {
  const dispatch = useDispatch();
  const toogler = () => {
    dispatch(props.setCheck(!props.check));
    props.sideEffect();
  };

  return (
    <>
      <div onClick={toogler} className={stl.checkbox}>
        <div className={props.check ? stl.tooglerChanged : stl.toogler}></div>
      </div>
    </>
  );
};

export default CheckBox;
