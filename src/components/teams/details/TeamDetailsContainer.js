import React from 'react'
import axios from'axios'
import TeamDetails from './TeamDetails' 

class TeamDetailsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            team: {},
            members: [],
            errorMessage: ""
        }
    }

    onClickRemoveUser = async(userId) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ';
        axios.defaults.headers.common['Authorization'] += localStorage.getItem("token");

        let teamId = this.state.team._id;

        await axios.delete('/api/userTeam/?teamId=' + teamId + '&userId=' + userId);

        let result = await this.loadTeamWithMembers();
        
        this.setState({
            team: result.team,
            members: result.members,
            errorMessage:""
        })
    }

    onClickAddUser = async(e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = 'Bearer ';
        axios.defaults.headers.common['Authorization'] += localStorage.getItem("token");

        let formData = new FormData(e.target);
        let object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        let userName = object.userName;

        if(userName == null || userName == "") {
            this.setState({errorMessage: "Field required"})
            return;
        }

        let user = (await axios.get('/api/user-name/?userName=' + userName)).data;

        if(user === null || user === {} || user === "") {
            this.setState({errorMessage: "No user with this username found"});
            return;
        }
        
        axios.defaults.headers.common['Authorization'] = 'Bearer ';
        axios.defaults.headers.common['Authorization'] += localStorage.getItem("token");


        let userTeamParam = {
            userId: user._id,
            teamId: this.state.team._id,
            userRole: "MEMBER"
        }
        await axios.post('/api/userTeam', {userTeam: userTeamParam}); 

        let result = await this.loadTeamWithMembers();
        
        this.setState({
            team: result.team,
            members: result.members,
            errorMessage:""
        })

    }

    componentDidMount = async () => {
        
        let result = await this.loadTeamWithMembers();
        
        this.setState({
            team: result.team,
            members: result.members  
        })
    }

    loadTeamWithMembers = async () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ';
        axios.defaults.headers.common['Authorization'] += localStorage.getItem("token");

        let teamId = this.props.match.params.teamId;
        let result = (await axios.get('/api/userTeam/?id=' + teamId)).data;
        return result;
    }

    render() {
        console.log("Reloading");
        return <TeamDetails
            onClickAddUser={this.onClickAddUser}
            onClickRemoveUser={this.onClickRemoveUser}
            team={this.state.team}
            members={this.state.members}
            errorMessage={this.state.errorMessage} />;
    }

}

export default TeamDetailsContainer;