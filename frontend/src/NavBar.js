import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <NavLink exact to="/signup">Register</NavLink>
            <NavLink exact to="/admin">Admin</NavLink>
        </div>
    )
}


export default NavBar;