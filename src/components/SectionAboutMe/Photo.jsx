import React from "react";
import "./Photo.css";

function Photo(){
  return(
    <>
			<div className="photo-main-div">
				<div className="photo-div">
					<img className="img-photo" src="/public/myPhoto.jpg" alt="my/photo" />
				</div>
			</div>
    </>
  )
}

export {Photo}