import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {Button, Card, CardBody, CardText, CardTitle, Container} from "reactstrap";
import {NavLink} from "react-router-dom";
import {GET_GAME_DETAIL, MANUAL} from "../helpers/routesConstants";
import {isSignedIn} from "../helpers/auth";
import {Redirect} from "react-router";

class Dashboard extends Component {

    render() {
        if(!isSignedIn()){
            return (<Redirect to={MANUAL}/>);

        }
        const games = this.props.games;
        return (
            <Container className='py-3'>
                {games && games.map((i) => {
                    return <Card>
                        <CardBody>
                            <CardTitle>{i.name}</CardTitle>
                            <CardText>{i.description}</CardText>
                            <NavLink to={GET_GAME_DETAIL(i.id)}> <Button>View</Button></NavLink>
                        </CardBody>
                    </Card>
                })}
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        games: state.firestore.ordered.games
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'games', orderBy: ['name']},

    ])
)(Dashboard);
