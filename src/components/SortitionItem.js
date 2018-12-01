import React from "react";
import classnames from 'classnames';
import {Card, CardBody, CardHeader, CardTitle, Collapse} from "reactstrap";

class SortitionItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        const {role, player} = this.props.sortitionItem;
        console.log(this.props);
        return (
            <Card className='mt-3'>
                <CardHeader>
                    <CardTitle className='d-flex flex-wrap justify-content-between '>{player.fullName()} - {role.name}
                        <span onClick={this.toggle} className="float-right"><i className={classnames({
                            'item__chevron--collapsed': this.state.collapse,
                            'fas fa-chevron-up': true,
                            'item__chevron': true
                        })}/></span>
                    </CardTitle>
                </CardHeader>
                <Collapse isOpen={this.state.collapse}>
                    <CardBody>
                        {role.description}
                        <br/>
                    </CardBody>
                </Collapse>

            </Card>

        )
            ;
    }
}


export default SortitionItem;