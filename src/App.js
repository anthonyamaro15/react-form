import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
