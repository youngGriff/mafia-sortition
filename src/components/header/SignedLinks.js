import React from 'react';
import {Nav, NavItem, NavLink as BootstrapLink} from "reactstrap";
import {NavLink} from "react-router-dom";
import {signOut} from "../../helpers/auth";
import {MANUAL} from "../../helpers/routesConstants";

const SignedLinks = () => {
    return (
        <Nav>
            <NavItem>
                <BootstrapLink>
                    <NavLink to={MANUAL}>Create new Game</NavLink>
                </BootstrapLink>
            </NavItem>
            <NavItem>
                <BootstrapLink>
                    <NavLink to={MANUAL}>Dashboard</NavLink>
                </BootstrapLink>
            </NavItem>
            <NavItem>
                <BootstrapLink>
                    <NavLink onClick={signOut} to='/'>Log out</NavLink>
                </BootstrapLink>
            </NavItem>

        </Nav>
    );
};

export default SignedLinks;
