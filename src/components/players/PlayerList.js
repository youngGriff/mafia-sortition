import React, {PureComponent} from 'react';
import PlayerItem from "./PlayerItem";


class PlayerList extends PureComponent {

    render() {
        const {players,showDelete = true} = this.props;
        return (
            <div className=' '>
                {players && players.map(player => {
                    return <PlayerItem showDelete={showDelete} removePlayer={this.props.removePlayer} player={player}/>
                })}
            </div>
        );
    }
}


export default PlayerList;