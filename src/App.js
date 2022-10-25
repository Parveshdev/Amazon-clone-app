import React from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
