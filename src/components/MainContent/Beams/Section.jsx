import { useSelector } from "react-redux";
import {
  setDiam,
  setHeigth,
  setThickShelf,
  setThickWall,
  setWidth,
  setDiamUnit,
  setWidthUnit,
  setHeigthUnit,
  setThickWallUnit,
  setThickShelfUnit,
  setAreaUnit,
  setMomResUnit,
  setMomInUnit,
} from "../../../redux/beamsSlice";
import HideContainer from "../../Input/HideContainer";
import InputForm from "../../Input/InputForm";
import Results from "../../Results/Results";
import stl from "./Beams.module.css";
import Units from "../../Units/Units";
import { meter2UnitArray, meter3UnitArray, meter4UnitArray, meterUnitArray } from "../../Units/unitArrays";

const Section = ({ calculateFn, titles }) => {
  const { sectionShowed, diam, width, heigth, thickWall, thickShelf, area, momRes, momIn } = useSelector(
    (state) => state.beams
  );

  const sectionParamsArr = [
    <InputForm
      name="Диаметр"
      value={diam.value}
      unit={
        <Units unitArr={meterUnitArray} changeUnit={setDiamUnit} currentUnit={diam.unit} calculateFn={calculateFn} />
      }
      setValue={setDiam}
      calculateFn={calculateFn}
    />,
    <InputForm
      name="Ширина"
      value={width.value}
      unit={
        <Units unitArr={meterUnitArray} changeUnit={setWidthUnit} currentUnit={width.unit} calculateFn={calculateFn} />
      }
      setValue={setWidth}
      calculateFn={calculateFn}
    />,
    <InputForm
      name="Высота"
      value={heigth.value}
      unit={
        <Units
          unitArr={meterUnitArray}
          changeUnit={setHeigthUnit}
          currentUnit={heigth.unit}
          calculateFn={calculateFn}
        />
      }
      setValue={setHeigth}
      calculateFn={calculateFn}
    />,
    <InputForm
      name="Толщина стенки"
      value={thickWall.value}
      unit={
        <Units
          unitArr={meterUnitArray}
          changeUnit={setThickWallUnit}
          currentUnit={thickWall.unit}
          calculateFn={calculateFn}
        />
      }
      setValue={setThickWall}
      calculateFn={calculateFn}
    />,
    <InputForm
      name="Толщина полки"
      value={thickShelf.value}
      unit={
        <Units
          unitArr={meterUnitArray}
          changeUnit={setThickShelfUnit}
          currentUnit={thickShelf.unit}
          calculateFn={calculateFn}
        />
      }
      setValue={setThickShelf}
      calculateFn={calculateFn}
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
            {sectionParamsArr[4]}
          </>
        );
      default:
        return null;
    }
  };

  const results = [
    {
      id: 1,
      name: "Площадь сечения",
      value: area.value,
      unit: (
        <Units unitArr={meter2UnitArray} changeUnit={setAreaUnit} currentUnit={area.unit} calculateFn={calculateFn} />
      ),
    },
    {
      id: 2,
      name: "Момент сопотивления сечения",
      value: momRes.value,
      unit: (
        <Units
          unitArr={meter3UnitArray}
          changeUnit={setMomResUnit}
          currentUnit={momRes.unit}
          calculateFn={calculateFn}
        />
      ),
    },
    {
      id: 3,
      name: "Момент инерции сечения",
      value: momIn.value,
      unit: (
        <Units unitArr={meter4UnitArray} changeUnit={setMomInUnit} currentUnit={momIn.unit} calculateFn={calculateFn} />
      ),
    },
  ];

  const title = <p>Площадь, момент сопротивления и момент инерции сечения</p>;

  return (
    <>
      <h2>{titles[sectionShowed - 1]}</h2>
      <br />
      <div className={stl.initialData}>{currentSection()}</div>
      <HideContainer data={<Results results={results} />} title={title} />
    </>
  );
};

export default Section;
