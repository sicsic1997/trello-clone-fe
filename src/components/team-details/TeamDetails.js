import React from 'react'

const TeamDetailsHeader = (props) => {

    return (
        <h3> Team details page: {props.state.componentState} </h3>
    );

}

const TeamDetails = (props) => { 

    let fields;
    switch(props.state.componentState) {
        case "create":
           fields = 
           ( <div className="row ">
                <form onSubmit={props.onRegister}>
                    <div className="row ">
                    <div className="input-field col s4 offset-s2">
                        <input placeholder="john_doe" id="userName" name="userName" type="text" className="validate" />
                        <label className="active" htmlFor="userName">Username</label>
                    </div>
                    <div className="input-field col s4">
                        <input placeholder="Minimum length of 8 characters" id="password" name="password" type="password" className="validate" />
                        <label className="active" htmlFor="password">Password</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s4 offset-s2">
                        <input placeholder="John" id="firstName" name="firstName" type="text" className="validate" />
                        <label className="active" htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s4">
                        <input placeholder="Doe" id="lastName" name="lastName" type="text" className="validate" />
                        <label className="active" htmlFor="lastName">Last Name</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s8 offset-s2">
                        <input placeholder="john_doe@address.com" id="email" name="email" type="email" className="validate" />
                        <label className="active" htmlFor="email">Email</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s8 offset-s2">
                        <input placeholder="I am John, John Doe." id="bio" name="bio" type="text" className="validate" />
                        <label className="active" htmlFor="bio">Bio</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s2 offset-s8">
                        <button className="btn waves-effect waves-light" type="submit" >Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                    </div>
                </form>
           </div> )
        default:
            fields = (
            <div>
                INCORRECT STATE
            </div> )
    }

    return (
        <div>
            { TeamDetailsHeader(props) }
        </div>
    );
}

export default TeamDetails;