import React, {Component, Fragment} from 'react';
import './App.css';
import Manual from "./containers/manual";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Switch} from "react-router";
import LoginPage from "./containers/auth/LoginPage";
import RegisterPage from "./containers/auth/RegisterPage";
import Header from "./containers/Header";
import {LOGIN, MANUAL, REGISTER} from "./helpers/routesConstants";

const App = () => {

    return <Router>
        <Fragment>
            <Header/>
            <Switch>
                <Route path={LOGIN} component={LoginPage}/>
                <Route path={REGISTER} component={RegisterPage}/>
                <Route path={MANUAL} exact component={Manual}/>
                <Route/>
            </Switch>
        </Fragment>
    </Router>

}

export default App;
