import React from "react";
import "./SectionMain.css";

function SectionMain({children}){
	return (
		<section id="section-main">
			{/* <div className="div-section-1 "></div> */}
			{/* <div className="div-section-2"></div>
			<div className="div-section-3"></div> */}

			{children}
			<div className="div-img-main">

			</div>
		</section>
	);
}

export {SectionMain}