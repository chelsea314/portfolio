import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

// import React from 'react';
// import '../../styles/Contact.css';


// export default function Contact() {
//     return (
//     <div className='contact'>
        
//         <form className='container'>
//         <div>
//             <h1 className='mt-3'>Contact Me</h1>
//         </div>
//             <div className='row'>

//                 <div className='col-12 col-md-4 col-lg-6 mb-3'>
//                     <label for='name'>Full Name</label>
//                     <input class="form-control" type="text" name="user_name" placeholder="John Doe" id="name" required/>
//                 </div>

//                 <div className='col-12 col-md-4 col-lg-6 mb-3'>
//                     <div className="form-group">
//                         <label for="exampleInputEmail1">Email address</label>
//                         <input type="email" class="form-control" name="user_email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='JohnDoe123@email.com' required/>
//                     </div>
//                 </div>

//                 <div className='col-12 mb-3'>
//                     <div className="input">
//                         <label for="message">Send Message to Chelsea</label>
//                         <textarea className="form-control" aria-label="With textarea"  name="message" required></textarea>
//                         <button className="btn btn-primary" type="button" id="submitBtn">Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     </div>
//     );
// }
