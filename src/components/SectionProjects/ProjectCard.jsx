import React from "react";
import "./ProjectCard.css";

function ProjectCard({projectName, images, description}){
	return (
		<div className="project-card-main">
			<div className="div-project-name">
				<h3>{projectName}</h3>
			</div>
			<div className="div-project-images">
				<img className="project-images" src="/public/TasksProjImgs/TasksImg1.png"/>
				<img className="project-images" src="/public/TasksProjImgs/TasksImg2.png"/>
				<img className="project-images" src="/public/TasksProjImgs/TasksImg3.png"/>
				<img className="project-images" src="/public/TasksProjImgs/TasksImg4.png"/>
			</div>
			<div className="div-project-description">
				<p>{description}</p>
			</div>
			<div className="div-project-links">
				<a href="https://voluble-crostata-2422c4.netlify.app/" target="_blank">
					<button>Live Demo</button>
				</a>
				<a>
					<button>Check Code</button>
				</a>

			</div>
		</div>
	);
}

export {ProjectCard}