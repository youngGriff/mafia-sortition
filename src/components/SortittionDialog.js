import React from 'react';
import {Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import SortitionItem from "./SortitionItem";
import {createSortitionString} from "../helpers/utils";


export default class SortittionDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createFileTxt = this.createFileTxt.bind(this);
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
                    <Button color="success" onClick={this.createFileTxt}>Export to TXT</Button>
                    <Button color="success" onClick={this.createFileJson}>Export to JSON</Button>

                    <Button color="success" onClick={this.handleSubmit}>Add</Button>
                    <Button color="danger" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }

    createFileTxt = () => {
        const element = document.createElement("a");
        const file = new Blob([createSortitionString(this.props.sortitionList)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "Sortition.txt";
        element.click();
    };

    createFileJson = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(this.props.sortitionList, null, 2)], {type: 'text/json'});
        element.href = URL.createObjectURL(file);
        element.download = "Sortition.json";
        element.click();
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.toggle();
    }
}