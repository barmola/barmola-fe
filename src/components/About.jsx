import React from "react";
const AboutUs = () => {
  return (
    <section id='about' className='section'>
      <div className='container'>
        {/* Heading */}
        <p className='text-center mb-2 wow fadeInUp'>
          <span className='bg-primary text-dark px-2'>About Me</span>
        </p>
        <h2 className='text-10 fw-600 text-center mb-5 wow fadeInUp'>Know Me More</h2>
        {/* Heading end*/}
        <div className='row'>
          <div className='col-lg-8 text-center text-lg-start wow fadeInUp'>
            <h2 className='text-8 fw-400 mb-3'>
              Hi, I'm <span className='fw-700 border-bottom border-3 border-primary'>Himanshu Barmola</span>
            </h2>
            <p className='text-5'>
              I'm a skilled React Developer with over 5 years of experience. I specialize in creating user-friendly interfaces, especially in Fin-tech
              and Learning Management Systems (LMS). I've worked on optimizing interfaces for managing investment portfolios in Fin-tech and enhancing
              user experiences in education tech. My focus is on combining technical proficiency with a user-centric approach to improve financial and
              educational platforms.
            </p>
          </div>
          <div className='col-lg-4 mt-4 mt-lg-0 wow fadeInUp' data-wow-delay='0.2s'>
            <div className='featured-box style-4'>
              <div className='featured-box-icon text-25 fw-500 bg-primary rounded-circle'>
                <span className='wow heartBeat' data-wow-delay='1.3s'>
                  5
                </span>
              </div>
              <h3 className='text-7 wow rubberBand' data-wow-delay='2s'>
                Years of <span className='fw-700'>Experiance</span>
              </h3>
            </div>
          </div>
        </div>
        <div className='row gy-3 mt-4'>
          <div className='col-6 col-lg-3 wow fadeInUp'>
            <p className='text-muted fw-500 mb-0'>Name:</p>
            <p className='text-4 text-dark fw-600 mb-0'>Himanshu Barmola</p>
          </div>
          <div className='col-6 col-lg-3 wow fadeInUp' data-wow-delay='0.2s'>
            <p className='text-muted fw-500 mb-0'>Email:</p>
            <p className='text-4 fw-600 mb-0'>
              <a className='link-dark' href='mailto:chat@callum.com'>
                jrbarmola@gmail.com
              </a>
            </p>
          </div>
          <div className='col-6 col-lg-3 wow fadeInUp' data-wow-delay='0.3s'>
            <p className='text-muted fw-500 mb-0'>Date of birth:</p>
            <p className='text-4 text-dark fw-600 mb-0'>20 August, 1998</p>
          </div>
          <div className='col-6 col-lg-3 wow fadeInUp' data-wow-delay='0.4s'>
            <p className='text-muted fw-500 mb-0'>From:</p>
            <p className='text-4 text-dark fw-600 mb-0'>Bangalore, Karnataka.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
