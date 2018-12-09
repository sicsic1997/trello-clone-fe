import React from 'react'
import axios from'axios'
import TeamDetails from './TeamDetails' 

class TeamDetailsController extends React.Component {

    constructor(props) {

        super(props);
        

    }

    onClickCreate = async(e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object);
        await axios.post('/api/team', {team: object});

    }

    componentWillMount() {
        localStorage.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZ…cwOX0.OEjPlpqiH4ZutTfauorHQEPrrDZNez97-7z0a3MNdr0";
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token");
        if (this.props.match.params.teamId == undefined){
            this.componentState = "create";
        }
        else {
            this.componentState = "edit";
        }
    }

    render() {
      
        return <TeamDetails componentState={this.componentState} onClickCreate ={this.onClickCreate}/>;

    }

}

export default TeamDetailsController;