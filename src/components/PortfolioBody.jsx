import React from "react";
import "./PortfolioBody.css"

function PortfolioBody({children}){
	return(
		<div className="portfolio-body-div">
			{children}
		</div>
	)
}

export {PortfolioBody}