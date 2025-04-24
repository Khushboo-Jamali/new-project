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
import PropsInClassComponent from "./PropsInClassComponent";
import { GetInputFieldValue } from "./GetInputFieldValue";

function App() {
  const [realName, setName] = useState("Kim");
  const [firstName, setValueName] = useState("Ali");
  return (
    <>
      <div className="App">
        {/* <h1>First App</h1> */}
        {/* <FuncComponent />
      <ClassComonent /> */}
        {/* <JSX /> */}
        <ClickEvent />
        <StateInFunctionalComponent />
        <StateInClassComponent />
        <PropsInFunctionalComponent name={realName} />
        <button onClick={() => setName("Hussain Ali")}>Click Me</button>

        <PropsInClassComponent name={firstName} />
        <button onClick={() => setValueName("Ali Khan")}>Click me</button>
        <PropsInClassComponent name={"Hamza"} email={"Hamza@gmail.com"} />
        <PropsInClassComponent name={"Ayesha"} email={"Ayesha@gmail.com"} />

        <GetInputFieldValue />

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
      </div>
    </>
  );
}

export default App;
