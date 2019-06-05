import React from "react";
import {shallow} from "../enzyme";
import Contact from "../components/pages/Contact";

const FACEBOOK_URL ='https://facebook.com/officialElieMugenzi';
const TWITTER_URL ="https://twitter.com/ElieMugenzi";
const INSTAGRAM_URL ="https://instagram.com/eliemugenzi";
const GITHUB_URL ="https://github.com/eliemugenzi";

let contact;
describe("Contact page Tests...",()=>{
    beforeAll(()=>{
        contact=shallow(<Contact/>);
    });

    it("Contact page renders without crashing",()=>{
        expect(contact).toBeDefined();
    });

    it("Should get a correct text in heading...",()=>{
        const heading=contact.find("h1").text();
        console.log(heading);
        expect(heading).toEqual("My social media Handles...");
    });

    it("should have some social icons",()=>{
        const links=contact.find(".social__icons");
        expect(links).toBeDefined();
    })

    it("should get four social icons",()=>{
        const links=contact.find(".social__icons a");
        expect(links).toHaveLength(4);
    });

    it("should get a facebook social media link",()=>{
        const facebook=contact.find(".fa-facebook");
        expect(facebook).toBeDefined();
    });

    it("should get a twitter social media link",()=>{
        const twitter=contact.find(".fa-twitter");
        expect(twitter).toBeDefined();
    });

    it("should get an instagram social media link",()=>{
        const instagram=contact.find(".fa-instagram");
        expect(instagram).toBeDefined();
    });

    it("should get a github link",()=>{
        const github=contact.find(".fa-github");
        expect(github).toBeDefined();
    });

    it("should visit the correct facebook URL...",()=>{
        const fbUrl=contact.find(".social__icons a").at(0).prop("href");
        expect(fbUrl).toEqual(FACEBOOK_URL);
    });
    it("should visit the correct twitter URL...", () => {
        const twUrl = contact.find(".social__icons a").at(1).prop("href");
        expect(twUrl).toEqual(TWITTER_URL);
    });
    it("should visit the correct instagram URL...", () => {
        const igUrl = contact.find(".social__icons a").at(2).prop("href");
        expect(igUrl).toEqual(INSTAGRAM_URL);
    });
    it("should visit the correct github URL...", () => {
        const gitUrl = contact.find(".social__icons a").at(3).prop("href");
        expect(gitUrl).toEqual(GITHUB_URL);
    });
})
