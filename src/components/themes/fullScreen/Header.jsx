import React, { useState } from "react";
import { Link } from "react-scroll";
import { scrollDuration } from "../../../config/commonConfig";
import { Tooltip } from "../../Tooltip";

const FullScreenHeader = ({ textWhite }) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu");

    if (header) {
      if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <header id='header' className='sticky-top'>
      {/* Navbar */}
      <nav
        className={
          "primary-menu navbar navbar-expand-none navbar-overlay  bg-transparent border-bottom-0 text-5 fw-600 " +
          (stickyHeader ? "sticky-on-top " : " ") +
          (textWhite ? "navbar-overlay navbar-text-light" : "navbar-overlay-dark")
        }
      >
        <div className='container'>
          {/* Logo */}
          <Link
            className='logo'
            title='Callum'
            smooth='easeInOutQuint'
            duration={scrollDuration}
            style={{ cursor: "pointer" }}
            to='home'
            onClick={(e) => {
              e.preventDefault();
              setIsNavModalClose(true);
            }}
          >
            <img className='logo-main' src={"images/logo.png"} alt='Himanshu Barmola' />
          </Link>
          {/* Logo End */}
          <div className={"text-3 ms-auto me-2 " + (textWhite ? "text-white" : "")}>
            <span className='text-4 me-2'>
              <i className='fas fa-phone' />
            </span>
            (+91) 720 439 7771
          </div>
          <button
            className={"navbar-toggler collapsed " + (isNavModalClose ? "" : "show")}
            type='button'
            onClick={() => setIsNavModalClose(!isNavModalClose)}
          >
            <span />
            <span />
            <span />
          </button>
          <div id='header-nav' className={"collapse navbar-collapse " + (isNavModalClose ? "" : "show")}>
            <div className='d-flex flex-column h-100 align-items-center justify-content-center'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link
                    className='nav-link '
                    smooth='easeInOutQuint'
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass='active'
                    spy
                    to='home'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link '
                    smooth='easeInOutQuint'
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass='active'
                    spy
                    to='about'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    About Me
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link '
                    smooth='easeInOutQuint'
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass='active'
                    spy
                    to='services'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    What I Do
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link '
                    smooth='easeInOutQuint'
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass='active'
                    spy
                    to='resume'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Resume
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link '
                    smooth='easeInOutQuint'
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass='active'
                    spy
                    to='portfolio'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link '
                    smooth='easeInOutQuint'
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass='active'
                    spy
                    to='faq'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    FAQ
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link
                    className='nav-link '
                    smooth='easeInOutQuint'
                    duration={scrollDuration}
                    style={{ cursor: "pointer" }}
                    activeClass='active'
                    spy
                    to='contact'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                    }}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default FullScreenHeader;
