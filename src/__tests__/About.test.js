import React from "react";
import {shallow} from "../enzyme";

import About from "../components/pages/About";


let about;

describe("About page Tests...",()=>{
    beforeAll(()=>{
        about=shallow(<About/>);
    })

    it("About component should render without crashing...",()=>{
        expect(about).toBeDefined();
    });

    it("the about page should contain 1 image",()=>{
        expect(about.find(".column img")).toHaveLength(1);
    });

    it("Should contain I love tech,women and music",()=>{
        const description=about.find(".column p").text();
        console.log(description);
        expect(description).toEqual("I love Tech, women and Music...");
    })
})