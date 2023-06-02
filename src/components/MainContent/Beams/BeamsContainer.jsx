import { useDispatch, useSelector } from "react-redux";
import { kgsmm2UnitArray, kgsUnitArray, kgsmUnitArray, meterUnitArray } from "../../Units/unitArrays";
import {
  calculateChannelHorizSection,
  calculateChannelVertSection,
  calculateCircleSection,
  calculateCircleTubeSection,
  calculateRectangleSection,
  calculateRectangleTubeSection,
  calculateTBeamAndCornerSection,
  calculateTwoSupBeam,
  calculateConsoleBeam,
  calculateBuckling,
  setStrain,
  setDeflection,
  setSafeFactor,
  setCriticalLoad,
  setCriticalFactor,
  setAReaction,
  setBReaction,
  setMoment,
  setAReactionUnit,
  setBReactionUnit,
  setMomentUnit,
  setStrainUnit,
  setDeflectionUnit,
  setCriticalLoadUnit,
} from "../../../redux/beamsSlice";
import TwoSupBeam from "./TwoSupBeam";
import ConsoleBeam from "./ConsoleBeam";
import Buckling from "./Buckling";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Units from "../../Units/Units";
import Beams from "./Beams";

let titles = [
  "Пруток круглый",
  "Труба круглая",
  "Пруток прямоугольный",
  "Труба прямоугольная",
  "Швеллер стоячий",
  "Швеллер лежачий",
  "Тавр",
  "Уголок",
];
let paramsSectionsArray = titles.map((el, index) => ({ value: index + 1, name: el }));

let paramsBeamTypeArray = [
  { value: 1, name: "Двухопорная балка" },
  { value: 2, name: "Консольная балка" },
  { value: 3, name: "Общая потеря устойчивости" },
];

const BeamsContainer = () => {
  const {
    sectionShowed,
    beamTypeShowed,
    aReaction,
    bReaction,
    moment,
    strain,
    deflection,
    safeFactor,
    criticalLoad,
    criticalFactor,
  } = useSelector((state) => state.beams);

  const dispatch = useDispatch();

  const calculate = createAsyncThunk("beams/calculate", async (_, { dispatch }) => {
    await dispatch(calculateSection());
    dispatch(calculateBeamType());
  });

  function calculateBeamType() {
    switch (beamTypeShowed) {
      case 1:
        return calculateTwoSupBeam();
      case 2:
        return calculateConsoleBeam();
      case 3:
        return calculateBuckling();
      default:
        return null;
    }
  }

  function calculateSection() {
    switch (sectionShowed) {
      case 1:
        return calculateCircleSection();
      case 2:
        return calculateCircleTubeSection();
      case 3:
        return calculateRectangleSection();
      case 4:
        return calculateRectangleTubeSection();
      case 5:
        return calculateChannelVertSection();
      case 6:
        return calculateChannelHorizSection();
      case 7:
        return calculateTBeamAndCornerSection();
      case 8:
        return calculateTBeamAndCornerSection();
      default:
        return null;
    }
  }

  const currentBeamType = () => {
    switch (beamTypeShowed) {
      case 1:
        return <TwoSupBeam title={paramsBeamTypeArray[0].name} calculateFn={calculate} />;
      case 2:
        return <ConsoleBeam title={paramsBeamTypeArray[1].name} calculateFn={calculate} />;
      case 3:
        return (
          <Buckling title={paramsBeamTypeArray[2].name} calculateFn={calculate} clearBeamParams={clearBeamParams} />
        );
      default:
        return null;
    }
  };

  const clearBeamParams = () => {
    dispatch(setAReaction(""));
    dispatch(setBReaction(""));
    dispatch(setMoment(""));
    dispatch(setStrain(""));
    dispatch(setDeflection(""));
    dispatch(setSafeFactor(""));
    dispatch(setCriticalLoad(""));
    dispatch(setCriticalFactor(""));
  };

  let results = [
    {
      id: 1,
      name: "Реакция в опоре 1",
      value: aReaction.value,
      unit: (
        <Units
          unitArr={kgsUnitArray}
          changeUnit={setAReactionUnit}
          currentUnit={aReaction.unit}
          calculateFn={calculate}
        />
      ),
    },
    {
      id: 2,
      name: "Реакция в опоре 2",
      value: bReaction.value,
      unit: (
        <Units
          unitArr={kgsUnitArray}
          changeUnit={setBReactionUnit}
          currentUnit={bReaction.unit}
          calculateFn={calculate}
        />
      ),
    },
    {
      id: 3,
      name: "Максимальный изгибающий момент",
      value: moment.value,
      unit: (
        <Units unitArr={kgsmUnitArray} changeUnit={setMomentUnit} currentUnit={moment.unit} calculateFn={calculate} />
      ),
    },
    {
      id: 4,
      name: "Максимальные напряжения",
      value: strain.value,
      unit: (
        <Units unitArr={kgsmm2UnitArray} changeUnit={setStrainUnit} currentUnit={strain.unit} calculateFn={calculate} />
      ),
    },
    {
      id: 5,
      name: "Максимальный прогиб",
      value: deflection.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setDeflectionUnit}
          currentUnit={deflection.unit}
          calculateFn={calculate}
        />
      ),
    },
    { id: 6, name: "Запас прочности", value: safeFactor, unit: "", color: true },
    {
      id: 7,
      name: "Критическая нагрузка",
      value: criticalLoad.value,
      unit: (
        <Units
          unitArr={kgsUnitArray}
          changeUnit={setCriticalLoadUnit}
          currentUnit={criticalLoad.unit}
          calculateFn={calculate}
        />
      ),
    },
    { id: 8, name: "Запас по устойчивости", value: criticalFactor, unit: "", color: true },
  ];

  return (
    <Beams
      titles={titles}
      results={results}
      paramsSectionsArray={paramsSectionsArray}
      paramsBeamTypeArray={paramsBeamTypeArray}
      calculate={calculate}
      clearBeamParams={clearBeamParams}
      currentBeamType={currentBeamType}
    />
  );
};

export default BeamsContainer;
