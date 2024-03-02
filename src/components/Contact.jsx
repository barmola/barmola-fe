import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = () => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs.sendForm("service_b5hvelk", "template_xb8dxtv", form.current, "JEJReQYU9LCHyf8rr").then(
      (result) => {
        document.getElementById("contact-form").reset();
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(result.text);
        setSendingMail(false);
      },
      (error) => {
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(error.text);
        setSendingMail(false);
      }
    );
  };

  return (
    <section id='contact' className='section bg-primary'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 text-center text-lg-start wow fadeInUp'>
            <h2 className='text-10 fw-600 mb-5'>Let's Connect for Career Opportunities</h2>
            <p className='text-5 mb-5'>
              I welcome the opportunity to discuss potential collaborations and how my skills align with the needs of your company. Please provide
              details about any relevant opportunities so that our initial conversation can be tailored to maximize its value. Looking forward to
              connecting!
            </p>
            <h3 className='text-5 fw-600'>Living In:</h3>
            <address className='text-4'>Kormangala, Bangalore, India.</address>
            <h3 className='text-5 fw-600'>Call:</h3>
            <p className='text-4'>(+91) 720 439 7771</p>
            <ul className='social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5'>
              <li className='social-icons-facebook'>
                <Tooltip text='Facebook' placement='top'>
                  <a href='http://www.linkedin.com/in/barmola/' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-linkedin' />
                  </a>
                </Tooltip>
              </li>
              <li className='social-icons-instagram'>
                <Tooltip text='Instagram' placement='top'>
                  <a href='http://www.instagram.com/_barmola' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-instagram' />
                  </a>
                </Tooltip>
              </li>
              <li className='social-icons-github'>
                <Tooltip text='Github' placement='top'>
                  <a href='http://www.github.com/barmola' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-github' />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
          <div className='col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp' data-wow-delay='0.3s'>
            <h2 className='text-10 fw-600 text-center text-lg-start mb-5'>Express Your Career Opportunity</h2>
            {/* Contact Form */}
            <form id='contact-form' className='form-border' method='post' ref={form} onSubmit={sendEmail}>
              <div className='row g-4'>
                <div className='col-12'>
                  <label className='form-label' htmlFor='name'>
                    What is Your Name:
                  </label>
                  <input id='name' name='from_name' type='text' className='form-control py-1' required />
                </div>
                <div className='col-12'>
                  <label className='form-label' htmlFor='email'>
                    Your Email Address:
                  </label>
                  <input id='email' name='from_email' type='email' className='form-control py-1' required />
                </div>
                <div className='col-12'>
                  <label className='form-label' htmlFor='form-message'>
                    How Can I Contribute to Your Team?
                  </label>
                  <textarea id='form-message' name='message' className='form-control py-1' rows={4} required defaultValue={""} />
                </div>
                <div className='col-12 text-center text-lg-start'>
                  <button id='submit-btn' className='btn btn-dark rounded-0' type='submit'>
                    {sendingMail ? (
                      <>
                        <span role='status' aria-hidden='true' className='spinner-border spinner-border-sm align-self-center me-2'></span>
                        Sending......
                      </>
                    ) : (
                      <>
                        Send{" "}
                        <span className='ms-3'>
                          <i className='fas fa-arrow-right' />
                        </span>
                      </>
                    )}
                  </button>
                </div>
                <ToastContainer />
              </div>
            </form>
            {/* Contact Form end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
