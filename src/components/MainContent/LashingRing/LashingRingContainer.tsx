import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import Units from "../../Units/Units";
import { kgsmm2UnitArray } from "../../Units/unitArrays";
import { calculateLashingRing } from "../../../redux/lashingSlice";
import { setSigmaInEarUnit, setSigmaSmUnit, setTauInBoltUnit } from "../../../redux/lashingSlice";
import { IResults } from "../../Results/Results";
import LashingRing from "./LashingRing";

export interface paramsArrayItem {
  value: number;
  name: string;
}

const paramsArray: paramsArrayItem[] = [
  { value: 0.2, name: "Подвижное" },
  { value: 0.65, name: "Малоподвижное" },
  { value: 1, name: "Неподвижное разъемное" },
  { value: 1.3, name: "Неподвижное неразъемное" },
];

const LashingRingContainer: FC = () => {
  const { sigmaInEar, earFS, sigmaSm, earFSSM, tauInBolt, boltFS } = useAppSelector(
    (state) => state.lashingRing
  );

  const dispatch = useAppDispatch();
  const calculate = () => dispatch(calculateLashingRing());

  const results: IResults[] = [
    {
      id: 1,
      name: "Напряжения в ушке",
      value: sigmaInEar.value,
      unit: (
        <Units
          unitArr={kgsmm2UnitArray}
          changeUnit={setSigmaInEarUnit}
          currentUnit={sigmaInEar.unit}
          calculateFn={calculateLashingRing}
        />
      ),
    },
    { id: 2, name: "Запас прочности в ушке", value: earFS, unit: "", color: true },
    {
      id: 3,
      name: "Напряжения смятия материала ушка",
      value: sigmaSm.value,
      unit: (
        <Units
          unitArr={kgsmm2UnitArray}
          changeUnit={setSigmaSmUnit}
          currentUnit={sigmaSm.unit}
          calculateFn={calculateLashingRing}
        />
      ),
    },
    { id: 4, name: "Запас прочности по смятию ушка", value: earFSSM, unit: "", color: true },
    {
      id: 5,
      name: "Напряжения среза в стержне болта",
      value: tauInBolt.value,
      unit: (
        <Units
          unitArr={kgsmm2UnitArray}
          changeUnit={setTauInBoltUnit}
          currentUnit={tauInBolt.unit}
          calculateFn={calculateLashingRing}
        />
      ),
    },
    { id: 6, name: "Запас прочности в стержне болта", value: boltFS, unit: "", color: true },
  ];

  return <LashingRing results={results} paramsArray={paramsArray} calculate={calculate} />;
};

export default LashingRingContainer;
