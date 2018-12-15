import React, {Fragment} from 'react';


import {RoleItem} from "./RoleItem";

class RoleList extends React.Component {

    render() {
        const {roles, ...others} = this.props;
        return (
            <Fragment>
                {roles && roles.map(role => {
                    return <RoleItem key={role.id} role={role} {...others}/>
                })
                }
            </Fragment>

        );
    }
}


export default RoleList;