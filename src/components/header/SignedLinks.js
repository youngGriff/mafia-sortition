import React from 'react';
import {Nav, NavItem} from "reactstrap";
import {signOut} from "../../helpers/auth";
import {CREATE_GAME, DASHBOARD, MANUAL} from "../../helpers/routesConstants";
import {NavLink} from "react-router-dom";

const SignedLinks = () => {
    return (
        <Nav className='ml-auto'  navbar>
            <NavItem>
                <NavLink to={CREATE_GAME} exact className='nav-link'>Create new Game</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={DASHBOARD} className='nav-link' exact>Dashboard</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={signOut} className='nav-link' exact to={MANUAL}>Log out</NavLink>
            </NavItem>

        </Nav>
    );
};

export default SignedLinks;
