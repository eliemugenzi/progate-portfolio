/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Navbar from "../Navbar";

const Contact=()=>(
    <section>
        <Navbar/>
        <div className="container"
        style={{
            display:"grid",
            placeContent:"center",
            height:'80vh'
        }}
        >
        <h1>My social media Handles...</h1>
        <div className="social__icons">
            <a
            href="https://facebook.com/officialElieMugenzi"
            target="_blank"
            >
                <i className="fab fa-facebook"/>
            </a>
                <a
                href="https://twitter.com/ElieMugenzi"
                target="_blank"
                >
                    <i className="fab fa-twitter" />
                </a>
                <a
                href="https://instagram.com/eliemugenzi"
                target="_blank"
                >
                    <i className="fab fa-instagram" />
                </a>
                <a
                href="https://github.com/eliemugenzi"
                target="_blank"
                >
                    <i className="fab fa-github" />
                </a>
        </div>
        </div>
    </section>
);

export default Contact;