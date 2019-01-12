import React from 'react'

const Teams = (props) => {
    return (
    <div>

        <div className="row">
            <div className="col s10 left-align">
                <b>Teams</b>
            </div>

            <div className="col s2 right-align">
                <button className="btn-floating  btn-small" onClick={props.onClickCreate}>
                    <i className="material-icons right">add</i>
                </button>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
                {props.teamList.map((item) => (
                    <tr key={item._id}>
                        <td>{item.teamName}</td>
                        <td>{item.description}</td>
                        <td>
                            <button className="btn-floating btn-small" onClick={() => props.onClickEdit(item._id)} > 
                                <i className="material-icons right">mode_edit</i>
                            </button>
                        </td>
                        <td>
                            <button className="btn-floating btn-small" onClick={() => props.onClickView(item._id)} >
                                <i className="material-icons right">arrow_forward</i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
    )
}

export default Teams;