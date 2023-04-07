import stl from "./Spring.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateSpring,
  setF1,
  setF2,
  seth,
  setDelta,
  setRo,
  setD1,
  setd,
  setc1,
  setSpringType,
  calculateF3,
  setF1Unit,
  setF2Unit,
  sethUnit,
  setRoUnit,
  setF3Unit,
  setD1Unit,
  setDUnit,
  setdUnit,
  setc1Unit,
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
import CalculationButton from "../../Input/CalculationButton";
import Units from "./../../Units/Units";
import Results from "../../Results/Results";
import springCompressionImg from "./../../../assets/images/spring-compression.svg";
import springStretchingImg from "./../../../assets/images/spring-stretching.svg";
import InputForm from "../../Input/InputForm";
import { kgUnitArray, kgm3UnitArray, kgsUnitArray, meterUnitArray, nmmUnitArray } from "../../Units/unitArrays";

let paramsSpringTypeArray = [
  { value: 1, name: "Пружина сжатия" },
  { value: 2, name: "Пружина растяжения" },
];

const Spring = () => {
  const springType = useSelector((state) => state.spring.springType);
  const F0 = useSelector((state) => state.spring.F0);
  const F1 = useSelector((state) => state.spring.F1);
  const F2 = useSelector((state) => state.spring.F2);
  const F3 = useSelector((state) => state.spring.F3);
  const h = useSelector((state) => state.spring.h);
  const c = useSelector((state) => state.spring.c);
  const delta = useSelector((state) => state.spring.delta);
  const ro = useSelector((state) => state.spring.ro);
  const D1 = useSelector((state) => state.spring.D1);
  const n = useSelector((state) => state.spring.n);
  const D = useSelector((state) => state.spring.D);
  const d = useSelector((state) => state.spring.d);
  const s1 = useSelector((state) => state.spring.s1);
  const s2 = useSelector((state) => state.spring.s2);
  const s3 = useSelector((state) => state.spring.s3);
  const c1 = useSelector((state) => state.spring.c1);
  const l0 = useSelector((state) => state.spring.l0);
  const l1 = useSelector((state) => state.spring.l1);
  const l2 = useSelector((state) => state.spring.l2);
  const l3 = useSelector((state) => state.spring.l3);
  const t = useSelector((state) => state.spring.t);
  const l = useSelector((state) => state.spring.l);
  const m = useSelector((state) => state.spring.m);

  const dispatch = useDispatch();

  function changeSpringType(type) {
    dispatch(setSpringType(type));
  }

  function calculate() {
    dispatch(calculateSpring());
  }

  function onClickchangeSpringType(param) {
    changeSpringType(param);
    dispatch(calculateSpring());
  }

  function buttonSpringTypeSelect(img, param) {
    return (
      <div
        className={`${stl.buttonSelect} ${springType === param.value ? stl.buttonSelectActive : null}`}
        onClick={() => onClickchangeSpringType(param)}
      >
        <img src={img} alt="" />
        <p>{param.name}</p>
      </div>
    );
  }

  function typeText() {
    if (springType === 1) {
      return paramsSpringTypeArray[0].name;
    } else if (springType === 2) {
      return paramsSpringTypeArray[1].name;
    }
  }

  function resultText() {
    if (springType === 1) {
      return [
        "Длина максимально сжатой пружины",
        "Длина несжатой пружины",
        "Длина предварительно сжатой пружины",
        "Длина рабоче-сжатой пружины",
      ];
    } else if (springType === 2) {
      return [
        "Длина максимально растянутой пружины",
        "Длина нерастянутой пружины",
        "Длина предварительно растянутой пружины",
        "Длина рабоче-растянутой пружины",
      ];
    } else {
      return "";
    }
  }

  function resultTextDelta() {
    if (springType === 1) {
      return "Относительный инерциальный зазор";
    } else if (springType === 2) {
      return "Коэффициент максимальной деформации";
    } else {
      return "";
    }
  }

  const results1 = [
    {
      id: 1,
      name: "Сила пружины при максимальной деформации",
      value: F3.value,
      unit: <Units unitArr={kgsUnitArray} changeUnit={setF3Unit} currentUnit={F3.unit} calculateFn={calculateF3} />,
    },
  ];

  const results = [
    {
      id: 1,
      name: "Сила предварительного напряжения",
      value: F0.value,
      unit: <Units unitArr={kgsUnitArray} changeUnit={setF0Unit} currentUnit={F0.unit} calculateFn={calculateSpring} />,
    },
    {
      id: 2,
      name: "Жесткость пружины",
      value: c.value,
      unit: <Units unitArr={nmmUnitArray} changeUnit={setCUnit} currentUnit={c.unit} calculateFn={calculateSpring} />,
    },
    {
      id: 3,
      name: "Диаметр пружины по осям",
      value: D.value,
      unit: <Units unitArr={meterUnitArray} changeUnit={setDUnit} currentUnit={D.unit} calculateFn={calculateSpring} />,
    },
    { id: 4, name: "Число витков", value: n, unit: "" },
    {
      id: 5,
      name: "Деформация предварительного натяжения",
      value: s1.value,
      unit: (
        <Units unitArr={meterUnitArray} changeUnit={setS1Unit} currentUnit={s1.unit} calculateFn={calculateSpring} />
      ),
    },
    {
      id: 6,
      name: "Рабочая деформация",
      value: s2.value,
      unit: (
        <Units unitArr={meterUnitArray} changeUnit={setS2Unit} currentUnit={s2.unit} calculateFn={calculateSpring} />
      ),
    },
    {
      id: 7,
      name: "Максимальная деформация",
      value: s3.value,
      unit: (
        <Units unitArr={meterUnitArray} changeUnit={setS3Unit} currentUnit={s3.unit} calculateFn={calculateSpring} />
      ),
    },
    {
      id: 8,
      name: resultText()[0],
      value: l3.value,
      unit: (
        <Units unitArr={meterUnitArray} changeUnit={setL3Unit} currentUnit={l3.unit} calculateFn={calculateSpring} />
      ),
    },
    {
      id: 9,
      name: resultText()[1],
      value: l0.value,
      unit: (
        <Units unitArr={meterUnitArray} changeUnit={setL0Unit} currentUnit={l0.unit} calculateFn={calculateSpring} />
      ),
    },
    {
      id: 10,
      name: resultText()[2],
      value: l1.value,
      unit: (
        <Units unitArr={meterUnitArray} changeUnit={setL1Unit} currentUnit={l1.unit} calculateFn={calculateSpring} />
      ),
    },
    {
      id: 11,
      name: resultText()[3],
      value: l2.value,
      unit: (
        <Units unitArr={meterUnitArray} changeUnit={setL2Unit} currentUnit={l2.unit} calculateFn={calculateSpring} />
      ),
    },
    {
      id: 12,
      name: "Шаг пружины",
      value: t.value,
      unit: <Units unitArr={meterUnitArray} changeUnit={setTUnit} currentUnit={t.unit} calculateFn={calculateSpring} />,
    },
    {
      id: 13,
      name: "Длина развертки",
      value: l.value,
      unit: <Units unitArr={meterUnitArray} changeUnit={setLUnit} currentUnit={l.unit} calculateFn={calculateSpring} />,
    },
    {
      id: 14,
      name: "Масса пружины",
      value: m.value,
      unit: <Units unitArr={kgUnitArray} changeUnit={setMUnit} currentUnit={m.unit} calculateFn={calculateSpring} />,
    },
  ];

  return (
    <div className={stl.wrapper}>
      <h1>Расчёт пружин</h1>
      <h2>Выберите тип пружины</h2>
      <div className={stl.buttonSelectBox}>
        {buttonSpringTypeSelect(springCompressionImg, paramsSpringTypeArray[0])}
        {buttonSpringTypeSelect(springStretchingImg, paramsSpringTypeArray[1])}
      </div>
      {springType ? (
        <>
          <div className={stl.spring}>
            <h3>{typeText()}</h3>
          </div>
          <div className={stl.initialData}>
            <InputForm
              name="Рабочий ход пружины"
              value={h.value}
              setValue={seth}
              calculateFn={calculateF3}
              unit={
                <Units unitArr={meterUnitArray} changeUnit={sethUnit} currentUnit={h.unit} calculateFn={calculateF3} />
              }
            />
            <InputForm
              name="Плотность материала пружины"
              value={ro.value}
              setValue={setRo}
              calculateFn={calculateF3}
              unit={
                <Units unitArr={kgm3UnitArray} changeUnit={setRoUnit} currentUnit={ro.unit} calculateFn={calculateF3} />
              }
            />
            <InputForm name={resultTextDelta()} value={delta} setValue={setDelta} calculateFn={calculateF3} unit={""} />
            <InputForm
              name="Сила пружины при предварительной деформации"
              value={F1.value}
              setValue={setF1}
              calculateFn={calculateF3}
              unit={
                <Units unitArr={kgsUnitArray} changeUnit={setF1Unit} currentUnit={F1.unit} calculateFn={calculateF3} />
              }
            />
            <InputForm
              name="Сила пружины при рабочей деформации"
              value={F2.value}
              setValue={setF2}
              calculateFn={calculateF3}
              unit={
                <Units unitArr={kgsUnitArray} changeUnit={setF2Unit} currentUnit={F2.unit} calculateFn={calculateF3} />
              }
            />
          </div>
          <button className={stl.getF3} onClick={() => dispatch(calculateF3())}>
            Получить силу пружины при максимальной деформации
          </button>
          {F3.value && F3.value > 0 && F2.value > 0 && F1.value > 0 ? <Results results={results1} /> : null}
          {F3.value && F3.value > 0 ? (
            <>
              <h3>Берется из таблиц ГОСТ 13766...76-86 по силе при максимальной деформации</h3>
              <br />
              <div className={stl.initialData}>
                <InputForm
                  name="Внейшний диаметр пружины"
                  value={D1.value}
                  setValue={setD1}
                  calculateFn={calculateSpring}
                  unit={
                    <Units
                      unitArr={meterUnitArray}
                      changeUnit={setD1Unit}
                      currentUnit={D1.unit}
                      calculateFn={calculateSpring}
                    />
                  }
                />
                <InputForm
                  name="Диаметр проволоки пружины"
                  value={d.value}
                  setValue={setd}
                  calculateFn={calculateSpring}
                  unit={
                    <Units
                      unitArr={meterUnitArray}
                      changeUnit={setdUnit}
                      currentUnit={d.unit}
                      calculateFn={calculateSpring}
                    />
                  }
                />
                <InputForm
                  name="Жесткость одного витка"
                  value={c1.value}
                  setValue={setc1}
                  calculateFn={calculateSpring}
                  unit={
                    <Units
                      unitArr={nmmUnitArray}
                      changeUnit={setc1Unit}
                      currentUnit={c1.unit}
                      calculateFn={calculateSpring}
                    />
                  }
                />
              </div>
              <CalculationButton calculateFn={calculate} text="Рассчитать" />
              {D.value > 0 && d.value > 0 && c1.value > 0 && h.value > 0 && ro.value > 0 ? (
                <>
                  <Results results={results} />
                </>
              ) : null}
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default Spring;
