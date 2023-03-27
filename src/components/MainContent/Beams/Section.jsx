import { useSelector } from "react-redux";
import { setDiam, setHeigth, setThickShelf, setThickWall, setWidth } from "../../../redux/beamsSlice";
import HideContainer from "../../Input/HideContainer";
import InputForm from "../../Input/InputForm";
import Results from "../../Results/Results";
import stl from "./../MainContent.module.css";

let [mm, mm2, mm3, mm4] = [
  "мм",
  <>
    мм<sup>2</sup>
  </>,
  <>
    мм<sup>3</sup>
  </>,
  <>
    мм<sup>4</sup>
  </>,
];

const Section = (props) => {
  const sectionShowed = useSelector((state) => state.beams.sectionShowed);
  const diam = useSelector((state) => state.beams.diam);
  const width = useSelector((state) => state.beams.width);
  const heigth = useSelector((state) => state.beams.heigth);
  const thickWall = useSelector((state) => state.beams.thickWall);
  const thickShelf = useSelector((state) => state.beams.thickShelf);
  const area = useSelector((state) => state.beams.area);
  const momRes = useSelector((state) => state.beams.momRes);
  const momIn = useSelector((state) => state.beams.momIn);

  const sectionParamsArr = [
    <InputForm name="Диаметр" value={diam} unit={mm} setValue={setDiam} calculateFn={props.calculateFn} />,
    <InputForm name="Ширина" value={width} unit={mm} setValue={setWidth} calculateFn={props.calculateFn} />,
    <InputForm name="Высота" value={heigth} unit={mm} setValue={setHeigth} calculateFn={props.calculateFn} />,
    <InputForm
      name="Толщина стенки"
      value={thickWall}
      unit={mm}
      setValue={setThickWall}
      calculateFn={props.calculateFn}
    />,
    <InputForm
      name="Толщина полок"
      value={thickShelf}
      unit={mm}
      setValue={setThickShelf}
      calculateFn={props.calculateFn}
    />,
  ];

  const currentSection = () => {
    switch (sectionShowed) {
      case 1:
        return <>{sectionParamsArr[0]}</>;
      case 2:
        return (
          <>
            {sectionParamsArr[0]}
            {sectionParamsArr[3]}
          </>
        );
      case 3:
        return (
          <>
            {sectionParamsArr[1]}
            {sectionParamsArr[2]}
          </>
        );
      case 4:
        return (
          <>
            {sectionParamsArr[1]}
            {sectionParamsArr[2]}
            {sectionParamsArr[3]}
          </>
        );
      case 5:
        return (
          <>
            {sectionParamsArr[1]}
            {sectionParamsArr[2]}
            {sectionParamsArr[3]}
            {sectionParamsArr[4]}
          </>
        );
      case 6:
        return (
          <>
            {sectionParamsArr[1]}
            {sectionParamsArr[2]}
            {sectionParamsArr[3]}
            {sectionParamsArr[4]}
          </>
        );
      case 7:
        return (
          <>
            {sectionParamsArr[1]}
            {sectionParamsArr[2]}
            {sectionParamsArr[3]}
            {sectionParamsArr[4]}
          </>
        );
      case 8:
        return (
          <>
            {sectionParamsArr[1]}
            {sectionParamsArr[2]}
            {sectionParamsArr[3]}
            <InputForm
              name="Толщина полки"
              value={thickShelf}
              unit={mm}
              setValue={setThickShelf}
              calculateFn={props.calculateFn}
            />
          </>
        );
      default:
        return null;
    }
  };

  let results = [
    { id: 1, name: "Площадь сечения", value: area, unit: mm2 },
    { id: 2, name: "Момент сопотивления сечения", value: momRes, unit: mm3 },
    { id: 3, name: "Момент инерции сечения", value: momIn, unit: mm4 },
  ];

  const title = <p>Площадь, момент сопротивления и момент инерции сечения</p>;

  return (
    <>
      <h2>{props.titles[sectionShowed - 1]}</h2>
      <br />
      <div className={stl.initialData}>{currentSection()}</div>
      <HideContainer data={<Results results={results} />} title={title} />
    </>
  );
};

export default Section;
