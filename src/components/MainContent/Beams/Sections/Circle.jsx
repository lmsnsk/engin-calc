import { useSelector } from "react-redux";
import { setDiam } from "../../../../redux/beamsSlice";
import InputForm from "../../../Input/InputForm";
import Results from "../../../Results/Results";
import stl from "./../../MainContent.module.css";

let [mm, mm2, mm3, mm4] = ["мм", "мм2", "мм3", "мм4"];

const Circle = (props) => {
  const diam = useSelector((state) => state.beams.diam);
  const area = useSelector((state) => state.beams.area);
  const momRes = useSelector((state) => state.beams.momRes);
  const momIn = useSelector((state) => state.beams.momIn);

  let results = [
    { id: 1, name: "Площадь сечения", value: area, unit: mm2 },
    { id: 2, name: "Момент сопотивления сечения", value: momRes, unit: mm3 },
    { id: 3, name: "Момент инерции сечения", value: momIn, unit: mm4 },
  ];

  // let sectionParams = { momRes, momIn };

  return (
    <>
      <h2>{props.title}</h2>
      <div className={stl.initialData}>
        <InputForm name="Диаметр" value={diam} unit={mm} setValue={setDiam} />
      </div>
      <Results results={results} />
    </>
  );
};

export default Circle;
