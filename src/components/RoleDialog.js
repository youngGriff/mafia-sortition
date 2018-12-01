import React from 'react';
import {Button, FormGroup, Input, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


export default class RoleDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            amount: 1
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };


    render() {
        return (
            <Modal isOpen={this.props.open} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Add a new Role</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input innerRef={node => {
                            this.name = node
                        }} type="text" name="name" id="name" placeholder="Type  name here..."/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="desc">Description</Label>
                        <Input innerRef={node => {
                            this.desc = node
                        }} type="text" name="desc" id="desc" placeholder="Type description here..."/>
                    </FormGroup>
                    <InputGroup>
                        <Input placeholder="Amount" type="number" name='amount' min={1} value={this.state.amount}
                               onChange={this.handleChange}
                               step="1"/>
                    </InputGroup>
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
        this.props.handleAdd(this.name.value, this.desc.value, this.state.amount);
        this.props.toggle();
    }

}