import React from "react";
import Navbar from "../Navbar";

const NotFound=()=>{
    return(
        <section>
            <Navbar />
            <section className="not-found hero is-info">
                <div>
                    <div className="hero-body">
                        <h3> 404 Not Found...</h3>
                    </div>
                </div>
            </section>
        </section>
        
    )
}

export default NotFound;