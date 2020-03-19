import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
