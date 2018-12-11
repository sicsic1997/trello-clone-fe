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
        
        // Create team
        let team = (await axios.post('/api/team', {team: object})).data;
        console.log(team)

        // Map user to team
        let currentUser = JSON.parse(localStorage['_user']);
        let userTeamParam = {
            userId: currentUser._id,
            teamId: team._id,
            userRole: "OWNER"
        }
        let userTeam = (await axios.post('/api/userTeam', {userTeam: userTeamParam})).data; 
        console.log(userTeam);

        this.setState({userTeamList: [userTeam]});
        this.setState({team: team});
        this.setState({componentState: "view"})
    }

    componentWillMount = async() => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ';
        axios.defaults.headers.common['Authorization'] += localStorage.getItem("token");

        let componentState;
        let team;
        console.log(this.props);
        if (this.props.match.params.teamId === undefined){
            componentState = "create";
        } else {
            componentState = this.props.match.params.mode;
        }

        this.setState({
            componentState:componentState,
        })

    }

    render = () => {
      
        console.log("@");
        return <TeamDetails 
            userTeamList={this.state.userTeamList}
            team={this.state.team}
            componentState={this.state.componentState} 
            onClickCreate={this.onClickCreate}/>;
        }

}

export default TeamDetailsController;