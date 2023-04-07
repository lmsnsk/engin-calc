export const meterUnitArray = [
  { text: "мм", factor: 1 },
  { text: "см", factor: 10 },
  { text: "м", factor: 1000 },
];

export const meter2UnitArray = [
  { text: "мм2", factor: 1 },
  { text: "см2", factor: 100 },
];

export const meter3UnitArray = [
  { text: "мм3", factor: 1 },
  { text: "см3", factor: 1000 },
];

export const meter4UnitArray = [
  { text: "мм4", factor: 1 },
  { text: "см4", factor: 1000 },
];

export const kgsUnitArray = [
  { text: "кгс", factor: 1 },
  { text: "тс", factor: 1000 },
  { text: "Н", factor: 1 / 9.81 },
  { text: "кН", factor: 1000 / 9.81 },
];

export const nmmUnitArray = [
  { text: "Н/мм", factor: 1 },
  { text: "кгс/мм", factor: 9.81 },
];

export const kgsmUnitArray = [
  { text: "кгсм", factor: 1 },
  { text: "Нм", factor: 1 / 9.81 },
];

export const kgUnitArray = [
  { text: "кг", factor: 1 },
  { text: "г", factor: 0.001 },
];

export const kgsmm2UnitArray = [
  { text: "кгсмм2", factor: 1 },
  { text: "МПа", factor: 1 / 9.81 },
];

export const gpaUnitArray = [
  { text: "ГПа", factor: 1 },
  { text: "кгсмм2", factor: 1 / 98.1 },
];

export const kgm3UnitArray = [
  { text: "кгм3", factor: 1 },
  { text: "гсм3", factor: 1000 },
];

export const unitText = (text) => {
  switch (text) {
    case "кгсмм2":
      return (
        <>
          кгс/мм<sup>2</sup>
        </>
      );
    case "мм2":
      return (
        <>
          мм<sup>2</sup>
        </>
      );
    case "cм2":
      return (
        <>
          cм<sup>2</sup>
        </>
      );
    case "мм3":
      return (
        <>
          мм<sup>3</sup>
        </>
      );
    case "см3":
      return (
        <>
          см<sup>3</sup>
        </>
      );
    case "мм4":
      return (
        <>
          мм<sup>4</sup>
        </>
      );
    case "см4":
      return (
        <>
          см<sup>4</sup>
        </>
      );
    case "кгм3":
      return (
        <>
          кг/м<sup>3</sup>
        </>
      );
    case "гсм3":
      return (
        <>
          г/см<sup>3</sup>
        </>
      );
    case "кгсм":
      return <>кгс&middot;м</>;
    case "Нм":
      return <>Н&middot;м</>;
    default:
      return text;
  }
};
