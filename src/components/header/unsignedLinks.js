import React from 'react';

import {NavLink} from "react-router-dom";
import {LOGIN, REGISTER,} from "../../helpers/routesConstants";
import {Nav, NavItem} from "reactstrap";

const UnSignedLinks = () => {
    return (
        <Nav className='ml-auto' navbar>
            <NavItem>
                <NavLink to={LOGIN} className='nav-link'>Login</NavLink>

            </NavItem>
            <NavItem>
                <NavLink to={REGISTER} className='nav-link'>Register</NavLink>
            </NavItem>
        </Nav>
    );
};

export default UnSignedLinks;
