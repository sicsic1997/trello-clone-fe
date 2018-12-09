import React from 'react'

const Login = (props) => {
    return (
      <div className="row ">
        <form onSubmit={props.onLogin}>
            <div className="row ">
              <div className="input-field col s4 offset-s2">
                <input placeholder="john_doe" id="userName" name="userName" type="text" className="validate" />
                <label className="active" htmlFor="userName">Username</label>
              </div>
              <div className="input-field col s4">
                <input placeholder="john_doe's password" id="password" name="password" type="password" className="validate" />
                <label className="active" htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s2 offset-s8">
                <button className="btn waves-effect waves-light" type="submit">LOGIN
                    <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
        </form>
    </div>
    
    );
}

export default Login