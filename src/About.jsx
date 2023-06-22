import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";


const About = () => {
  return (
    <div className="Main">
      <div className="container">
        <img src="/images/cover.png" alt="" />
        <Nav/>
      </div>
      <div className="About_sec">
        <p>
          hi, i'm vivek. i seek to create and consume beauty, in as many forms
          as i can. currently, i do it with software and design.
        </p>
        <div className="links_sec">
          <div className="ll">TW</div>
          <div className="ll">IG</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
