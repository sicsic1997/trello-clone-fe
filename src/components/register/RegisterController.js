import React from 'react'
import axios from'axios'
import Register from './Register' 

class RegisterController extends React.Component {

    constructor(props) {
        super(props);
    }

    onRegister = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        try {
            await axios.post('/api/register', {user: object});
            this.props.history.push('/login');
        }
        catch(error) {
            console.log(error);
        }

    };


    render() {
        return <Register onRegister={this.onRegister}/>;
    }

}

export default RegisterController;