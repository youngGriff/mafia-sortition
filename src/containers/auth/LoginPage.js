import React, {Component} from 'react';
import {Button, Container, FormGroup, Label} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {connect} from "react-redux";
import {signIn} from "../../helpers/auth";
import {Redirect} from "react-router";
import {MANUAL} from "../../helpers/routesConstants";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state);
    }

    render() {
        const {auth} = this.props;
        if (auth.uid)
            return <Redirect to={MANUAL}/>
        return (
            <Container>
                <h2 className='py-3'>Login</h2>
                <AvForm onValidSubmit={this.handleSubmit}>

                    <FormGroup controlId="email">
                        <Label>Email</Label>
                        <AvField
                            autoFocus
                            type="email"
                            required
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <Label>Password</Label>
                        <AvField
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <div className='d-flex '>
                        <Button
                            className='mx-auto'
                            size="lg"
                            type="submit"
                            color='success'

                        >
                            Login
                        </Button>
                    </div>
                </AvForm>
            </Container>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        login: (creds) => signIn(creds)
    }
}

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);