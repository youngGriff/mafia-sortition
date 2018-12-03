import React, {Component} from 'react';
import {connect} from 'react-redux';
import {countOfPlayersWithRole, createPlayer, createRole, makeSortition} from "../utils";
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
    NavbarBrand, Navbar, Container
} from "reactstrap";
import classnames from 'classnames';
import {addRole, editRole, removeRole} from "../store/acrions/roles";
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
        this.checkSortitionEnabled = this.checkSortitionEnabled.bind(this);
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

    checkSortitionEnabled() {
        const {players, roles} = this.props;
        return players.length >= countOfPlayersWithRole(roles);
    }

    makeSortition() {
        console.log(this.props);
        const {players, roles} = this.props;

        this.setState({
            showSortition: true,
            sortitionList: makeSortition(players, roles)
        });
    }

    render() {

        return (
            <div>
                <Navbar color='dark'>
                    <Container>
                        <NavbarBrand className='text-white'>Mafia</NavbarBrand>
                        <Nav>
                            <NavItem className='ml-auto '>
                                <Button disabled={!this.checkSortitionEnabled()} onClick={this.makeSortition}
                                        color='primary'>Make
                                    Sortition</Button>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
                <Nav pills tabs>
                    <Container>
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
                    </Container>
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
                                editRole={this.props.editRole}
                                roles={this.props.roles}/>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {players: state.players, roles: state.roles};
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
        addRole: (name, descr, amount) => {
            dispatch(addRole(createRole(name, descr, amount)))
        },
        removeRole: (role) => {
            dispatch(removeRole(role))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Manual);
