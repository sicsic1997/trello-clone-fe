import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="col s12 teal lighten-1 nav-extended">
            <div className="nav-wrapper">
                <Link 
                    to='/'
                    className="left brand-logo">
                    Trello
                </Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;