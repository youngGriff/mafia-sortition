import React, {Fragment} from 'react';


import {RoleItem} from "./RoleItem";

class RoleList extends React.Component {

    render() {
        const {roles, ...others} = this.props;
        return (
            <Fragment>
                {roles.map(role => {
                    return <RoleItem role={role} {...others}/>
                })
                }
            </Fragment>

        );
    }
}


export default RoleList;