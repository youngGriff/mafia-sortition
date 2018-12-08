import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Container, Navbar, NavbarBrand} from "reactstrap";
import {NavLink} from "react-router-dom";
import UnSignedLinks from "../components/header/unsignedLinks";
import SignedLinks from "../components/header/SignedLinks";
import {MANUAL} from "../helpers/routesConstants";

class Header extends Component {
    render() {
        const {auth} = this.props;
        return (
            <Navbar color='dark' dark>
                <Container>
                    <NavbarBrand className='text-white'><NavLink to={MANUAL}>Mafia</NavLink></NavbarBrand>
                    {auth.uid ? <SignedLinks/> : <UnSignedLinks/>}
                </Container>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth

    };
}

export default connect(
    mapStateToProps,
)(Header);
