import React from "react";
import "./ProjectCard.css";

function ProjectCard({projectName, images, techImages, description}){
	return (
		<div className="project-card-main">
			<div className="div-project-name">
				<h3>{projectName}</h3>
			</div>
			<div className="div-project-images">
				{images.map((image, index) => (
          <img key={index} className="project-image" src={image} alt={`Project ${index}`} />
        ))}
			</div>
			<div className="div-project-description">
				<p>{description}</p>
			</div>
			<div className="div-project-technologies">
				{techImages.map((image, index) => (
          <img key={index} className="tech-images" src={image} alt={`tech ${index}`} />
        ))}
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