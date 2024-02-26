import React from "react";
import "./SkillCard.css";

function SkillCard({urlImg, skillName}){
	return (
		<div className="skill-card-main">
			<img className="skill-img" src={urlImg}/>
      <div className="skill-divider"></div>
      <p className="skill-name">{skillName}</p>
		</div>
	);
}

export {SkillCard}