import React from 'react'

const TeamDetails = (props) => { 
    console.log(props.componentState);
    let header = (
        <h3> Team details page: {props.componentState} </h3>
    );
    
    let fields
    switch(props.componentState) {
        case "create":
           fields = 
           ( <div className="row ">
                <form onSubmit={props.onClickCreate}>
                    <div className="row ">
                        <div className="input-field col s4 offset-s4">
                            <input placeholder="My team" id="teamName" name="teamName" type="text" className="validate" />
                            <label className="active" htmlFor="teamName">Team name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4 offset-s4">
                            <input placeholder="My team's description" id="description" name="description" type="text" className="validate" />
                            <label className="active" htmlFor="description"> Team description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2 offset-s4">
                            <button className="btn waves-effect waves-light" type="submit">Create team
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
           </div> )
           break;
        case "edit":
            fields = 
            ( <div className="row ">
                <form onSubmit={props.onClickUpdate}>
                    <div className="row ">
                        <div className="input-field col s4 offset-s4">
                            <input placeholder="My team" id="teamName" name="teamName" type="text" className="validate" />
                            <label className="active" htmlFor="teamName">Team name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4 offset-s4">
                            <input placeholder="My team's description" id="description" name="description" type="text" className="validate" />
                            <label className="active" htmlFor="description"> Team description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2 offset-s4">
                            <button className="btn waves-effect waves-light" type="submit">Update team
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div> )
            break;
        case "view": 
        fields = (
            <div>
                <p>Team name: {props.team.teamName}</p>
                <p>Team description: {props.team.description}</p>
                <div className="input-field col s2 offset-s4">
                    <button className="btn waves-effect waves-light" onClick={props.onClickDelete}>Delete team
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                <div className="input-field col s2 offset-s4">
                    <button className="btn waves-effect waves-light" onClick={props.onClickEditRedirect}>Edit team
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        )
        break;
        default:
        fields = (
            <div>
                INCORRECT STATE
            </div> )
    }

    let componentHtml = header + (<br />) + fields

    return (
        <div>
            {header}
            {fields}
        </div>
    );
}

export default TeamDetails;