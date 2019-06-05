/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../Navbar";

const About=()=>{
    return(
        <section>
         <Navbar/>
         <div className="container"
         style={{
             marginTop:80
         }}
         >
            <div className="columns is-mobile">
                <div className="column">
                   <img
                            src="https://images.pexels.com/photos/1484810/pexels-photo-1484810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            style={{
                                width:200,
                                height:200,
                                borderRadius:'50%'
                            }}
                            alt="My picture"
                   />
                </div>
                <div className="column">
                    <h1>
                            <strong>Elie <span
                                style={{
                                    color: "lightblue"
                                }}
                            >Mugenzi</span></strong>
                    </h1>
                    <p>I love Tech, women and Music...</p>
                    
                </div>
            </div>
         </div>
        </section>
    )
}

export default About;