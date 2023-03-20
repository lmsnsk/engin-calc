import stl from "./App.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Header/Sidebar";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div>
      <Header />
      <div className={stl.wrapper}>
        <div className={stl.hidebar}>
          <Sidebar />
        </div>
        <div className={stl.content}>
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
