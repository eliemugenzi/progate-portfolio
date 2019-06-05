import React from "react";
import {shallow} from "../enzyme";
import {Route} from "react-router-dom"

import App from "../App";
import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";

let pathMap={};
describe("Routes using array of routers",()=>{
    beforeAll(()=>{
        const component=shallow(<App/>);
        pathMap=component.find(Route).reduce((pathMap,route)=>{
            const routeProps=route.props();
            pathMap[routeProps.path]=routeProps.component;
            return pathMap;
        },{})
    });

    it("should show Home component if user visits the homepage...",()=>{
        expect(pathMap["/"]).toBe(Home);
    });

    it("Should return NotFound page if the user visits the wrong route...",()=>{
        expect(pathMap["*"]).toBe(NotFound);
    });

    it("should render about page if the user hits /about ...",()=>{
        expect(pathMap["/about"]).toBe(About);
    });

    it("should render contact page if the userb hits /contact...",()=>{
        expect(pathMap["/contact"]).toBe(Contact);
    })
})