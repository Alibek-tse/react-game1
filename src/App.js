import React, { useState } from "react";
import Section from "./Component/Section";
import Player from "./Component/Player";
import "./App.css";
import Footer from "./Component/Footer";

function App() {
 
  return (
    <div className="app">
      <Player></Player>
      <Section ></Section>
      <Footer></Footer>
    </div>
  );
}

export default App;
