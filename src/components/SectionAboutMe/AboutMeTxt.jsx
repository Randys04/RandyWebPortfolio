import React from "react";
import "./AboutMeTxt.css"

function AboutMeTxt({linkedinBtn,instagramBtn, githubBtn}){
	return(
		<div className="about-me-div-main">
			<div className="my-description">
				<h3 className="hello-about-me">Hello, I am <span className="my-name">Randy Steven Moya Mora</span></h3>
				<p className="i-am-text">
				I am a Computer Engineering student, and my passion for web development drives my constant desire for improvement. My focus is on learning and contributing, always aspiring to grow alongside the world of development. Welcome to my space, where each line of code represents my incessant pursuit of growth and enhancement!
				</p>
				
				<div className="contact-btns-main">
					<div className="contact-btns">
						{linkedinBtn}
						{githubBtn}
						{instagramBtn}
					</div>
				</div>
			</div>
		</div>
	)
}

export {AboutMeTxt}