import React, {Component} from 'react';
import {Button, Container, FormGroup, Label} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import connect from "react-redux/es/connect/connect";
import {register} from "../../helpers/auth";

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            name: '',
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
                <h2 className='py-3'>Register</h2>
                <AvForm onSubmitValid={this.handleSubmit}>
                    <FormGroup>
                        <Label>Nickname</Label>
                        <AvField
                            autoFocus
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
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
                            color='success'
                            type="submit"
                        >
                            Register
                        </Button>
                    </div>
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
        authError: state.auth.authError,
        auth: state.firebase.auth

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);