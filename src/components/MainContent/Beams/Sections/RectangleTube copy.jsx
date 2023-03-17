import { useState } from "react";
import Section from "./Section";

const RectangleTubeCopy = () => {
  let [width, setWidth] = useState("");
  let [heigth, setHeigth] = useState("");
  let [thick, setThick] = useState("");

  let calculateSection = (area, momRes, momIn, setArea, setMomRes, setMomIn) => {
    let widthInner = width - 2 * thick;
    let heigthInner = heigth - 2 * thick;
    area = width * heigth - widthInner * heigthInner;
    momRes = (width * heigth ** 3 - widthInner * heigthInner ** 3) / (6 * heigth);
    momIn = (width * heigth ** 3 - widthInner * heigthInner ** 3) / 12;
    setArea(area);
    setMomRes(momRes);
    setMomIn(momIn);
  };

  let inputArray = [
    ["Ширина", width, setWidth],
    ["Высота", heigth, setHeigth],
    ["Толщина стенки", thick, setThick],
  ];

  let title = "Труба прямоугольная";

  return <Section inputArray={inputArray} title={title} calculateSection={calculateSection} />;
};
export default RectangleTubeCopy;
