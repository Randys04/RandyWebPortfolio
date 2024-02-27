import React from "react";
import "./Navbar.css";

function Navbar(){
	return (
		<nav id="portfolio-navbar">
      <ul>
        <a href="#section-about-me"><li>About Me</li></a>
        <a href="#section-skills"><li>Skills</li></a>
        <a href="#section-projects"><li>Projects</li></a>
        <a href="#section-contact-me"><li>Contact Me</li></a>
      </ul>
		</nav>
	);
}

export {Navbar}