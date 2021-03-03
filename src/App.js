import React from "react";
import Section from "./Component/Section";
// import Player from "./Component/Player";
import "./App.css";
import Footer from "./Component/Footer";
import ButtonScreen from './Component/ButtonScreen'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const handle = useFullScreenHandle();

  

  return (
    <FullScreen handle={handle}>
      <div className="app">
        <ButtonScreen btnScreen={handle.enter}></ButtonScreen>
        {/* <Player></Player> */}
        <Section fullscreen={handle.active}></Section>
        <Footer></Footer>
      </div>
    </FullScreen>
  );
}

export default App;
