import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import stl from "./Spring.module.css";

import {
  calculateSpring,
  setSpringType,
  calculateF3,
  setF3Unit,
  setDUnit,
  setF0Unit,
  setCUnit,
  setS1Unit,
  setL2Unit,
  setL1Unit,
  setL0Unit,
  setL3Unit,
  setS3Unit,
  setS2Unit,
  setTUnit,
  setLUnit,
  setMUnit,
} from "../../../redux/springSlice";
import Units from "../../Units/Units";
import Spring from "./Spring";
import { kgUnitArray, kgsUnitArray, meterUnitArray, nmmUnitArray } from "../../Units/unitArrays";

interface paramsSpringTypeArrayI {
  value: number;
  name: string;
}

const paramsSpringTypeArray: paramsSpringTypeArrayI[] = [
  { value: 1, name: "Пружина сжатия" },
  { value: 2, name: "Пружина растяжения" },
];

const SpringContainer: FC = () => {
  const { springType, F0, F3, c, n, D, s1, s2, s3, l0, l1, l2, l3, t, l, m } = useAppSelector(
    (state) => state.spring
  );

  const dispatch = useAppDispatch();

  const changeSpringType = (type: paramsSpringTypeArrayI) => dispatch(setSpringType(type));

  const calculate = () => dispatch(calculateSpring());

  const onClickchangeSpringType = (param: paramsSpringTypeArrayI) => {
    changeSpringType(param);
    dispatch(calculateSpring());
  };

  const buttonSpringTypeSelect = (img: string, param: paramsSpringTypeArrayI) => {
    return (
      <div
        className={`${stl.buttonSelect} ${
          +springType === param.value ? stl.buttonSelectActive : null
        }`}
        onClick={() => onClickchangeSpringType(param)}
      >
        <img src={img} alt="" />
        <p>{param.name}</p>
      </div>
    );
  };

  const typeText = () => {
    if (+springType === 1) {
      return paramsSpringTypeArray[0].name;
    } else if (+springType === 2) {
      return paramsSpringTypeArray[1].name;
    }
  };

  const resultText = () => {
    if (+springType === 1) {
      return [
        "Длина максимально сжатой пружины",
        "Длина несжатой пружины",
        "Длина предварительно сжатой пружины",
        "Длина рабоче-сжатой пружины",
      ];
    } else if (+springType === 2) {
      return [
        "Длина максимально растянутой пружины",
        "Длина нерастянутой пружины",
        "Длина предварительно растянутой пружины",
        "Длина рабоче-растянутой пружины",
      ];
    } else {
      return "";
    }
  };

  const results1 = [
    {
      id: 1,
      name: "Сила пружины при максимальной деформации",
      value: F3.value,
      unit: (
        <Units
          unitArr={kgsUnitArray}
          changeUnit={setF3Unit}
          currentUnit={F3.unit}
          calculateFn={calculateF3}
        />
      ),
    },
  ];

  const results2 = [
    {
      id: 1,
      name: "Сила предварительного напряжения",
      value: F0.value,
      unit: (
        <Units
          unitArr={kgsUnitArray}
          changeUnit={setF0Unit}
          currentUnit={F0.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 2,
      name: "Жесткость пружины",
      value: c.value,
      unit: (
        <Units
          unitArr={nmmUnitArray}
          changeUnit={setCUnit}
          currentUnit={c.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 3,
      name: "Диаметр пружины по осям",
      value: D.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setDUnit}
          currentUnit={D.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    { id: 4, name: "Число витков", value: n, unit: "" },
    {
      id: 5,
      name: "Деформация предварительного натяжения",
      value: s1.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setS1Unit}
          currentUnit={s1.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 6,
      name: "Рабочая деформация",
      value: s2.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setS2Unit}
          currentUnit={s2.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 7,
      name: "Максимальная деформация",
      value: s3.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setS3Unit}
          currentUnit={s3.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 8,
      name: resultText()[0],
      value: l3.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setL3Unit}
          currentUnit={l3.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 9,
      name: resultText()[1],
      value: l0.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setL0Unit}
          currentUnit={l0.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 10,
      name: resultText()[2],
      value: l1.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setL1Unit}
          currentUnit={l1.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 11,
      name: resultText()[3],
      value: l2.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setL2Unit}
          currentUnit={l2.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 12,
      name: "Шаг пружины",
      value: t.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setTUnit}
          currentUnit={t.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 13,
      name: "Длина развертки",
      value: l.value,
      unit: (
        <Units
          unitArr={meterUnitArray}
          changeUnit={setLUnit}
          currentUnit={l.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
    {
      id: 14,
      name: "Масса пружины",
      value: m.value,
      unit: (
        <Units
          unitArr={kgUnitArray}
          changeUnit={setMUnit}
          currentUnit={m.unit}
          calculateFn={calculateSpring}
        />
      ),
    },
  ];

  return (
    <Spring
      results1={results1}
      results2={results2}
      calculate={calculate}
      buttonSpringTypeSelect={buttonSpringTypeSelect}
      typeText={typeText}
      paramsSpringTypeArray={paramsSpringTypeArray}
    />
  );
};

export default SpringContainer;
