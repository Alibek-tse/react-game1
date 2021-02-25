import React from "react";
import Section from "./Component/Section";
import Player from "./Component/Player";
import "./App.css";
import { Spring } from "react-spring/renderprops";

function App() {
  return (
    <>
      <Player></Player>
      <Section></Section>
    </>
  );
}

export default App;
