import React from 'react';
import resumePDF from '../../resume/Chelsea_Sexton_Web Developer_Resume.pdf';
import '../../styles/Resume.css'

export default function Resume() {
    return(
    <div className="resume container mt-3">
        <div className="row justify-content-center">
            <div className="col-11">
                <div className="row">
                    <h1 className='font-weight-bold col-12 col-md-9 mb-0'>Summary</h1>
                    <a className="col-md-3 resume-link" href={resumePDF} download>
                        <button type="button" className="resume-btn btn text-nowrap">Download Resume </button>
                    </a>
                </div>
                <hr className='mt-2' />
                <p>Full stack web developer with experience in responsive web design using the MERN stack. Skilled in front-end development using HTML5, CSS3, Javascript and frameworks including React.js, Handlebars, Bootstrap and Bulma. Competent with back-end development using Node.js, SQL, MySQL, Express.js, and MongoDB. Focused and creative individual with great attention to detail, proficient with RESTful APIs, debugging and GitHub, as well as deploying applications through Heroku. Highly collaborative teammate able to adapt quickly to fast-paced environments. Life-long learner with a passion for solving problems and continual growth. Strong listening, verbal and written communication skills with an emphasis on professionalism.</p>

                <div className="row">
                    <h1 className='font-weight-bold'>Experience</h1>
                    <hr />
                    <div className="col-12 col-sm-4">
                        <h5 className='font-weight-bold'>Visual Arts Instructor</h5> 
                        <h6 className='font-italic'>Lovejoy ISD</h6> 
                        <h6 className='font-italic'>Hart Elementary</h6> 
                        <h6 className='font-italic'>August 2021 - May 2022</h6>
                    </div>
                    <div className="col-12 col-sm-8">
                        <ul>
                            <li>Planned, designed and executed multiple showcases for hundreds of attendees, including marketing promotions, event itineraries, and gallery display. Interviewed participants and effectively communicated their motivations and ideas.</li>
                            <li>Functioned as a team lead within the department, effectively communicated with my team as well as to senior staff.</li>
                            <li>Instructed clients with an emphasis on process and practice.  Introduced a wide range of tools and media while remaining committed to exploration and a growth mindset.</li>
                        </ul>
                    </div>
                    <hr />

                    <div className="col-12 col-sm-4">
                        <h5 className='font-weight-bold'>Visual Arts Instructor</h5> 
                        <h6 className='font-italic'>Richardson ISD</h6>
                        <h6 className='font-italic'>Lake Highlands Elementary</h6>  
                        <h6 className='font-italic'>August 2016 - August 2021</h6>
                    </div>
                    <div className="col-12 col-sm-8">
                        <ul>
                            <li>Managed hundreds of projects and clients while simultaneously ensuring craftsmanship, quality and timelines were achieved.</li>
                            <li>Filmed, edited and produced online-learning videos and materials to enhance performance.</li>
                            <li>Handled and monitored budget and deliverables for each project.</li>
                            <li>Implemented dynamic and useful feedback to clients in order to achieve desired goals.</li>
                        </ul>
                    </div>
                    <hr />

                    <div className="col-12 col-sm-4">
                        <h5 className='font-weight-bold'>Second Grade Instructor</h5> 
                        <h6 className='font-italic'>Richardson ISD</h6> 
                        <h6 className='font-italic'>Lake Highlands Elementary</h6> 
                        <h6 className='font-italic'>August 2011 -  August 2016</h6>
                    </div>
                    <div className="col-12 col-sm-8">
                        <ul>
                            <li>Trained a group of six to work together in teams to solve open-ended STEAM challenges designed to teach the creative process. Taught critical and creative thinking, public speaking, and collaborative problem-solving.</li>
                            <li>Created digital instructional materials for department, clients and stakeholders to enhance experiences.</li>
                            <li>Served as technology leader for other instructors and developed job-aides and videos for training.</li>
                            <li>Documented various data points with extreme accuracy for strict compliance records.</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <h1 className='font-weight-bold'>Education</h1>
                    <hr />
                    <div className="col-12 col-sm-8">
                        <h5 className='font-weight-bold'>The University of Texas at Austin</h5> 
                        <ul>
                        <h6>Full Stack Web Development Certificate</h6> 
                        <h6 className='font-italic'>&emsp;&emsp;September 2022</h6>
                        <h6>Bachelor of Science in Applied Learning and Development</h6> 
                        <h6 className='font-italic'>&emsp;&emsp;December 2010</h6>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
)}
