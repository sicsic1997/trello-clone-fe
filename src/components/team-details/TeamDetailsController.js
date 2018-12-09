import React from 'react'
import axios from'axios'
import TeamDetails from './TeamDetails' 

class TeamDetailsController extends React.Component {

    constructor(props) {
        super(props);

        this.state = props.location.state;
    }

    render() {
        console.log(this.state);
        return <TeamDetails state={this.state}/>;
    }

}

export default TeamDetailsController;