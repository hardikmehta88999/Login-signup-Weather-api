import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import signup from "./components/signup";
import Wheather from './components/Weather'
import Logout from "./components/Logout";
function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/home"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={signup} />
      <Route path="/weather" component={Wheather} />
      {/* <Route path="/logout" component={Logout} /> */}
      <ProtectedRoute
        exact
        path="/logout"
        component={Logout}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
