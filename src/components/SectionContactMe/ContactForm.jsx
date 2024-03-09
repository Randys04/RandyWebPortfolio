import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css";

function ContactForm(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m5gx3r8', 'template_5cvacn2', form.current, {
        publicKey: 'qmo6Kj-UNHWftCs4D',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

	return (
		<>
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <label className='label-name form-labels'>Name</label>
        <input type="text" name="user_name" className='form-inputs'/>

        <label className='label-email form-labels'>Email</label>
        <input type="email" name="user_email" className='form-inputs'/>

        <label className='label-message form-labels'>Message</label>
        <textarea name="message" className='form-inputs message-input'/>

        <input type="submit" value="Send" className='form-btn'/>
      </form>
    </>
	);
}

export {ContactForm}