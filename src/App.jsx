import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import stl from "./App.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Header/Sidebar";
import Beams from "./components/MainContent/Beams/Beams";
import BoltGroup from "./components/MainContent/BoltGroup/BoltGroup";
import LashingRing from "./components/MainContent/LashingRing/LashingRing";
import WorkInProgress from "./components/MainContent/WorkInProgress/WorkInProgress";
import StartPage from "./components/StartPage/StartPage";

function App() {
  const [startPegeVisible, setStartPegeVisible] = useState(true);

  return (
    <div>
      <Header startPegeVisible={startPegeVisible} />
      {startPegeVisible ? (
        <StartPage setValue={setStartPegeVisible} />
      ) : (
        <div className={stl.wrapper}>
          <div className={stl.hidebar}>
            <Sidebar />
          </div>
          <div className={stl.content}>
            <Routes>
              <Route path="/LashingRing" element={<LashingRing />} />
              <Route path="/Beams" element={<Beams />} />
              <Route path="/BoltGroup" element={<BoltGroup />} />
              <Route path="/WorkInProgress" element={<WorkInProgress />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
