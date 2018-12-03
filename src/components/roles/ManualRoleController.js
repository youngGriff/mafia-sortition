import React, {Fragment} from 'react';
import RoleDialog from "./RoleDialog";
import RoleList from "./RoleList";
import {Button} from "reactstrap";
import {countOfPlayersWithRole} from "../../utils";

class ManualRoleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            openModal: false,
        }
    }

    render() {
        const {addRole, ...others} = {...this.props};
        return (
            <div>
                <RoleDialog handleAdd={addRole} toggle={this.toggle} open={this.state.openModal}/>
                <Button onClick={this.toggle} className='mt-3' color="danger">Add new Role</Button>

                <div className='mt-3'>Total roles: {this.props.roles.length}</div>
                <div className='mt-3'>Count players with roles: {countOfPlayersWithRole(this.props.roles)}</div>

                <RoleList {...others}/>

            </div>
        );
    }

    toggle() {
        this.setState({
            openModal: !this.state.openModal
        })
    }


}


export default ManualRoleContainer;
