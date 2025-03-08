import { FC } from "react";
import { Action } from "redux";
import { useAppDispatch } from "../../redux/hooks";

import stl from "./CheckBox.module.css";

interface CheckBoxProps {
  check: boolean;
  sideEffect: () => void;
  setCheck: (check: boolean) => Action;
}

const CheckBox: FC<CheckBoxProps> = ({ check, sideEffect, setCheck }) => {
  const dispatch = useAppDispatch();

  const toogler = () => {
    dispatch(setCheck(!check));
    sideEffect();
  };

  return (
    <>
      <div onClick={toogler} className={stl.checkbox}>
        <div className={check ? stl.tooglerChanged : stl.toogler}></div>
      </div>
    </>
  );
};

export default CheckBox;
