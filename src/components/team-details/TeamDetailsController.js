import React from 'react'
import axios from'axios'
import TeamDetails from './TeamDetails' 

class TeamDetailsController extends React.Component {

    constructor(props) {
        super(props);

        this.state = props.location.state;
        console.log(this.state);
    }

    onClickCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object);
        this.setState({ componentState:"view", id: undefined});
        this.render();
    }

    render() {
        console.log(this.state);
        return <TeamDetails state={this.state}/>;
    }

}

export default TeamDetailsController;