import { Route, Routes } from "react-router-dom";
import Beams from "./Beams/Beams";
import LashingRing from "./LashingRing/LashingRing";

const MainContent = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/LashingRing" element={<LashingRing state={props.store.getState().lashingRing} />} />
        <Route path="/Beams" element={<Beams />} />
      </Routes>
    </div>
  );
};

export default MainContent;
