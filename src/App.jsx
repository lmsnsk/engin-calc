import { useState } from "react";
import stl from "./App.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Header/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import StartPage from "./components/StartPage/StartPage";

function App() {
  const [startPegeVisible, setStartPegeVisible] = useState(true);

  return (
    <div>
      <Header />
      {startPegeVisible ? (
        <StartPage setValue={setStartPegeVisible} />
      ) : (
        <div className={stl.wrapper}>
          <div className={stl.hidebar}>
            <Sidebar />
          </div>
          <div className={stl.content}>
            <MainContent />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
