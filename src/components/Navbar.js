import React from "react";
import {NavLink} from "react-router-dom";




function Navbar(){
    return(
        <nav>
            <div className="Navbar" >
                
                <ul>
                    <li>
                    <NavLink exact to='/Home'>
                    Home
                </NavLink>
                    </li>
                    <li>
                    <NavLink exact to='/Api'>
                    Api
                </NavLink>
                    </li>
                    <li>
                <NavLink exact to='/LovePoems'>
                    Love
                </NavLink>
                    </li>
                    <li>
                <NavLink exact to='/Funny'>
                    Funny
                </NavLink>
                    </li>
                    <li>
                <NavLink exact to='/Post'>
                    Post Your Own
                </NavLink>
                    </li>
                    <li>
                <NavLink exact to='/FetchYourData' >
                    Get my posts
                </NavLink>
                    </li>
                </ul>
            </div>

        </nav>
      

    )
}

export default Navbar