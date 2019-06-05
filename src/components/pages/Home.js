/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../Navbar";

const Home=()=>{
    return(
        <section className="container">
            <Navbar/>
            <div className="intro columns is-mobile">
                <div className="column">
                    <img src="https://images.pexels.com/photos/1484810/pexels-photo-1484810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                </div>
                <div className="column">
                    <h1 className="intro__name">I'm Elie Mugenzi</h1>
                    <h2 className="intro__desc">Fullstack Developer at Andela</h2>
                    <p>I am a junior to mid level developer, interested in Javascript,Node.js,Python,React and react native...</p>
                    <div className="intro__social">
                        <a href="" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;