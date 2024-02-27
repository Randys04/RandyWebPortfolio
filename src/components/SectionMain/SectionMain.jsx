import React from "react";
import "./SectionMain.css";

function SectionMain({children, navbar}){
	return (
		<section id="section-main">
			{children}
			<div className="div-img-main">

			</div>
		</section>
	);
}

export {SectionMain}