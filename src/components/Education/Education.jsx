import SectionTitle from "../SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      institution: "Tampere University of Applied Sciences",
      degree: "Bachelor of Science in Software Engineering",
      startDate: "August 2019",
      endDate: "May 2023",
      description:
        "C++ · Linux · Software Engineering Practices · PostgreSQL · JavaScript · Web Applications · Firebase · Computer Science · GitHub · Responsive Web Design · Figma (Software) · React Native · Report Writing · Mobile Applications",
    },
    {
      institution: "Dhaka College",
      degree: "Bachelor of Arts",
      startDate: "November 2013",
      endDate: "June 2017",
      description:
        "I completed my first graduation from Dhaka College which is under University of Dhaka, Bangladesh",
    },
    {
      institution: "Hamidpur Al-Hera Degree College",
      degree: "Higher Secondary Certificate (HSC)",
      startDate: "May 2011",
      endDate: "August 2013",
      description:
        "I successfully completed my Higher Secondary Certificate (HSC) from Hamidpur Al-Hera Degree College, Jessore, Bangladesh",
    },
    {
      institution: "Khajura Khathaltala High School",
      degree: "Secondary School Certificate (SSC)",
      startDate: "January 2006",
      endDate: "March 2011",
      description:
        "I successfully completed my Secondary School Certificate (SSC) from Khajura Khathaltala High School, Manirampur, Jessore, Bangladesh",
    },
  ];

  return (
    <div id="education" className="my-12">
      <SectionTitle
        title={"My Education"}
        intro={
          "My educational background has shaped my passion for becoming a software engineer. Here are the key milestones that fueled my journey."
        }
      />
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <VerticalTimeline>
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              date={`${edu.startDate} - ${edu.endDate}`}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaGraduationCap />}
              contentStyle={{ background: "#fff", color: "#333" }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                {edu.institution}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {edu.degree}
              </h4>
              <p>{edu.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Education;
