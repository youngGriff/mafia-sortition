import React, {Component} from 'react';
import {Button, Container, FormGroup, Label} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import connect from "react-redux/es/connect/connect";
import {register} from "../../helpers/auth";
import {Redirect} from "react-router";
import {MANUAL} from "../../helpers/routesConstants";

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
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
        this.props.signUp(this.state);
    }

    render() {
        const {auth} = this.props;
        if (auth.uid)
            return <Redirect to={MANUAL}/>
        return (
            <Container>
                <h2 className='py-3'>Register</h2>
                <AvForm onValidSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>First Name</Label>
                        <AvField
                            autoFocus
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <AvField
                            autoFocus
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <AvField
                            autoFocus
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <AvField
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            validate={{
                                minLength: {value: 6, errorMessage: 'Your password must have at least 6 characters'},
                            }}
                        />
                    </FormGroup>
                    <div className='d-flex '>
                        <Button
                            className='mx-auto'
                            size="lg"
                            color='success'
                            type="submit"
                        >
                            Register
                        </Button>
                    </div>
                    <p className='text-danger text-center mt-3'>{this.props.errorMessage}</p>
                </AvForm>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (creds) => dispatch(register(creds))
    }
}

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth,
        errorMessage: state.auth.registerError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);