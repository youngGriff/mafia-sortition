import React, {Component} from 'react';
import {Button, Container, FormGroup, Label} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {connect} from "react-redux";
import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";
import {startLoading, stopLoading} from "../../store/acrions/loading";
import {signIn} from "../../helpers/auth";

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
    }

    render() {
        return (
            <Container>
                <h2 className='py-3'>Login</h2>
                <AvForm onSubmitValid={this.handleSubmit}>

                    <FormGroup controlId="email">
                        <Label>Email</Label>
                        <AvField
                            autoFocus
                            type="email"
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

const login = (creds) => (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch(startLoading());
    const firebase = getFirebase();
    signIn(firebase, creds)
        .finally(() => dispatch(stopLoading()));
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(login(creds))
    }
}

function mapStateToProps(state) {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);