import React from 'react'

const Teams = (props) => { 
    return (
    <div>
        <h1>TEAM CRUD</h1>
        <button className="btn waves-effect waves-light" onClick={props.onClickCreate} > Create new team
            <i className="material-icons right">send</i>
        </button>
    </div>
    )
}

export default Teams;