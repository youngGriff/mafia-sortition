import React, {Component} from 'react';
import {connect} from 'react-redux';
import {checkSortitionEnabled, countOfPlayersWithRole, createPlayer, createRole, makeSortition} from "../helpers/utils";
import {addPlayer, removePlayer} from "../store/acrions/players";
import ManualPlayerContainer from "../components/players/ManualPlayerContainer";
import ManualRoleContainer from "../components/roles/ManualRoleController";
import {
    Button,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";
import classnames from 'classnames';
import {
    addRole,

    finishEditingRole,
    hasEditedRole,
    removeRole,
    startEditingRole
} from "../store/acrions/roles";
import SortitionDialog from "../components/SortittionDialog";

class Manual extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            sortitionList: [],
            showSortition: false
        };
        this.toggle = this.toggle.bind(this);
        this.checkSortitionPossible = this.checkSortitionPossible.bind(this);
        this.makeSortition = this.makeSortition.bind(this);
        this.hideSortitionDialog = this.hideSortitionDialog.bind(this);
    }

    hideSortitionDialog() {
        this.setState({
            showSortition: false
        });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    checkSortitionPossible() {
        const {players, roles} = this.props;
        return checkSortitionEnabled(players,roles.roles)
    }

    makeSortition() {
        const {players, roles} = this.props;

        this.setState({
            showSortition: true,
            sortitionList: makeSortition(players, roles.roles)
        });
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
                    <NavItem className=' ml-auto'>
                        <Button disabled={!this.checkSortitionPossible()} onClick={this.makeSortition}
                                color='primary'>Make
                            Sortition</Button>
                    </NavItem>
                </Nav>

                <SortitionDialog
                    open={this.state.showSortition}
                    sortitionList={this.state.sortitionList}
                    toggle={this.hideSortitionDialog}/>
                <div className='container  d-flex flex-column'>

                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <ManualPlayerContainer addPlayer={this.props.addPlayer}
                                                   removePlayer={this.props.removePlayer}
                                                   players={this.props.players}/>
                        </TabPane>
                        <TabPane tabId="2">
                            <ManualRoleContainer
                                addRole={this.props.addRole}
                                removeRole={this.props.removeRole}

                                startEditingRole={this.props.startEditingRole}
                                hasEditedRole={this.props.hasEditedRole}
                                editingRole={this.props.roles.editingRole}
                                isEditingRole={this.props.roles.isEditing}
                                finishEditingRole={this.props.finishEditingRole}
                                roles={this.props.roles.roles}/>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {players: state.players, roles: state.roles,};
}

function mapDispatchToProps(dispatch) {
    return {
        addPlayer: (firstName, lastName) => {
            const player = createPlayer(firstName, lastName);
            dispatch(addPlayer(player))
        },
        removePlayer: (player) => {
            dispatch(removePlayer(player))
        },
        addRole: (role) => {
            dispatch(addRole(createRole(role.name, role.description, role.count)))
        },
        removeRole: (id) => {
            dispatch(removeRole(id))
        },
        startEditingRole: (role) => {
            dispatch(startEditingRole(role))
        },
        hasEditedRole: (role) => {
            dispatch(hasEditedRole(role))
        },
        finishEditingRole: () => {
            dispatch(finishEditingRole())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Manual);
