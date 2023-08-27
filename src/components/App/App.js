import { useState } from "react";
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import Benefits from "../Benefits/Benefits";
import Heading from "../Heading/Heading";

function App() {
  return (
    <div className="App">
      <div className="App_forMars"></div>
      <Header>
        <NavBar />
      </Header>
      <Benefits>
        <Heading />
      </Benefits>
    </div>
  );
}

export default App;
