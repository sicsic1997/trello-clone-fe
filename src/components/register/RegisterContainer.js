import React from 'react'
import axios from'axios'
import Register from './Register' 

class RegisterController extends React.Component {

    constructor(props) {
        super(props);
    }

    onRegister(e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        
        axios({
            method: "POST",
            url: 'http://localhost:3000/api/register',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': "application/json"
	        },
            body: {
                user: {object}
            }
        }).then((response) => {
            console.log(response);
        })

    }


    render() {
        return <Register onRegister={this.onRegister}/>;
    }

}

export default RegisterController;