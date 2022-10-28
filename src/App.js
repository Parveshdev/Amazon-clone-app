import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        //user logged in
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        //user logged out
      }
    });
  }, []);

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
