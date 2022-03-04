import React from "react";
import {NavLink} from "react-router-dom";




function Navbar(){

const styleObject = {
    div:{
        background: "antiqueWhite",
        textAlign: "left",
        fontFamily: "Areial",
        fontSize: "20px"
    }
}

    return(
        <nav>
            <div  style={styleObject.div}  className="Navbar" >
                
                <ul >
                    <li >
                    <NavLink exact to='/Home'>
                    Home
                </NavLink>
                    </li>
                    
                    <li>
                <NavLink exact to='/DogPic'>
                    Doggy!
                </NavLink>
                    </li>
                    <li>
                <NavLink exact to='/SeeWhatOthers'>
                    See what others are buying
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