import React from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


export default class AddPlayerDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <Modal isOpen={this.props.open} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Add new Player</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="name">First Name</Label>
                        <Input innerRef={node => {
                            this.firstName = node
                        }} type="text" name="firstName" id="firstName" placeholder="Type first name here..."/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Last Name</Label>
                        <Input innerRef={node => {
                            this.lastName = node
                        }} type="text" name="lastName" id="lastName" placeholder="Type last name here..."/>
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.handleSubmit}>Add</Button>
                    <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleAdd(this.firstName.value, this.lastName.value);
        this.props.toggle();
    }
}