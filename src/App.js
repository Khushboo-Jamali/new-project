// import logo from "./logo.svg";
import "./App.css";
import { FuncComponent } from "./FuncComponent";
import ClassComonent from "./ClassComponent";
import JSX from "./JSX";
import ClickEvent from "./ClickEvent";
import StateInFunctionalComponent from "./StateInFunctionalComponent";
import StateInClassComponent from "./StateInClassComponent";

function App() {
  return (
    <>
      <h1>First App</h1>
      <FuncComponent />
      <ClassComonent />

      <JSX />
      <ClickEvent />
      <StateInFunctionalComponent />
      <StateInClassComponent />
      {/* <FuncComponent />
      <FuncComponent />
      <FuncComponent /> */}
    </>
  );
}

export default App;
