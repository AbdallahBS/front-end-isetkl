
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import Reseau from "views/Reseau/Reseau.js";
import Math from "views/Math/index";
import Algorithme from "views/Algorithme/index";
import Statistics from "views/Statistics/index";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import { Provider } from "react-redux";
import store from "./store";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import {useEffect} from 'react';
import { getHeader } from "actions/header.action";
if(process.env.NODE_ENV ==='production') disableReactDevTools()
window.store = store;
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store} >
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route path="/Reseau" render={(props) => <Reseau {...props} />} />
      <Route path="/Math" render={(props) => <Math {...props} />} />
      <Route path="/Algorithme" render={(props) => <Algorithme {...props} />} />
      <Route path="/Statistics" render={(props) => <Statistics {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>
  </Provider>
);
