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
  sets3w,
  setSpringType,
} from "../../../redux/springSlice";
import CalculationButton from "../../Input/CalculationButton";
import input from "../../hoc/input";
import stl from "./../MainContent.module.css";
import Results from "../../Results/Results";
import springCompressionImg from "./../../../assets/images/spring-compression.svg";
import springStretchingImg from "./../../../assets/images/spring-stretching.svg";

const [mm, kg, kgs, kgm3, nuton, nutonmm] = [
  "мм",
  "кг",
  "кгс",
  <>
    кг/м<sup>3</sup>
  </>,
  "Н",
  "Н/мм",
];

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
  const s3w = useSelector((state) => state.spring.s3w);
  const l0 = useSelector((state) => state.spring.l0);
  const l1 = useSelector((state) => state.spring.l1);
  const l2 = useSelector((state) => state.spring.l2);
  const l3 = useSelector((state) => state.spring.l3);
  const t = useSelector((state) => state.spring.t);
  const l = useSelector((state) => state.spring.l);
  const m = useSelector((state) => state.spring.m);

  const dispatch = useDispatch();

  function inputCalculation() {
    dispatch(calculateSpring());
  }

  function changeSpringType(type) {
    dispatch(setSpringType(type));
  }

  function buttonSpringTypeSelect(img, param) {
    return (
      <div
        className={`${stl.buttonSelect} ${stl.buttonBeamTypeSelect} ${
          springType === param.value ? stl.buttonSelectActive : null
        }`}
        onClick={() => changeSpringType(param)}
      >
        <img src={img} alt="" />
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

  const results1 = [{ id: 1, name: "Сила пружины при максимальной деформации", value: F3, unit: kgs }];

  const results = [
    { id: 1, name: "Сила предварительного напряжения", value: F0, unit: nuton },
    { id: 2, name: "Жесткость пружины", value: c, unit: nutonmm },
    { id: 3, name: "Диаметр пружины по осям", value: D, unit: mm },
    { id: 4, name: "Число витков", value: n, unit: "" },
    { id: 5, name: "Деформация предварительного натяжения", value: s1, unit: mm },
    { id: 6, name: "Рабочая деформация", value: s2, unit: mm },
    { id: 7, name: "Максимальная деформация", value: s3, unit: mm },
    { id: 8, name: resultText()[0], value: l3, unit: mm },
    { id: 9, name: resultText()[1], value: l0, unit: mm },
    { id: 10, name: resultText()[2], value: l1, unit: mm },
    { id: 11, name: resultText()[3], value: l2, unit: mm },
    { id: 12, name: "Шаг пружины", value: t, unit: mm },
    { id: 13, name: "Длина развертки", value: l, unit: mm },
    { id: 13, name: "Масса пружины", value: m, unit: kg },
  ];

  return (
    <div className={stl.wrapper}>
      <h1>Расчёт пружин</h1>
      <h2>Выберите тип пружины</h2>
      <div className={stl.buttonSelectBox}>
        {buttonSpringTypeSelect(springCompressionImg, paramsSpringTypeArray[0])}
        {buttonSpringTypeSelect(springStretchingImg, paramsSpringTypeArray[1])}
      </div>
      <div className={stl.spring}>
        <h3>{typeText()}</h3>
      </div>
      <div className={stl.initialData}>
        {input("Сила пружины при предварительной деформации", F1, kgs, setF1, inputCalculation)}
        {input("Сила пружины при рабочей деформации", F2, kgs, setF2, inputCalculation)}
        {input("Коэффициент максимальной деформации", delta, "", setDelta, inputCalculation)}
      </div>
      <Results results={results1} />
      <div className={stl.initialData}>
        {input("Рабочий ход пружины", h, mm, seth, inputCalculation)}
        {input("Плотность материала пружины", ro, kgm3, setRo, inputCalculation)}
      </div>
      <h3>Берется из таблиц ГОСТ 13766...76-86 по силе при максимальной деформации</h3>
      <br />
      <div className={stl.initialData}>
        {input("Внейшний диаметр пружины", D1, mm, setD1, inputCalculation)}
        {input("Диаметр проволоки пружины", d, mm, setd, inputCalculation)}
        {input("Жесткость одного витка", c1, nutonmm, setc1, inputCalculation)}
        {input("Максимальная деформация одного витка", s3w, mm, sets3w, inputCalculation)}
      </div>
      <CalculationButton calculateFn={inputCalculation} text="Рассчитать" />
      <Results results={results} />
    </div>
  );
};

export default Spring;
