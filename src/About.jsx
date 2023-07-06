import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";


const About = () => {
  return (
    <div className="Main">
      <div className="container">
        <img className="vik-img" src="/images/cover.png" alt="" />
        <Nav/>
      </div>
      <div className="About_sec">
        <p>
          hi, i'm vivek. i seek to create and consume beauty, in as many forms
          as i can.<br/ >  currently, i do it with software and design.
        </p>
        <div className="links_sec">
          <a className="ll" href="https://twitter.com/vik_codes">TW</a>
          <a className="ll" href="https://www.instagram.com/the.vivek.kushwaha/">IG</a>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
