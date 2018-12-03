import React from 'react';
import {Button, FormGroup, Input, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';


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
                <AvForm onValidSubmit={this.handleSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <AvField innerRef={node => {
                                this.name = node
                            }}
                                     required type="text" name="name" id="name" placeholder="Type  name here..."/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="desc">Description</Label>
                            <AvField innerRef={node => {
                                this.desc = node
                            }}
                                     required type="text" name="desc" id="desc" placeholder="Type description here..."/>
                        </FormGroup>
                        <InputGroup>
                            <AvField placeholder="Amount" type="number" name='amount' min={1} value={this.state.amount}
                                     onChange={this.handleChange}
                                     required
                                     step="1"/>
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success">Add</Button>
                        <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleAdd(this.name.value, this.desc.value, this.state.amount);
        this.props.toggle();
    }

}