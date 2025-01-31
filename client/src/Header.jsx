import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div>
            <Link to="/home">Home</Link>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    )

}
export default Header;