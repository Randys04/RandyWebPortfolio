import React from "react";
import "./SectionContactMe.css";

function SectionContactMe({title, form}){
	return (
		<section id="section-contact-me">
			{title}
			
			<div className="form-container">
				{form}
			</div>
		</section>
	);
}

export {SectionContactMe}