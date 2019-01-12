import React from 'react'

const TeamCreate = (props) => {

    return (
    <div>
        <div className="center-align">
            <h4> Create a new team </h4>
        </div>

        <br />
        <br />

        <div className="row ">
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
        </div>

    </div>
    )
}

export default TeamCreate;