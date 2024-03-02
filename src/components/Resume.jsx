import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "2015 - 2017",
      title: "Master in Computer Engineering",
      place: "Harvard University",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
    },
    {
      yearRange: "2014 - 2015",
      title: "Bachelor in Computer Engineering",
      place: "University of California",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
    },
    {
      yearRange: "2014",
      title: "St.Paul's Sr. Sec. School",
      place: "Haldwani, Uttarakhand",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2019 - 2023",
      title: "React Developer",
      place: "Qilin Software Lab",
      desc: [
        "Proficient in developing single-page applications(SPAs)with React.",
        "Expertise in creating modular components for efficient development.",
        "Implemented Redux for centralized state control and efficient data flow.",
        "Utilized React Router for seamless SPA navigation.",
        "Applied responsive design for various screen sizes.",
        "Integrated RESTful APIs and GraphQL for data retrieval.",
        "Worked with real-time data",
        "Extensive experience in cross-platform mobile app development.",
        "Applied responsive design for consistent user experience on iOS and Android.",
        "Debugged and optimized React Native apps.",
        "Applied CI/CD pipelines for efficient development and release.",
      ],
    },
  ];
  const experienceDetails2 = [
    {
      yearRange: "2023 - current",
      title: "Sr. Front End Developer",
      place: "Qilin Software Lab",
      desc: [
        "Leading and mentoring a team of junior React developers, I am currently achieving a remarkable 30% improvement in project delivery efficiency. I provide consistent guidance and support, actively contributing to the ongoing growth and success of the organization.",
        "Conducting regular code reviews, I ensure code quality and adherence to best practices.",
        "Overseeing the frontend development of multiple projects concurrently, I am ensuring timely delivery and maintaining high-quality standards.",
        "Currently, I am architecting scalable and maintainable frontend solutions using React.js.",
        "Serving as the primary technical authority in React.js and frontend technologies, I stay at the forefront of industry advancements.",
        "Implementing and enforcing coding standards and guidelines, I ensure ongoing code consistency for enhanced project outcomes.",
      ],
    },
  ];

  const skills = [
    {
      name: "React.js",
      percent: 95,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "Responsive Design Framework",
      percent: 95,
    },
    {
      name: "TypeScript",
      percent: 80,
    },
    {
      name: "Next.js",
      percent: 81,
    },
  ];

  return (
    <section id='resume' className='section'>
      <div className='container'>
        {/* Heading */}
        <p className=' text-center mb-2 wow fadeInUp'>
          <span className='bg-primary text-dark px-2'>Resume</span>
        </p>
        <h2 className='text-10 fw-600 text-center mb-5 wow fadeInUp'>A summary of My Resume</h2>
        {/* Heading end*/}
        <div className='row g-5 mt-5'>
          {/* My Education */}

          {/* My Experience */}
          <div className='col-lg-6 wow fadeInUp' data-wow-delay='0.2s'>
            <h2 className='text-7 fw-600 mb-4 pb-2'>My Experience</h2>
          </div>
          <div className='row g-5 mt-1'>
            <div className='col-lg-6 wow fadeInUp'>
              <div className='border-start border-2 border-primary ps-3'>
                {experienceDetails.length > 0 &&
                  experienceDetails.map((value, index) => (
                    <div key={index}>
                      <h3 className='text-5'>{value.title}</h3>
                      <p className='mb-2'>
                        {value.place} / {value.yearRange}
                      </p>
                      <ul>
                        {value.desc.map((item) => (
                          <li className='text-muted'>{item} </li>
                        ))}
                      </ul>

                      {/* <p className='text-muted'>{value.desc}</p> */}
                      <hr className='my-4' />
                    </div>
                  ))}
              </div>
            </div>
            <div className='col-lg-6 wow fadeInUp'>
              <div className='border-start border-2 border-primary ps-3'>
                {experienceDetails2.length > 0 &&
                  experienceDetails2.map((value, index) => (
                    <div key={index}>
                      <h3 className='text-5'>{value.title}</h3>
                      <p className='mb-2'>
                        {value.place} / {value.yearRange}
                      </p>
                      <ul>
                        {value.desc.map((item) => (
                          <li className='text-muted'>{item} </li>
                        ))}
                      </ul>

                      {/* <p className='text-muted'>{value.desc}</p> */}
                      <hr className='my-4' />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className='text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp'>My Skills</h2>
        <div className='row gx-5'>
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className='col-md-6 wow fadeInUp' key={index}>
                <p className='fw-500 text-start mb-2'>
                  {skill.name} <span className='float-end'>{skill.percent}%</span>
                </p>
                <div className='progress progress-sm mb-4'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <p className='text-center mt-5 wow fadeInUp'>
          <a className='btn btn-outline-dark shadow-none rounded-0' href={resumeFile} download>
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
