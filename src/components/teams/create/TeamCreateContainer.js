import React from 'react'
import axios from'axios'
import TeamCreate from './TeamCreate' 

class TeamCreateContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    onClickCreate = async(e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = 'Bearer ';
        axios.defaults.headers.common['Authorization'] += localStorage.getItem("token");

        let formData = new FormData(e.target);
        let object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        
        // Create team
        let team = (await axios.post('/api/team', {team: object})).data;

        // Map user to team
        let currentUser = JSON.parse(localStorage['_user']);
        let userTeamParam = {
            userId: currentUser._id,
            teamId: team._id,
            userRole: "OWNER"
        }
        console.log(userTeamParam)
        await axios.post('/api/userTeam', {userTeam: userTeamParam}); 
        console.log('Done')
        this.props.history.push('/teams');
    }

    render() {
        return <TeamCreate 
            onClickCreate={this.onClickCreate}/>;
    }

}

export default TeamCreateContainer;