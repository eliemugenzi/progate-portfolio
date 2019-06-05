import React from "react";
import {Link} from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className="navbar" role="navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">Elie</Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link to="/about" className="navbar-item">About Me</Link>
                    <Link to="/contact" className="navbar-item">Contact  Me</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;