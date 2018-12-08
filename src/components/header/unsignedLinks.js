import React from 'react';

import {NavLink} from "react-router-dom";
import {LOGIN, REGISTER,} from "../../helpers/routesConstants";
import {Nav, NavItem, NavLink as BootstrapLink} from "reactstrap";

const UnSignedLinks = () => {
    return (
        <Nav>
            <NavItem>
                <BootstrapLink>
                    <NavLink to={LOGIN}>Login</NavLink>
                </BootstrapLink>

            </NavItem>
            <NavItem>
                <BootstrapLink>
                    <NavLink to={REGISTER}>Register</NavLink>
                </BootstrapLink>
            </NavItem>
        </Nav>
    );
};

export default UnSignedLinks;
