import { useDispatch } from "react-redux";
import stl from "./CheckBox.module.css";

const CheckBox = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div onClick={() => dispatch(props.setCheck(!props.check))} className={stl.checkbox}>
        <div className={props.check ? stl.tooglerChanged : stl.toogler}></div>
      </div>
    </>
  );
};

export default CheckBox;
