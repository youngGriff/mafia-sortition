import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';


export default class AddPlayerDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <Modal isOpen={this.props.open} toggle={this.props.toggle}>
                <AvForm onValidSubmit={this.handleSubmit}>
                    <ModalHeader toggle={this.props.toggle}>Add new Player</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name">First Name</Label>
                            <AvField
                                innerRef={node => {
                                    this.firstName = node;
                                }} type="text"
                                required
                                name="firstName" id="firstName" placeholder="Type first name here..."/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Last Name</Label>
                            <AvField innerRef={node => {
                                this.lastName = node;

                            }}
                                     required type="text" name="lastName" id="lastName"
                                     placeholder="Type last name here..."/>
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button type='submit' color="success">Add</Button>
                        <Button color="danger" onClick={(e) => {
                            e.preventDefault();
                            this.props.toggle()
                        }}>Cancel</Button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleAdd(this.firstName.value, this.lastName.value);
        this.props.toggle();
    }
}