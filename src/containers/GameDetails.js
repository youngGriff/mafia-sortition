import React, {Component} from 'react';
import {connect} from 'react-redux';

import classnames from 'classnames';
import PlayerList from "../components/players/PlayerList";
import {Button, Container, Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import {
    addRole,
    cancelRequestForGame,
    editRole,
    isMyGame,
    makeRequestForGame,
    removePlayer,
    removeRole
} from "../helpers/game";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {getUid} from "../helpers/auth";
import {checkSortitionEnabled} from "../helpers/utils";
import ManualRoleContainer from "../components/roles/ManualRoleController";
import {finishEditingRole, hasEditedRole, startEditingRole} from "../store/acrions/roles";

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
                <Container>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <div className='mt-3 mx-auto'>Total players: {this.props.players.length}</div>
                            <PlayerList showDelete={isMyGame(this.props.game)} removePlayer={this.props.removePlayer}
                                        players={this.props.players}/>
                        </TabPane>
                        <TabPane tabId="2">
                            <ManualRoleContainer roles={this.props.roles} startEditingRole={this.props.startEditingRole}
                                                 hasEditedRole={this.props.hasEditedRole}
                                                 editingRole={this.props.rolesController.editingRole}
                                                 addRole={this.props.addRole}
                                                 isEditingRole={this.props.rolesController.isEditing}
                                                 finishEditingRole={this.props.finishEditingRole}
                                                 removeRole={this.props.removeRole}
                                                 showEditComponents={isMyGame(this.props.game)}
                                                 isMyGame={this.props.isMyGame}/>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
        );
    }

    getRequestButton() {
        const players = this.props.game.players;

        if (players && this.isPlaying(getUid())) {
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

    isPlaying(uid) {
        const n = this.props.game.players.filter(item => {
            return item === uid
        }).length;
        return n > 0;
    }
}


function mapStateToProps(state, ownProps) {
    const {id} = ownProps.match.params;
    const games = (state.firestore.ordered.games || []).filter(item => {
        return item.id === id
    });
    const game = games[0] || {};
    const users = state.firestore.ordered.users || [];
    const players = users.filter(user => {
        const isPlaying = game.players.includes(user.id);
        return isPlaying;
    });
    const roles = game.roles || [];
    return {
        game,
        players,
        roles,
        rolesController: state.roles,
        isMyGame: isMyGame(game)
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    const gameId = ownProps.match.params.id;
    return {
        removePlayer: (player) => {
            return removePlayer(player, gameId)
        },
        addRole: (role) => {
            return addRole(role, gameId);
        },
        hasEditedRole: (role) => {
            return editRole(role, gameId)
        },
        startEditingRole: (role) => {
            dispatch(startEditingRole(role))
        },

        finishEditingRole: () => {
            dispatch(finishEditingRole())
        },
        removeRole: (id) => {
            return removeRole(id,gameId);
        }
    }
}

export default compose(
    firestoreConnect([{
        collection: 'games',
    },
        {collection: 'users'}
    ])
    , connect(
        mapStateToProps, mapDispatchToProps
    ))(GameDetails);
