import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigList from "./PigList";

function App() {
  return (
    <div className="App">
      <Nav />
      <PigList pigs={hogs} />
    </div>
  );
}

export default App;
//test
//success
