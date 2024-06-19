import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css";

function ContactForm(){
  const form = useRef();
  const errorNameRef = useRef(null);
  const errorEmailRef = useRef(null);
  const errorMessageRef = useRef(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    let status = true;
    
    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    if (userName.trim() === '') {
      status = false;
      errorNameRef.current.style.color = 'rgb(251, 65, 65)';
    }else{
      errorNameRef.current.style.color = 'transparent';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      errorEmailRef.current.style.color = 'rgb(251, 65, 65)';
      status = false;
    }else{
      errorEmailRef.current.style.color = 'transparent';
    }

    if (message.trim() === '') {
      errorMessageRef.current.style.color = 'rgb(251, 65, 65)';
      status = false;
    }else{
      errorMessageRef.current.style.color = 'transparent';
    }

    if(status){
      emailjs
        .sendForm('service_m5gx3r8', 'template_5cvacn2', form.current, {
          publicKey: 'qmo6Kj-UNHWftCs4D',
        })
        .then(
          () => {
            setShowSuccessMessage(true); 
            setTimeout(() => {
              setShowSuccessMessage(false); 
            }, 10000);
            form.current.reset();
          },
          (error) => {
            setShowErrorMessage(true); 
            setTimeout(() => {
              setShowErrorMessage(false); 
            }, 10000);
          },
        );
    }

  };

	return (
		<>
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <label className='label-name form-labels'>Name</label>
        <input type="text" name="user_name" className='form-inputs' id="user_name"/>
        <label ref={errorNameRef} className='error-name error-labels'>You must enter a name</label>

        <label className='label-email form-labels'>Email</label>
        <input type="email" name="user_email" className='form-inputs' id="user_email"/>
        <label ref={errorEmailRef} className='error-email error-labels'>You must enter a valid email address</label>

        <label className='label-message form-labels'>Message</label>
        <textarea name="message" className='form-inputs message-input' id="message"/>
        <label ref={errorMessageRef} className='error-message error-labels'>You must enter a valid email address</label>

        {showSuccessMessage && <label className='success-message'>The email was successfully sent!!</label>}
        {showErrorMessage && <label className='error-sending-message'>The email could not be sent!!</label>}

        <input type="submit" value="Send" className='form-btn' id="submitFormBtn"/>
      </form>
    </>
	);
}

export {ContactForm}