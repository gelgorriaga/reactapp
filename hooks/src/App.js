import React, { useState } from "react";
import IncrementerClass from "./IncrementerClass";
import IncrementerHook from "./IncrementerHook";
import Toggler from "./Toggler";
import HookForm from "./HookForm";
import SWMovies from "./SWMovies";
import "./App.css";

function App() {
const [count, setCount]=useState()

  return (
    <div className="App">
      {/* <IncrementerClass />
      <IncrementerHook />
      <Toggler />
      <HookForm /> */}
      <SWMovies />
    </div>
  );
}

export default App;
