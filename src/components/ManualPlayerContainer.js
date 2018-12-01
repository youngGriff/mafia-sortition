import React, {Fragment} from 'react';
import AddPlayerDialog from "./AddPlayerDialog";
import PlayerList from "./PlayerList";
import {Button} from "reactstrap";

class ManualPlayerContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <Fragment>
                <AddPlayerDialog open={this.state.modal} toggle={this.toggle}
                                 handleAdd={this.props.addPlayer}/>

                <Button size='lg' onClick={this.toggle} className='mt-5' style={{margin: 'auto'}} color="success">Add
                    new Player</Button>
                <div className='mt-3' >Total players: {this.props.players.length}</div>
                <PlayerList removePlayer={this.props.removePlayer} players={this.props.players}/>
            </Fragment>);
    }
}


export default ManualPlayerContainer;
