import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "Strategic Design Solutions",
      desc: "Crafting visually compelling graphic designs to amplify brand presence and engagement.",
      icon: "fas fa-palette",
    },
    {
      name: "Intuitive Web Experiences",
      desc: "Designing user-centric websites that seamlessly blend aesthetics with functionality for an exceptional online journey.",
      icon: "fas fa-desktop",
    },
    {
      name: "Optimized UI/UX Design",
      desc: "Creating intuitive and delightful user interfaces, ensuring a seamless and memorable user experience.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Innovative Frontend Development",
      desc: "Transforming design concepts into dynamic and responsive web applications, enhancing user interactions.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Responsive App Design & Development",
      desc: "Building engaging and responsive applications, ensuring optimal performance on various devices for an enhanced user experience.",
      icon: "fas fa-chart-area",
    },
    {
      name: "UI/UX Performance Optimization",
      desc: "Implementing strategies to optimize UI/UX, enhancing website and application performance for seamless user interactions.",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section id='services' className='section bg-light'>
      <div className='container'>
        {/* Heading */}
        <p className=' text-center mb-2 wow fadeInUp'>
          <span className='bg-primary text-dark px-2'>What I Do?</span>
        </p>
        <h2 className='text-10 fw-600 text-center mb-5 wow fadeInUp'>Enhancing Your Projects, Elevating Your Team</h2>
        {/* Heading end*/}
        <div className='row gy-5 mt-5'>
          {services.length > 0 &&
            services.map((service, index) => (
              <div className='col-sm-6 col-lg-4 wow fadeInUp' key={index}>
                <div className='featured-box text-center px-md-4'>
                  <div className='featured-box-icon text-primary text-13'>
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className='text-6 fw-600 mb-3'>{service.name}</h3>
                  <p className='text-muted mb-0'>{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
