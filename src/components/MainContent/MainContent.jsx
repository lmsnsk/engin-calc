import { Route, Routes } from "react-router-dom";
import Beams from "./Beams/Beams";
import BoltGroup from "./BoltGroup/BoltGroup";
import LashingRing from "./LashingRing/LashingRing";
import WorkInProgress from "./WorkInProgress/WorkInProgress";

const MainContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/LashingRing" element={<LashingRing />} />
        <Route path="/Beams" element={<Beams />} />
        <Route path="/BoltGroup" element={<BoltGroup />} />
        <Route path="/WorkInProgress" element={<WorkInProgress />} />
      </Routes>
    </div>
  );
};

export default MainContent;
