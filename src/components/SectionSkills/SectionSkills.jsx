import React from "react";
import "./SectionSkills.css";

function SectionSkills({title, skillCard1, skillCard2, skillCard3, skillCard4, skillCard5, skillCard6, skillCard7, skillCard8, skillCard9, skillCard10, skillCard11}){
	return (
		<section id="section-skills">
			{title}
      <div className="skills-container">
        {skillCard1}
				{skillCard2}
				{skillCard3}
				{skillCard4}
				{skillCard5}
				{skillCard6}
				{skillCard7}
				{skillCard8}
				{skillCard9}
				{skillCard10}
      </div>
		</section>
	);
}

export {SectionSkills}