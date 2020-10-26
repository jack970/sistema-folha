import React from "react";
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import Error404 from '../pages/Error404'
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
import Painel from "../pages/Painel";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => 
      isAuthenticated() ? (
        <Redirect to="/painel"/> 
      ) : (
        <Login />
      )
        }
      /> 
      <Route path="/cadastro" component={Cadastro}/>
      <PrivateRoute path="/painel" component={Painel}/>
      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;