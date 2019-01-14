import React from 'react'

const TeamDetails = (props) => {

    return (
    <div>
       
        <div className="center-align">
            <h4> Manage team: {props.team.teamName} </h4>
        </div>

        <br />
        <br />

        <form onSubmit={props.onClickAddUser}>
                <div className="row ">
                    <div className="input-field col s2">
                        <input placeholder="User name" id="userName" name="userName" type="text" className="validate" />
                        <label className="active" htmlFor="userName">Add team member</label>
                        <div className="red-text">{props.errorMessage}</div>
                    </div>
                    <div className="col s2">
                        <button className="btn-floating waves-effect waves-light" type="submit">
                            <i className="material-icons right">add</i>
                        </button>
                    </div>
                </div>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {props.members.map((item, index) => (
                    <tr key={index}>
                        <td>{item.userId.firstName + " " + item.userId.lastName}</td>
                        <td>{item.userRole}</td>

                        { item.userRole != 'OWNER' &&
                            <td>
                                <button className="btn-floating btn-small" onClick={() => props.onClickRemoveUser(item.userId._id)} > 
                                    <i className="material-icons right">delete</i>
                                </button>
                            </td>
                        }
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
    )
}

export default TeamDetails;