import React from "react";
import stl from "./../Input/Form.module.css";

const Results = (props) => {
  let resultElement = props.results.map((el) => {
    return (
      <React.Fragment key={el.id}>
        {isFinite(el.value) && typeof el.value === "number" ? (
          <>
            <div className={stl.form}>{el.name}:</div>
            {el.color ? (
              el.value > 1 ? (
                <div className={stl.formGreen}>
                  {(+el.value).toFixed(2)} <p>{el.unit}</p>
                </div>
              ) : (
                <div className={stl.formRed}>
                  {(+el.value).toFixed(2)} <p>{el.unit}</p>
                </div>
              )
            ) : (
              <div className={stl.form}>
                {(+el.value).toFixed(2)} <p>{el.unit}</p>
              </div>
            )}
          </>
        ) : null}
      </React.Fragment>
    );
  });
  return (
    <div className={stl.result}>
      <div className={stl.resultData}>{resultElement}</div>
    </div>
  );
};

export default Results;
