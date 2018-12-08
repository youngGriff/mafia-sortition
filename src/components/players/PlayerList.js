import React, {PureComponent} from 'react';
import PlayerItem from "./PlayerItem";


class PlayerList extends PureComponent {

    render() {
        const {players} = this.props;
        return (
            <div className='  '>
                {players.map(player => {
                    return <PlayerItem removePlayer={this.props.removePlayer} player={player}/>
                })}
            </div>
        );
    }
}


export default PlayerList;