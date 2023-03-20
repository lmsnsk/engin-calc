import { useSelector } from "react-redux";
import { setLoad, setMatLimit } from "../../../redux/boltGroupSlise";
import InputForm from "../../Input/InputForm";
import stl from "./../MainContent.module.css";

const BoltGroup = () => {
  const load = useSelector((state) => state.plateCollapse.load);
  const matLimit = useSelector((state) => state.plateCollapse.matLimit);
  const thickness = useSelector((state) => state.plateCollapse.thickness);
  const diam = useSelector((state) => state.plateCollapse.diam);
  const quantity = useSelector((state) => state.plateCollapse.quantity);
  return (
    <div className={stl.wrapper}>
      <h1>Смятие пластины</h1>
      <InputForm name="Нагрузка" value={load} unit="кгс" setValue={setLoad} calculateFn={} />
      <InputForm
        name="Предел прочности материала"
        value={matLimit}
        unit="кгс/мм2"
        setValue={setMatLimit}
        calculateFn={}
      />
    </div>
  );
};

export default BoltGroup;
