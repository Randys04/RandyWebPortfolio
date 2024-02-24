import React from "react";
import "./Text.css";

function Text({divideLine, cvContact, linkedinBtn, instagramBtn, githubBtn}){
  return(
    <>
      
      <div className="text-main-div">

        <div className="name-div">
          <h1>Randy Steven</h1>
          <h1>Moya Mora</h1>
        </div>
        
        <div className="degree-div">
          <h3>Computer Engenieer</h3>
        </div>

        <div className="divide-line-div">
            {divideLine}
        </div>
        
        <div className="cvcontact-div">
          {cvContact}
        </div>

          {/* <div className="div-social-media">
            {linkedinBtn}
            {githubBtn}
            {instagramBtn}
          </div> */}
        
      </div>
      
    </>
  )
}

export {Text}