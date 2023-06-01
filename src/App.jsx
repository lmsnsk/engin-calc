import { Route, Routes, useLocation } from "react-router-dom";

import stl from "./App.module.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Header/Sidebar";
import BoltGroup from "./components/MainContent/BoltGroup/BoltGroup";
import StartPage from "./components/StartPage/StartPage";
import LashingRingContainer from "./components/MainContent/LashingRing/LashingRingContainer";
import BeamsContainer from "./components/MainContent/Beams/BeamsContainer";
import SpringContainer from "./components/MainContent/Spring/SpringContainer";

function App() {
  const location = useLocation();

  return (
    <div>
      <Header />
      {location.pathname === "/" ? (
        <StartPage />
      ) : (
        <div className={stl.wrapper}>
          <div className={stl.hidebar}>
            <Sidebar />
          </div>
          <div className={stl.content}>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/LashingRing" element={<LashingRingContainer />} />
              <Route path="/Beams" element={<BeamsContainer />} />
              <Route path="/BoltGroup" element={<BoltGroup />} />
              <Route path="/Spring" element={<SpringContainer />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
