import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "What technologies are you proficient in as a Senior Frontend Developer?",
      answer: `I specialize in modern frontend technologies such as React.js, Next.js HTML5, CSS3, and JavaScript. Additionally, I have hands-on experience with frameworks like React Native for mobile development.`,
    },
    {
      question: "Can you provide examples of projects you've led end-to-end?",
      answer: `Certainly! I've spearheaded the transformation of "Spend the Bits," transitioning it from XRPL blockchain payments to a centralized currency transfer app. This involved leading a team to design and develop both mobile and web applications, along with a merchant dashboard. The project showcased my skills in React JS for frontend development and collaboration with the Django backend, resulting in a seamless integration and enhanced user experience.`,
    },
    {
      question: "How do you approach problem-solving in a development context?",
      answer: `I approach problem-solving methodically, breaking down complex issues into manageable tasks. I prioritize understanding user needs, collaborate closely with cross-functional teams, and leverage my technical skills to implement effective and innovative solutions.`,
    },
    {
      question: "What strategies do you employ for staying current with frontend development trends?",
      answer: `I'm committed to continuous learning. I stay updated through industry blogs, attend webinars, and participate in relevant communities. This ensures I remain well-versed in emerging technologies, best practices, and design trends within the frontend development landscape.`,
    },
  ];

  return (
    <section id='faq' className='section bg-light'>
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-lg-6 order-1 order-lg-0 wow fadeInUp'>
            {/* Heading */}
            <p className='text-center text-lg-start mb-2'>
              <span className='bg-primary text-dark px-2'>FAQ</span>
            </p>
            <h2 className='text-10 fw-600 text-center text-lg-start mb-5'>Have any questions?</h2>
            {/* Heading end*/}

            <Accordion flush defaultActiveKey='0'>
              {faqsData.length > 0 &&
                faqsData.map((faq, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body dangerouslySetInnerHTML={{ __html: faq.answer }}></Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
          </div>
          <div className='col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn' data-wow-delay='1s'>
            {" "}
            <img className='img-fluid' src='images/faq.png' title='FAQ' alt='faq' />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
