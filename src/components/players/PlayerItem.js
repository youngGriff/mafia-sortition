import React from 'react';
import {Button, ListGroupItem} from "reactstrap";
import {getFullName} from "../../helpers/utils";


const PlayerItem = ({player, removePlayer, showDelete = true}) => {
    const handleRemove = () => {
        removePlayer(player.id);
    };

    return (
        <ListGroupItem className=' my-2 mx-auto h4 d-flex justify-content-between'>
            {getFullName(player)} {showDelete ? <Button color='link' onClick={handleRemove}> <i
            className="fas text-danger  fa-trash-alt "/></Button> : null}</ListGroupItem>);
};

export default PlayerItem;
