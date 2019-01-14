import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="col s12 teal lighten-1 nav-extended">
            <div className="nav-wrapper">
                <div className="left">
                    <Link 
                        to='/'
                        className="brand-logo">
                        Trello
                    </Link>
                </div>
                <ul id="nav-mobile" className="right">
                    <li><Link to='/teams'>Team management</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;