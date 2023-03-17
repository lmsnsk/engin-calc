import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

function App(props) {
  return (
    <div>
      <Header />
      <MainContent store={props.store} />
    </div>
  );
}

export default App;
