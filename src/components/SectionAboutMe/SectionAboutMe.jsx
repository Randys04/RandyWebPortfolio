import React from "react";
import "./SectionAboutMe.css"

function SectionAboutMe({title, photo, aboutMeTxt}){
	return(
		<section id="section-about-me">
			{title}
			<div className="about-me-content">
				{photo}
				{aboutMeTxt}
			</div>
		</section>
	)
}

export {SectionAboutMe}