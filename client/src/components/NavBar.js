import React from 'react'
import { NavLink, Link } from 'react-router-dom';

// const link = {
//     width: '100px', 
//     padding: '15px 32px',
//     margin: '0 6px 6px',
//     background: 'white',
//     textDecoration: 'none',
//     color: 'black'
//   }

const NavBar = (props) => {
    
    if(props.loggedIn) {
        return (
            <div>
                <h1>{props.user.name}'s TVRoom</h1>
                <br/>
                <NavLink 
                    to="/search"
                >
                    <button className="nav-button">Search</button>
                </NavLink>
                <NavLink 
                    to="/shows"
                >
                    <button className="nav-button">My Shows</button>
                </NavLink>
                {/* <br/><br/><br/> */}
                <button className="nav-button" onClick={props.logOutUser}>Log Out</button>
                <br/><br/>
            </div>
        )
    }
    else {
        return (
            <div>
                <br/>
                <NavLink 
                    to="/signup"
                >
                    <button className="nav-button">Sign Up</button>
                </NavLink>
                <NavLink 
                    to="/login"
                >
                    <button className="nav-button">Log In</button>
                </NavLink>
            </div>
        )
    }

    
}

export default NavBar