import React from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    //BEM
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
