import React from 'react'
import axios from'axios'
import Teams from './Teams' 

class TeamsController extends React.Component {

    constructor(props) {
        super(props);
    }

    onClickCreate = (e) => {
        this.props.history.push('/team-details', {componentState: "create", id: undefined});
    }

    render() {
        return <Teams onClickCreate={this.onClickCreate}/>;
    }

}

export default TeamsController;