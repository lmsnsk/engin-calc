import { Route, Routes } from "react-router-dom";
import Beams from "./Beams/Beams";
import LashingRing from "./LashingRing/LashingRing";

const MainContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/LashingRing" element={<LashingRing />} />
        <Route path="/Beams" element={<Beams />} />
      </Routes>
    </div>
  );
};

export default MainContent;
