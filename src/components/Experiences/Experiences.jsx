import SectionTitle from "../SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experience.css";
import { FaBriefcase } from "react-icons/fa";

const Experiences = () => {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "ILA MS OY",
      date: "June 2022 - July 2023",
      description:
        "Design and develop a user-friendly website about the company and communicate with clients. Investigating suitable Algorithms as required, implementing and testing them then finalizing the most suitable one. Implement and develop the client base web software.",
      technologies:
        "JavaScript, React.js, React Bootstrap, EmailJS, React-Helmet, Axios, GoogleAPIs, React-Icons, React-Toastify",
      icon: <FaBriefcase />,
    },
    {
      title: "Web developer Intern",
      company: "Tampere University of Applied Sciences",
      date: "May 2022 - July 2022",
      description:
        "Utilized the JavaScript programming language. Chose React as the framework to develop user interfaces. Implemented React Bootstrap to achieve a responsive and user-friendly design. Integrated Firebase as the backend infrastructure.",
      technologies: "JavaScript, React.js, React Bootstrap, React-Icons, React Calender, Firebase, React Alice Carousel",
      icon: <FaBriefcase />,
    },
  ];
  return (
    <div id="experiences" className="my-12">
      <SectionTitle
        title={"My Experiences"}
        intro={
          "Discover the journey of my professional growth through diverse roles and impactful projects. Each experience has honed my skills and shaped my career as a software engineer."
        }
      />
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Work Experiences
        </h2>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {exp.company}
              </h4>
              <p>{exp.description}</p>
              <p>
                <strong>Technologies Used:</strong> {exp.technologies}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Experiences;
