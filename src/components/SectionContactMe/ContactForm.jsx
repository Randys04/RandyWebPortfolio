import React from "react";
import "./ContactForm.css";

function ContactForm(){
	return (
		<>
      <form className="contact-form">
        <div className="form-name-div form-div">
          <label for="name" className="form-labels">Name</label>
          <input id="input-name" className="form-inputs name-input" type="text" name="name" />
        </div>
        
        <div className="form-email-div form-div">
          <label for="email" className="form-labels">Email</label>
          <input id="input-email" className="form-inputs email-input" type="text" name="email" />
        </div>
        
        <div className="form-message-div form-div">
          <label for="message" className="form-labels">Message</label>
          <textarea id="input-message" className="form-inputs message-input" type="text" name="message" />
        </div>
        

        <input type="submit" className="form-btn" value="Send message"></input>
      </form>
    </>
	);
}

export {ContactForm}