import { Fragment, FC, ReactNode } from "react";

import stl from "./Results.module.css";

interface ResultsProps {
  results: IResults[];
}

export interface IResults {
  id: number;
  name: string;
  value: string;
  unit: ReactNode;
  color?: boolean;
}

const Results: FC<ResultsProps> = ({ results }) => {
  let a = 0;
  function value(el: IResults) {
    a = +el.value;
    if (a === Math.round(a) || a > 100) {
      a = Math.round(a);
    } else if (a > 10) {
      a = +a.toFixed(1);
    } else if (a < 0.01) {
      a = +a.toFixed(3);
    } else if (a < 0.001) {
      a = +a.toFixed(4);
    } else if (a < 0.0001) {
      a = +a.toFixed(5);
    } else {
      a = +a.toFixed(2);
    }
    return (
      <>
        {a} <div className={stl.unitText}>{el.unit}</div>
      </>
    );
  }

  const resultElement = results.map((el) => {
    return (
      <Fragment key={el.id}>
        {isFinite(+el.value) && typeof el.value === "number" ? (
          <>
            <div className={stl.form}>{el.name}:</div>
            {el.color ? (
              el.value > 1 ? (
                <div className={stl.formGreen}>{value(el)}</div>
              ) : (
                <div className={stl.formRed}>{value(el)}</div>
              )
            ) : (
              <div className={stl.form}>{value(el)}</div>
            )}
          </>
        ) : null}
      </Fragment>
    );
  });

  return (
    <div className={stl.result} id="result">
      <div className={stl.resultData}>{resultElement}</div>
    </div>
  );
};

export default Results;
