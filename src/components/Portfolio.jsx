import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

  const filters = {
    DETAILED: "Details",
    MOCKUPS: "Mockups",
    YOUTUBE: "Youtube Videos",
    VIMEO: "Vimeo Videos",
  };

  const types = {
    IMAGE: "image",
    VIDEO: "video",
    DOCUMENT: "document",
  };

  const projectsData = [
    {
      title: "Spend the Bits: Payment transfer app, Canada",
      type: types.DOCUMENT,
      document: {
        projectInfo: `Spend the Bits represents a transformative journey from XRPL blockchain payments to a centralized currency transfer app. As the lead developer, I spearheaded the evolution of this project, transitioning it into a versatile and user-centric application. Leveraging React JS for the frontend and collaborating seamlessly with the Django backend team, I facilitated a smooth integration process. The result is a robust platform that mirrors popular centralized services like PayTm, offering users an intuitive and efficient means of currency transfer. The project showcases my proficiency in frontend development, strategic leadership, and adaptability in steering a significant shift in functionality and user experience.`,
        client: "STB",
        technologies: "React JS, React Native",
        industry: "Fin-Tech",
        date: "July, 2020",
        url: {
          name: "www.spendthebits.com",
          link: "https://www.spendthebits.com",
        },

        sliderImages: ["images/projects/SpendTheBits.jpg"],
      },

      thumbImage: "images/projects/SpendTheBits.jpg",

      categories: [filters.DETAILED],
    },
    {
      title: "Create My Portfolio – AllIndex",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Create My Portfolio is a sophisticated investment portfolio management app designed for AllIndex. This app provides users with key insights into their investments and suggests optimal portfolios based on an intricate algorithm. As the sole frontend developer, I utilized React JS to build a visually appealing and functional interface. Collaborating closely with the backend team using Django, I ensured seamless integration, resulting in an application that empowers users to make informed investment decisions.",
        client: "AllIndex",
        technologies: "React JS, React Native",
        industry: "Fin-Tech",
        date: "Aug, 2021",
        url: {
          name: "www.allindex.com",
          link: "https://www.allindex.com",
        },
        sliderImages: ["images/projects/AllIndex.jpg", "images/projects/AllIndex.jpg"],
      },
      thumbImage: "images/projects/AllIndex.jpg",
      categories: [filters.DETAILED],
    },
    {
      title: "Eduley – By NIWE",
      type: types.DOCUMENT,
      document: {
        projectInfo: `eLearning and college management platform for the private colleges. SaaS that allows colleges to optimize their student experience and their own operations from lead generation to graduation.
          Eduley represents a cutting-edge Edutech Management System designed to seamlessly transition traditional offline processes to an efficient online platform. Serving institutes, the system optimizes and digitizes various aspects of educational management. In my role as the lead frontend developer, I spearheaded the creation of the user interface using React. Collaborating closely with the Django backend, I ensured a cohesive and responsive system. The focus was on delivering a user-friendly experience, streamlining administrative tasks, and enhancing overall efficiency within educational institutions. Eduley stands as a testament to the transformative power of technology in the realm of education.   
        `,
        client: "NIWE",
        technologies: "React JS",
        industry: "LMS",
        date: "Apr, 2022",
        url: {
          name: "www.niwe.eduley.com",
          link: "https://www.niwe.eduley.com",
        },
        sliderImages: ["images/projects/Eduley.jpg", "images/projects/Eduley.jpg"],
      },
      thumbImage: "images/projects/Eduley.jpg",
      categories: [filters.DETAILED],
    },
    {
      title: "KryptoBazaar: India's Own Crypto Exchange",
      type: types.DOCUMENT,
      document: {
        projectInfo: `KryptoBazaar stands as India's premier crypto exchange, offering a seamless trading experience. Developed as a mobile app using React Native with a Django backend, I took on the role of the lead frontend developer. My responsibilities included crafting an intuitive and responsive interface, ensuring a user-friendly experience for crypto enthusiasts navigating the dynamic world of digital assets.`,
        client: "Shinobi Labs",
        technologies: "React Native",
        industry: "Fin-Tech",
        date: "Dec, 2020",
        url: {
          name: "www.kryptobazaar.com",
          link: "https://www.kryptobazaar.com",
        },
        sliderImages: ["images/projects/Kryptobazaar.jpg", "images/projects/Kryptobazaar.jpg"],
      },
      thumbImage: "images/projects/Kryptobazaar.jpg",
      categories: [filters.DETAILED],
    },
    {
      title: "Voicemate: India's Own Crypto Exchange",
      type: types.DOCUMENT,
      document: {
        projectInfo: `Voice Mate is a No Code platform with multi-lingual conversational assistant that is both text and voice-based. Enabled with Natural Language Understanding (NLU), the conversational assistant can create a script from Text to Speak based which can also be customized with human-like and contextual responses in multiple global languages. In addition, Voice Mate is truly omni-channel, as it can be integrated with IVR, mobile, web, social & IoT channels.`,
        client: "Voicemate, Veitnam",
        technologies: "React JS",
        industry: "AI",
        date: "Aug, 2019",
        url: {
          name: "www.thevoicemate.com",
          link: "https://www.thevoicemate.com",
        },
        sliderImages: ["images/projects/Voicemate.jpg", "images/projects/Voicemate.jpg"],
      },
      thumbImage: "images/projects/Voicemate.jpg",
      categories: [filters.DETAILED],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*" ? isotope.current.arrange({ filter: `*` }) : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories.length > 0) {
      let tempArray = [];
      categories.forEach((category, index) => {
        tempArray.push(getKeyByValue(category));
      });
      return tempArray.join(" ");
    }
  };

  return (
    <>
      <section id='portfolio' className={"section bg-light"}>
        <div className={"container"}>
          {/* Heading */}
          <p className='text-center mb-2 wow fadeInUp'>
            <span className='bg-primary text-dark px-2'>Portfolio</span>
          </p>
          <h2 className='text-10 fw-600 text-center mb-5 wow fadeInUp'>Some of my most recent projects</h2>
          {/* Heading end*/}
          {/* Filter Menu */}
          {/* Filter Menu end */}
          <div className='portfolio wow fadeInUp'>
            <div className='row portfolio-filter filter-container g-4'>
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div className={"col-sm-6 col-lg-4 filter-item " + getFilterClasses(project.categories)} key={index}>
                    <div className='portfolio-box'>
                      <div className='portfolio-img rounded-4'>
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className='img-fluid d-block portfolio-image rounded-4'
                          src={project.thumbImage}
                          alt=''
                        />
                        <div
                          className='portfolio-overlay rounded-4'
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                            setIsOpen(true);
                          }}
                        >
                          <button className='popup-ajax stretched-link border-0 p-0 '> </button>
                          <div className='portfolio-overlay-details '>
                            <p className='text-primary text-8'>
                              {project.type === types.DOCUMENT && <i className='fas fa-file-alt'></i>}
                              {project.type === types.IMAGE && <i className='fas fa-image'></i>}
                              {project.type === types.VIDEO && <i className='fas fa-video'></i>}
                            </p>
                            <h5 className='text-white text-5'>{project?.title}</h5>
                            <span className='text-light'>Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && <ProjectDetailsModal projectDetails={selectedProjectDetails} setIsOpen={setIsOpen}></ProjectDetailsModal>}
    </>
  );
};

export default Portfolio;
