import React from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  const HeaderPath = () =>
    useRoutes([
      { path: "/", element: <Header /> },
      { path: "/checkout", element: <Header /> },
    ]);
  return (
    //BEM
    <BrowserRouter>
      <div className="App">
        <HeaderPath />
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/checkout" element={<Checkout />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
