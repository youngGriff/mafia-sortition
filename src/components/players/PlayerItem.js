import React from 'react';
import {Button, ListGroupItem} from "reactstrap";

const avatar = {
    padding: '3px',
    color: 'white',
    fontSize: '15px',
    //   backgroundColor: deepPurple[500]

};
const PlayerItem = ({player, removePlayer}) => {
    const handleRemove = () => {
        removePlayer(player);
    };

    return (
        <ListGroupItem style={{maxWidth: '650px'}} className=' my-2 d-flex justify-content-between'>
            {player.fullName()} <Button color={'link'} onClick={handleRemove}> <i
            className="fas text-danger  fa-trash-alt "/></Button></ListGroupItem>);
};

export default PlayerItem;
