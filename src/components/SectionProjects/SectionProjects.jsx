import React from "react";
import "./SectionProjects.css";

function SectionProjects({title, project1, project2}){
	return (
		<section id="section-projects">
			{title}
      <div className="projects-container">
        {project1}
				{project2}
      </div>
		</section>
	);
}

export {SectionProjects}