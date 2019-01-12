import React from 'react'
import axios from'axios'
import TeamEdit from './TeamEdit' 

class TeamEditContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            team: {}
        }
    }

    onClickSave = async(e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = 'Bearer ';
        axios.defaults.headers.common['Authorization'] += localStorage.getItem("token");

        let formData = new FormData(e.target);
        let object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        
        // Update team
        let teamId = this.state.team._id;
        console.log(teamId);
        await axios.put('/api/team/?id=' + teamId, {newTeam: object});

        this.props.history.push('/teams');
    }

    componentDidMount = async () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ';
        axios.defaults.headers.common['Authorization'] += localStorage.getItem("token");

        let teamId = this.props.match.params.teamId;
        let team = (await axios.get('/api/team/?id=' + teamId)).data;

        this.setState({team: team});
    }

    render() {
        return <TeamEdit 
            onClickSave={this.onClickSave}
            team={this.state.team} />;
    }

}

export default TeamEditContainer;