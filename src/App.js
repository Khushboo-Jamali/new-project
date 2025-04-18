// import logo from "./logo.svg";
import "./App.css";
import { FuncComponent } from "./FuncComponent";
import ClassComonent from "./ClassComponent";
import JSX from "./JSX";
import ClickEvent from "./ClickEvent";
import StateInFunctionalComponent from "./StateInFunctionalComponent";
import StateInClassComponent from "./StateInClassComponent";
import PropsInFunctionalComponent from "./PropsInFunctionalComponent";
import { useState } from "react";

function App() {
  const [realName, setName] = useState("Kim");
  return (
    <>
      <h1>First App</h1>
      <FuncComponent />
      <ClassComonent />
      <JSX />
      <ClickEvent />
      <StateInFunctionalComponent />
      <StateInClassComponent />
      <PropsInFunctionalComponent name={realName} />
      <button onClick={() => setName("Hussain Ali")}>Click Me</button>
      {/* <PropsInFunctionalComponent
        name={"Kim"}
        email={"kimjim@gmail.com"}
        info={{ salary: 80000, mobileNum: "039489584854" }}
      />
      <PropsInFunctionalComponent
        name={"Kinza"}
        email={"kinza@gmail.com"}
        info={{ salary: 20000, mobileNum: "03008576854" }}
      /> */}

      {/* <FuncComponent />
      <FuncComponent />
      <FuncComponent /> */}
    </>
  );
}

export default App;
