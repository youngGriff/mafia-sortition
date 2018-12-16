import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Collapse, Container, Navbar, NavbarBrand, NavbarToggler} from "reactstrap";
import {Link, NavLink} from "react-router-dom";
import UnSignedLinks from "../components/header/unsignedLinks";
import SignedLinks from "../components/header/SignedLinks";
import {MANUAL} from "../helpers/routesConstants";

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {auth} = this.props;
        return (
            <Navbar color='dark' dark expand='md' >
                <Container>
                    <NavbarBrand ><Link className='text-white' to={MANUAL}>Mafia</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {auth.uid ? <SignedLinks/> : <UnSignedLinks/>}
                    </Collapse>
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
    mapStateToProps, null, null, {pure: false}
)(Header);
