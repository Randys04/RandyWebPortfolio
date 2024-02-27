import React from "react";
import "./CVContact.css";

function CVContact(){
	return (
		<>
			<div>
				
				<a className="link-download" href="/public/MyCV/CV_Randy_Moya.pdf" download="CV_Randy_Moya">
					<button className="cv-btn">
						<img/>
						Download my CV
					</button>
				</a>

				<a href="#section-contact-me">
					<button className="contact-btn">
						Contact me
					</button>
				</a>
				
			</div>
		</>
	);
}

export {CVContact}