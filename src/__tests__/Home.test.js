import React from "react";
import {shallow} from "../enzyme";

import Home from "../components/pages/Home";

let home
describe("Home page Tests...",()=>{
    beforeEach(()=>{
       home=shallow(<Home/>);
    })
    it("Should render home page",()=>{
        // const wrapper=shallow(<Home/>);
        expect(home).toBeTruthy();
    });

    it("Should find intro class",()=>{
        expect(home.find(".intro")).toHaveLength(1);
    });

    it("should get 3 social media links",()=>{
        expect(home.find(".intro__social a")).toHaveLength(3);
    });

    it("should get a github link",()=>{
        expect(home.find(".intro__social a i.fab.fa-github")).toBeTruthy();
    });

    it("should get a twitter link",()=>{
        expect(home.find(".intro__social a i.fab.fa-twitter")).toBeTruthy();
    });
    it("should get an instagram link",()=>{
        expect(home.find(".intro__social a i.fab.fa-instagram")).toBeTruthy();
    })

});