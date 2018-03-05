/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Root
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import configureStore from "../store/configureStore";

import Landing from "./Landing";

import App from "./App";
import Account from "./Account";
import Settings from "./Settings";
import Signup from "./Signup";
import Profile from "./Profile";

import Dashboard from "./Dashboard";
import DemoPage from "./DemoPage";
import Analytics from "./Analytics";

// UI
import Bootstrap from "./Bootstrap";
import Buttons from "./Buttons";
import FontAwesome from "./FontAwesome";
import MaterialIcons from "./MaterialIcons";
import Tables from "./Tables";
import Modals from "./Modals";

// charts

import Charts from "./Charts";

// components

import Components from "./Components";
import Widgets from "./Widgets";

// apps

import Maps from "./Maps";
import Boards from "./Boards";
import Notes from "./Notes";
import Note from "./Note";
import Pins from "./Pins";
import Email from "./Email";

// forms

import Forms from "./Forms";

// docs

import Docs from "./Docs";

// data

import DataForms from "./DataForms";
import DataGrid from "./DataGrid";

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);
var shallowCompare = require("react-addons-shallow-compare");

export default class Root extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute
              component={Dashboard}
              pageName="Dashboard"
              pageDescription="Admin Application Dashboard."
            />

            <Route
              path="/analytics"
              component={Analytics}
              pageName="Analytics"
              pageDescription="Simple analytics example."
            />

            <Route
              path="/demo"
              component={DemoPage}
              pageName="Demo page"
              pageDescription="Demo page"
            />

            <Route
              path="/account"
              component={Account}
              pageName="Account"
              pageDescription="Manage your account."
            />
            <Route
              path="/settings"
              component={Settings}
              pageName="Settings"
              pageDescription="Application Settings."
            />
            <Route path="/signup" component={Signup} pageName="" pageDescription="" />
            <Route
              path="/profile"
              component={Profile}
              pageName="Profile"
              pageDescription="Manage your profile"
            />
            <Route
              path="/charts"
              component={Charts}
              pageName="Charts"
              pageDescription="Chartist Charts"
            />

            <Route
              path="/ui/general"
              component={Bootstrap}
              pageName="General"
              pageDescription="Bootstrap 3"
            />
            <Route
              path="/ui/buttons"
              component={Buttons}
              pageName="Buttons"
              pageDescription="UI Buttons."
            />
            <Route
              path="/ui/modals"
              component={Modals}
              pageName="Modals"
              pageDescription="Modal dialogs"
            />
            <Route
              path="/ui/fontawesome"
              component={FontAwesome}
              pageName="Fontawesome Icons"
              pageDescription="React stateless component."
            />
            <Route
              path="/ui/materialicons"
              component={MaterialIcons}
              pageName="Material Design Icons"
              pageDescription="React stateless component."
            />
            <Route
              path="/ui/tables"
              component={Tables}
              pageName="Tables"
              pageDescription="Simple Tables"
            />

            <Route
              path="/apps/email"
              component={Email}
              pageName="Email"
              pageDescription="react powered email."
            />
            <Route
              path="/apps/maps"
              component={Maps}
              pageName="Maps"
              pageDescription="react powered google maps."
            />
            <Route
              path="/apps/boards"
              component={Boards}
              pageName="Boards"
              pageDescription="Boards page"
            />
            <Route path="/apps/boards/:id" component={Pins} pageName="Pins" pageDescription="" />
            <Route
              path="/apps/notes"
              component={Notes}
              pageName="Notes"
              pageDescription="Notes page"
            />
            <Route
              path="/apps/notes/:id"
              component={Note}
              pageName="Notes"
              pageDescription="A simple notes app."
            />

            <Route
              path="/forms"
              component={Forms}
              pageName="Forms"
              pageDescription="Layout and Elements"
            />
            <Route path="/docs" component={Docs} pageName="Docs" pageDescription="Sample Docs" />
            <Route
              path="/components"
              component={Components}
              pageName="Components"
              pageDescription="Custom React components."
            />
            <Route
              path="/widgets"
              component={Widgets}
              pageName="Widgets"
              pageDescription="React Admin Widgets"
            />

            <Route
              path="/data/forms"
              component={DataForms}
              pageName="Data Forms"
              pageDescription="Data driven forms."
            />
            <Route
              path="/data/grid"
              component={DataGrid}
              pageName="Data Grid"
              pageDescription="Data driven data grid."
            />

          </Route>
          <Route path="/landing" component={Landing} />
        </Router>
      </Provider>
    );
  }
}
