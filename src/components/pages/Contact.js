import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d1hba88', 'contact_form', form.current, 'hzV2-vw1sxYtZlA_v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Email Sent to Chelsea!");
  };

  return (
    <div className="contact container">
        <div className='row'>
            <h1 className='mt-3'>Contact Me</h1>
        </div>
        <div className='row'>
            <div className='col-12 col-md-6 mt-3'>
                <p className='mb-4'>Fill out the form to send me a message. I will respond to you via email. Or reach out via the links below:</p>
                <ul className='contact-info'>
                    <li><a className="contact-link" href="mailto:chelseansexton@gmail.com" target="blank">Chelseansexton@gmail.com</a></li>
                    <li><a className="contact-link" href="tel:5554280940" target="blank">(214) - 402 - 8668</a></li>
                    <li><a className="contact-link" href="https://www.linkedin.com/in/chelsea-sexton/" target="blank">LinkedIn</a></li>
                    <li><a className="contact-link" href="https://github.com/chelsea314" target="blank">GitHub</a></li>
                </ul>
            </div>

            <form className="col-12 col-md-6 " ref={form} onSubmit={sendEmail}>
                <div className="form-floating mb-3" >
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input name="user_name" type="text" className="form-control" id="floatingInput" placeholder="Full Name" required/>
                    <label for="floatingPassword">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea name="message" type="text" className="form-control" id="floatingInput" placeholder="Message" required/>
                    <label for="floatingInput">Message</label>
                    <input className="btn contact-btn mt-3" type="submit" value="Send" />
                </div>
            </form>
        </div>
    </div>
  );
};