import React from 'react'
import Login from './Login'
import axios from 'axios'

class LoginController extends React.Component {

    constructor(props) {
        super(props);
    }

    onLogin = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let object = {};

        formData.forEach(function(value, key){
            object[key] = value;
        });

        axios.defaults.headers.common['Authorization'] = 'Bearer ';
        try {
            let {token, user} = (({data}) => data)(await axios.post('/api/login', {user: object}))
            axios.defaults.headers.common['Authorization'] += token;
            localStorage.setItem('_user', user);
            localStorage.setItem('token', token);
        }
        catch(error) {
            console.log(error);
        }

    };

    render() {
        return <Login onLogin={this.onLogin}/>;
    }

}

export default LoginController;