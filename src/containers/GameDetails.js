import React, {Component} from 'react';
import {connect} from 'react-redux';

import classnames from 'classnames';
import PlayerList from "../components/players/PlayerList";
import {Button, Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import {cancelRequestForGame, isMyGame, makeRequestForGame, removePlayer} from "../helpers/game";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import firebase from "../firebase/firebaseConfig";
import {getUid, getUidOrEmptyString} from "../helpers/auth";
import {checkSortitionEnabled} from "../helpers/utils";

class GameDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',

        };
        this.toggle = this.toggle.bind(this);
        this.getActionButton = this.getActionButton.bind(this);
        this.getRequestButton = this.getRequestButton.bind(this);
        this.makeRequest = this.makeRequest.bind(this);
        this.cancelRequest = this.cancelRequest.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    getActionButton() {
        console.log(this.props.isMyGame);
        const players = this.props.game.players || [];
        const roles = this.props.game.roles || [];

        if (this.props.isMyGame) {
            return <NavItem className=' ml-auto'>
                <Button
                    disabled={!checkSortitionEnabled(players, roles)}
                    color='primary'>Make
                    Sortition</Button>
            </NavItem>
        } else {
            return this.getRequestButton();
        }
    }

    render() {
        const {game} = this.props;
        return (
            <div>
                <Nav className='px-5 py-2' pills tabs>

                    <NavItem className='d-inline-block'>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            Players
                        </NavLink>
                    </NavItem>
                    <NavItem className='d-inline-block'>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            Roles
                        </NavLink>
                    </NavItem>
                    {
                        this.getActionButton()
                    }


                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <div className='mt-3 mx-auto'>Total players:</div>
                        <PlayerList removePlayer={this.props.removePlayer} players={[]}/>-
                    </TabPane>
                    <TabPane tabId="2">
                        w
                    </TabPane>
                </TabContent>
            </div>
        );
    }

    getRequestButton() {
        const players = this.props.game.players;
        console.log('getRequestButton', this.props.game);

        console.log('getRequestButton', players);
        if (players && this.findPlayer(getUid())) {
            return (<NavItem className=' ml-auto'>
                <Button color='primary' onClick={this.cancelRequest}>Cancel Request</Button>
            </NavItem>)
        } else {
            return <NavItem className=' ml-auto'>
                <Button color='primary' onClick={this.makeRequest}>Make Request</Button>
            </NavItem>
        }
    }

    makeRequest() {
        makeRequestForGame(this.props.game);
    }

    cancelRequest() {
        cancelRequestForGame(this.props.game);
    }

    findPlayer(uid) {
        const n = this.props.game.players.filter(item => {
            return item === uid
        }).length;
        console.log('find Player ', n);
        return n > 0;
    }
}


function mapStateToProps(state, ownProps) {
    const {id} = ownProps.match.params;
    const games = (state.firestore.ordered.games || []).filter(item => {
        return item.id === id
    });
    const game = games[0] || {};
    return {
        game,
        isMyGame: isMyGame(game)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removePlayer: (player) => {
            return removePlayer(player)
        }
    }
}

export default compose(
    firestoreConnect([{
        collection: 'games',
        //  where: ['author', '==', getUidOrEmptyString()]
    },

    ])
    , connect(
        mapStateToProps, mapDispatchToProps
    ))(GameDetails);
