import React from 'react'
import { NavLink, Link } from 'react-router-dom';
// import ShowForm from './ShowForm'

const NavBar = (props) => {
    // const [formFlag, setFormFlag] = useState(false)

    // const toggleFormFlag = () => {
    //     formFlag ? setFormFlag(false) : setFormFlag(true)
    // }
    
    if(props.loggedIn) {
        return (
            <div>
                <h1>Hello {props.user.name}</h1>
                <br/>
                <Link to="/search">
                    <button>Search</button>
                </Link>
                <Link to="/shows">
                    <button>My Shows</button>
                </Link>
                <button onClick={props.logOutUser}>Log Out</button>
                {/* {formFlag ? 
                    <ShowForm addShow={addShow}/>
                    :
                    <button onClick={toggleFormFlag}>Add Show</button>
                } */}
            </div>
        )
    }
    else {
        return (
            <div>
                <br/>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <Link to="/login">
                    <button>Log In</button>
                </Link>
            </div>
        )
    }

    
}

export default NavBar