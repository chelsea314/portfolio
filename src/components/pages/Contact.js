import React from 'react';

export default function Contact() {
    // useEffect(() => {
    //     const submit = document.getElementById("submit");
    //     submit.addEventListener("click", validate);
    //     function validate(e) {
    //         e.preventDefault();
    //         const nameField = document.getElementById("name");
    //         let valid = true;
    //         if (!nameField.value) {
    //             const nameError = document.getElementById("nameError");
    //             nameError.classList.add("visible");
    //             nameField.classList.add("invalid");
    //             nameError.setAttribute("aria-hidden", false);
    //             nameError.setAttribute("aria-invalid", true);
    //         }
    //         return valid;
    //     }
    // })

    return (
    <div>
        <h1>Contact Me</h1>
        <form className='container'>
            <div className='row'>

                <div className='col-12 col-md-4 col-lg-6 mb-3'>
                    <label for='name'>Full Name</label>
                    <input class="form-control" type="text" placeholder="John Doe" id="name" required/>
                </div>

                <div className='col-12 col-md-4 col-lg-6 mb-3'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='JohnDoe123@email.com' required/>
                    </div>
                </div>

                <div className='col-12 mb-3'>
                    <div className="input">
                        <label for="message">Send Message to Chelsea</label>
                        <textarea className="form-control" aria-label="With textarea" required></textarea>
                        <button className="btn btn-primary" type="button" id="submitBtn">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    );
}
