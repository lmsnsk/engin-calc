import { Route, Routes } from "react-router-dom";
import Beams from "./Beams/Beams";
import LashingRing from "./LashingRing/LashingRing";
import stl from "./MainContent.module.css";

const MainContent = (props) => {
  return (
    <div>
      <Routes>
        <Route
          path="/LashingRing"
          element={
            <div className={stl.content}>
              <LashingRing state={props.store.getState().lashingRing} />
            </div>
          }
        />
        <Route
          path="/Beams"
          element={
            <div className={stl.content}>
              <Beams />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default MainContent;
