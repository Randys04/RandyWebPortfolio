import React from "react";
import "./ProjectCard.css";

function ProjectCard({projectName, images, techImages, description, urlCode, urlDemo}){
	return (
		<div className="project-card-main">
			<div className="div-project-name">
				<h3>{projectName}</h3>
			</div>
			<div className="div-project-images project-card-sections">
				{images.map((image, index) => (
          <img key={index} className="project-image" src={image} alt={`Project ${index}`} />
        ))}
			</div>
			<div className="div-project-description project-card-sections">
				<p>{description}</p>
			</div>
			<div className="div-project-technologies project-card-sections">
				{techImages.map((image, index) => (
          <img key={index} className="tech-images" src={image} alt={`tech ${index}`} />
        ))}
			</div>
			<div className="div-project-links project-card-sections">
				<a href={urlDemo} target="_blank">
					<button disabled={!urlDemo}>Live Demo</button>
				</a>
				
				<a href={urlCode} target="_blank">
					<button disabled={!urlCode}>Check Code</button>
				</a>

			</div>
		</div>
	);
}

export {ProjectCard}