import React from "react";
import NavComp from "./layout/NavComp";
import VisualComp from "./components/home/VisualComp";
import SectionComp from "./components/home/SectionComp";

function App(props) {
  return (
    <>
      <NavComp />
      <VisualComp />
      <SectionComp />
    </>
  );
}

export default App;
