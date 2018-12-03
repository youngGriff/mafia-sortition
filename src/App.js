import React, {Component} from 'react';
import './App.css';
import Manual from "./containers/manual";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Switch} from "react-router";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";

const App = () => {

    return <Router>
        <Switch>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route path='/' exact component={Manual}/>
            <Route/>
        </Switch>
    </Router>

}

export default App;
