// import logo from "./logo.svg";
import "./App.css";
import { FuncComponent } from "./FuncComponent";
import ClassComonent from "./ClassComponent";
import JSX from "./JSX";

function App() {
  return (
    <>
      <h1>First App</h1>
      <FuncComponent />
      <ClassComonent />
      <JSX />
      {/* <FuncComponent />
      <FuncComponent />
      <FuncComponent /> */}
    </>
  );
}

export default App;
