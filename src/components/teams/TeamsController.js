import React from 'react'
import axios from'axios'
import Teams from './Teams' 

class TeamsController extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Teams/>;
    }

}

export default TeamsController;