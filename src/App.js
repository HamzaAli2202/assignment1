import React from "react";
import { Hyundai } from "./components/Hyundai";
import { Maruti } from "./components/Maruti";
import "./components/common.css"
function App() {
  return (
    <div className="main">
      <Hyundai />
      <Maruti />
      <Hyundai />
      <Maruti />
      <Maruti />
      
    </div>
  );
}

export default App;
