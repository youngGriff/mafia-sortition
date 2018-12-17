import React, {Fragment} from 'react';
import RoleDialog from "./RoleDialog";
import RoleList from "./RoleList";
import {Button} from "reactstrap";
import {countOfPlayersWithRole} from "../../helpers/utils";

class RoleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.getEditComponents = this.getEditComponents.bind(this);
        this.state = {
            openModal: false,
            openEditing: this.props.isEditingRole
        }
    }


    static defaultProps = {
        showEditComponents: true
    };

    getEditComponents() {
        const {addRole, hasEditedRole, ...others} = this.props;
        return (
            <Fragment>
                {this.state.openModal ?
                    <RoleDialog handleSubmit={addRole} toggle={this.toggle} open={this.state.openModal}/> : null}
                {this.state.openEditing ? <RoleDialog role={this.props.editingRole} handleSubmit={hasEditedRole}
                                                      toggle={this.props.finishEditingRole}
                                                      open={this.state.openEditing}/> : null}
                <Button onClick={this.toggle} className='mt-3' color="danger">Add new Role</Button>
            </Fragment>
        )
    }

    render() {
        const {addRole, hasEditedRole, ...others} = this.props;
        return (
            <div>

                {this.props.showEditComponents ? this.getEditComponents() : null}
                <div className='mt-3'>Total roles: {this.props.roles.length}</div>
                <div className='mt-3'>Count players with roles: {countOfPlayersWithRole(this.props.roles)}</div>

                <RoleList {...others} roles={this.props.roles}/>

            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (this.state.openEditing !== nextProps.isEditingRole) {
            this.setState({
                openEditing: nextProps.isEditingRole
            })
        }
    }

    toggle() {
        this.setState({
            openModal: !this.state.openModal
        })
    }


}


export default RoleContainer;
