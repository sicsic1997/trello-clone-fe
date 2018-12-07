import React from 'react'
import axios from'axios'
import Register from './Register' 

class RegisterController extends React.Component {

    constructor(props) {
        super(props);
    }

    async onRegister(e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        try {
            const res = await axios.post('/api/register', {user: object});
            console.log(res);
        }
        catch(error) {
            console.log(error);
        }
    }


    render() {
        return <Register onRegister={this.onRegister}/>;
    }

}

export default RegisterController;