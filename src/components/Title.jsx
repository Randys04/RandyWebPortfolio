import React from "react";
import "./Title.css"

function Title({titleText}){
	return(
		<div className="sections-title">
			<h2>{titleText}</h2>
		</div>
	)
}

export {Title}