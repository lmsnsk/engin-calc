import { useSelector } from "react-redux";
import stl from "./LashingRing.module.css";
import SelectInput from "../../Input/SelectInput";
import CheckBox from "../../Input/CheckBox";
import { kgsmm2UnitArray, meterUnitArray, kgsUnitArray } from "../../Units/unitArrays";
import {
  calculateLashingRing,
  setConFactor,
  setToogler,
  setBMatLimit,
  setBoltDiam,
  setEarRadius,
  setEarThick,
  setEMatLimit,
  setHoleDiam,
  setJumper,
  setLoad,
  setPlaneCount,
  setEarThickUnit,
  setEarRadiusUnit,
  setHoleDiamUnit,
  setJumperUnit,
  setBoltDiamUnit,
  setLoadUnit,
  setEMatLimitUnit,
  setBMatLimitUnit,
} from "../../../redux/lashingSlice";
import { inputBlock } from "../../supportFunctions/inputBlock";

const LashingInputBlock = ({ paramsArray, calculateFn }) => {
  const {
    conFactor,
    conFactorText,
    earParams: { earThick, earRadius, holeDiam, jumper, boltDiam, load, matEarLimit, matBoltLimit, planeCount },
    toogler,
    jumperCustom,
  } = useSelector((state) => state.lashingRing);

  const inputArrayParams = [
    {
      name: "Толщина ушка",
      value: earThick.value,
      setValue: setEarThick,
      unit: {
        unitArr: meterUnitArray,
        changeUnit: setEarThickUnit,
        currentUnit: earThick.unit,
      },
    },
    {
      name: "Радиус ушка",
      value: earRadius.value,
      setValue: setEarRadius,
      unit: {
        unitArr: meterUnitArray,
        changeUnit: setEarRadiusUnit,
        currentUnit: earRadius.unit,
      },
    },
    {
      name: "Диаметр отверстия",
      value: holeDiam.value,
      setValue: setHoleDiam,
      unit: {
        unitArr: meterUnitArray,
        changeUnit: setHoleDiamUnit,
        currentUnit: holeDiam.unit,
      },
    },
    {
      name: "Поперечная перемычка",
      value: toogler ? jumperCustom : jumper.value,
      setValue: setJumper,
      disableInput: toogler,
      unit: {
        unitArr: meterUnitArray,
        changeUnit: setJumperUnit,
        currentUnit: jumper.unit,
      },
    },
    {
      name: "Диаметр болта",
      value: boltDiam.value,
      setValue: setBoltDiam,
      unit: {
        unitArr: meterUnitArray,
        changeUnit: setBoltDiamUnit,
        currentUnit: boltDiam.unit,
      },
    },
    {
      name: "Нагрузка",
      value: load.value,
      setValue: setLoad,
      unit: {
        unitArr: kgsUnitArray,
        changeUnit: setLoadUnit,
        currentUnit: load.unit,
      },
    },
    {
      name: "Предел прочности ушка",
      value: matEarLimit.value,
      setValue: setEMatLimit,
      unit: {
        unitArr: kgsmm2UnitArray,
        changeUnit: setEMatLimitUnit,
        currentUnit: matEarLimit.unit,
      },
    },

    {
      name: "Предел прочности болта",
      value: matBoltLimit.value,
      setValue: setBMatLimit,
      unit: {
        unitArr: kgsmm2UnitArray,
        changeUnit: setBMatLimitUnit,
        currentUnit: matBoltLimit.unit,
      },
    },
    {
      name: "Кол-во плоскостей среза",
      value: planeCount,
      unit: <p>шт</p>,
      setValue: setPlaneCount,
    },
  ];

  return (
    <div className={stl.initialData}>
      <div className={stl.label}>Отверстие и радиус ушка соосны</div>
      <CheckBox check={toogler} setCheck={setToogler} sideEffect={calculateFn} />
      {inputBlock(inputArrayParams, calculateLashingRing)}
      <div className={stl.form}>Тип соединения</div>
      <SelectInput
        name="connactionType"
        id="connactionType"
        paramsArray={paramsArray}
        value={conFactor}
        text={conFactorText}
        setValue={setConFactor}
        sideEffect={calculateFn}
      />
    </div>
  );
};

export default LashingInputBlock;
