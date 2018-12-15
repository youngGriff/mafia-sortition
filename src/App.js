import React, {Component, Fragment} from 'react';
import './App.css';
import Manual from "./containers/manual";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Switch} from "react-router";
import LoginPage from "./containers/auth/LoginPage";
import RegisterPage from "./containers/auth/RegisterPage";
import Header from "./containers/Header";
import {CREATE_GAME, DASHBOARD, GAME_DETAIL, LOGIN, MANUAL, REGISTER} from "./helpers/routesConstants";
import CreateGame from "./containers/CreateGame";
import Dashboard from "./containers/Dashboard";
import GameDetails from "./containers/GameDetails";

const App = () => {

    return (
        <Router>
            <Fragment>

                <Header/>

                <Switch>
                    <Route path={LOGIN} component={LoginPage}/>
                    <Route path={REGISTER} component={RegisterPage}/>
                    <Route path={MANUAL} exact component={Manual}/>
                    <Route path={CREATE_GAME} exact component={CreateGame}/>
                    <Route path={DASHBOARD} component={Dashboard}/>
                    <Route path={GAME_DETAIL} component={GameDetails}/>
                </Switch>
            </Fragment>

        </Router>
    )

};

export default App;
