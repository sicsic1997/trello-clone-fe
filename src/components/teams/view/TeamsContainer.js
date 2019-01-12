import React from 'react'
import axios from'axios'
import Teams from './Teams' 

class TeamsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamList: []
        }
    }

    onClickCreate = (e) => {
        this.props.history.push('/team/create');
    }

    onClickEdit = (id) => {
        this.props.history.push('/team/edit/' + id);
    }

    onClickView = (id) => {
        console.log(id);
    }


    componentDidMount = async() => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ';
        axios.defaults.headers.common['Authorization'] += localStorage.getItem("token");

        let teamList = (await axios.get('/api/teams')).data;
        this.setState({teamList: teamList});
    }

    render() {
        return <Teams 
            onClickCreate={this.onClickCreate}
            onClickView={this.onClickView}
            onClickEdit={this.onClickEdit}
            teamList={this.state.teamList} />;
    }

}

export default TeamsContainer;