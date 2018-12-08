import React from 'react';
import {Button, FormGroup, Input, InputGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation';


export default class RoleDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        const role = this.props.role || {count: 1, name: '', description: ''};
        this.state = {
            ...role
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };


    render() {
        return (
            <Modal isOpen={this.props.open} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}> Role</ModalHeader>
                <AvForm onValidSubmit={this.handleSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="nickname">Name</Label>
                            <AvField
                                value={this.state.name}
                                onChange={this.handleChange}
                                required type="text" name="name" id="name" placeholder="Type  name here..."/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <AvField value={this.state.description}
                                     onChange={this.handleChange}
                                     required type="text" name="description" id="description"
                                     placeholder="Type description here..."/>
                        </FormGroup>
                        <InputGroup>
                            <AvField placeholder="Amount" type="number" name='count' min={1} value={this.state.count}
                                     onChange={this.handleChange}
                                     required
                                     step="1"/>
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success">Submit</Button>
                        <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log({...this.state});
        this.props.handleSubmit({...this.state});
        this.props.toggle();
    }

}