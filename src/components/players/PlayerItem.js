import React from 'react';
import {Button, ListGroupItem} from "reactstrap";


const PlayerItem = ({player, removePlayer}) => {
    const handleRemove = () => {
        removePlayer(player.id);
    };

    return (
        <ListGroupItem className=' my-2 mx-auto h4 d-flex justify-content-between'>
            {player.fullName()} <Button color='link' onClick={handleRemove}> <i
            className="fas text-danger  fa-trash-alt "/></Button></ListGroupItem>);
};

export default PlayerItem;
