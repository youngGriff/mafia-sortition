import React from 'react'
import {Button, Card, CardBody, CardTitle, CardHeader, Collapse} from "reactstrap";
import classnames from 'classnames';
import styles from './roleItem.css';

export class RoleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
        this.toggle = this.toggle.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    toggle() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        const {role} = this.props;
        return (
            <Card className='mt-3'>
                <CardHeader>
                    <CardTitle className='d-flex flex-wrap justify-content-between '>{role.name}
                        <span onClick={this.toggle} className="float-right"><i className={classnames({
                            'item__chevron--collapsed': this.state.collapse,
                            'fas fa-chevron-up': true,
                            'item__chevron': true
                        })}/></span>
                    </CardTitle>
                </CardHeader>
                <Collapse isOpen={this.state.collapse}>
                    <CardBody>
                        <div className=''><span>Count: {role.count}</span>
                            <span onClick={this.handleRemove}
                                  className="float-right">
                            <i
                                className="fas fa-trash-alt text-danger my-auto mr-2 "/></span>
                            <span onClick={this.handleEdit}
                                  className="float-right">
                            <i
                                className="fas fa-edit text-success my-auto mr-2"/></span>
                        </div>

                        {role.description}

                        <br/>
                    </CardBody>
                </Collapse>
            </Card>

        )
            ;
    }

    handleEdit() {
        this.props.startEditingRole(this.props.role)
    }

    handleRemove() {

        this.props.removeRole(this.props.role.id);
    }
}
