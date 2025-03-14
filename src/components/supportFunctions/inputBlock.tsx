import { FC } from "react";
import { Action } from "redux";

import Units from "../Units/Units";
import InputForm from "../Input/InputForm";

interface InputBlockI {
  inputArrayParams: any; //!
  calculateFn: () => Action;
}

export const InputBlock: FC<InputBlockI> = ({ inputArrayParams, calculateFn }) => {
  return inputArrayParams.map((el: HTMLElement) => {
    return (
      <InputForm
        key={el.name}
        name={el.name}
        value={el.value}
        setValue={el.setValue}
        disableInput={el.disableInput ? el.disableInput : null}
        calculateFn={calculateFn}
        unit={
          el.unit.currentUnit ? (
            <Units
              unitArr={el.unit.unitArr}
              changeUnit={el.unit.changeUnit}
              currentUnit={el.unit.currentUnit}
              calculateFn={calculateFn}
            />
          ) : null
        }
      />
    );
  });
};
