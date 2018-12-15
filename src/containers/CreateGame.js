import {connect} from "react-redux";
import React from "react";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {createNewGame} from "../helpers/game";
import {Redirect} from "react-router";
import {DASHBOARD} from "../helpers/routesConstants";
import {Button, Container, FormGroup, Label} from "reactstrap";

class CreateGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameCreated: false,
            name: '',
            description: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(e) {
        const {name, description} = this.state;
        e.preventDefault();

        this.props.createGame({name, description}).then(() => {
            this.setState({
                gameCreated: true
            })
        });
    }

    render() {
        if (this.state.gameCreated)
            return (<Redirect to={DASHBOARD}/>);
        return (
            <Container>
                <h2 className='py-3'>Create new Game</h2>
                <AvForm onValidSubmit={this.handleSubmit}>

                    <FormGroup controlId="name">
                        <Label>Name</Label>
                        <AvField
                            autoFocus
                            type="text"
                            name="name"
                            value={this.state.name}
                            required
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <Label>Description and common rules</Label>
                        <AvField
                            value={this.state.password}
                            name="description"
                            onChange={this.handleChange}

                            type="text"
                        />
                    </FormGroup>
                    <div className='d-flex '>
                        <Button
                            className='mx-auto'
                            size="lg"
                            type="submit"
                            color='success'

                        >
                            Create
                        </Button>
                    </div>
                </AvForm>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGame: (gameData) => createNewGame(gameData)

    }
}

export default connect(null, mapDispatchToProps)(CreateGame);