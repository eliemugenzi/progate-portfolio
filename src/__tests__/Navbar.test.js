import React from "react";
import {shallow} from "../enzyme";

import Navbar from "../components/Navbar";

let navbar;

describe("Navbar tests...",()=>{
    beforeEach(()=>{
        navbar=shallow(<Navbar/>);
    });

    it("Should render a navigation bar without crashing...",()=>{
        expect(navbar).toBeDefined();
    });

    it("should get some nav links inside",()=>{
        expect(navbar.find(".navbar-menu")).toBeDefined();
    });

    it("should get a brand inside",()=>{
        expect(navbar.find(".navbar-brand")).toBeDefined();
    });

    it("should get 2 navigation links",()=>{
        expect(navbar.find(".navbar-end .navbar-item")).toHaveLength(2);
    })
})