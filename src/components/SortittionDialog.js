import React from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import SortitionItem from "./SortitionItem";


export default class SortittionDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <Modal isOpen={this.props.open} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Sortition List</ModalHeader>
                <ModalBody>
                    {this.props.sortitionList &&
                    this.props.sortitionList.map(item => <SortitionItem sortitionItem={item}/>
                    )}
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
        this.props.toggle();
    }
}