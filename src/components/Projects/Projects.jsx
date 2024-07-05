import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionTitle from "../SectionTitle";
import projects from "./projects";
const Projects = () => {
  return (
    <div id="projects" className="my-12">
      <SectionTitle
        title={"My Projects"}
        intro={
          "Explore my diverse portfolio showcasing innovative web applications and solutions, highlighting my proficiency in JavaScript, React.js, Node.js, and more."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg space-y-5"
          >
            <span className="ml-2 font-semibold">{project.projectDate}</span>
            <h2 className="text-2xl font-bold text-center">{project.title}</h2>
            {project.image && (
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end pb-5 justify-center bg-black bg-opacity-40 transition-opacity duration-300 rounded-xl">
                  <div className="flex flex-wrap items-center justify-center gap-5 space-x-4 z-20">
                    {project?.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="btn btn-outline hover:bg-blue-400 hover:border-none rounded-full text-white"
                      >
                        Live Demo <FaExternalLinkAlt />
                      </a>
                    )}
                    {project?.clientRepo && (
                      <a
                        href={project?.clientRepo}
                        target="_blank"
                        className="btn btn-outline hover:bg-blue-400 hover:border-none rounded-full text-white"
                      >
                        <FaGithub /> Client
                      </a>
                    )}
                    {project?.serverRepo && (
                      <a
                        href={project?.serverRepo}
                        target="_blank"
                        className="btn btn-outline hover:bg-blue-400 hover:border-none rounded-full text-white"
                      >
                        <FaGithub /> Server
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
            <p className="leading-8 text-justify flex-grow">
              {project.description}
            </p>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-base-300 bg-base-200 border"
            >
              <div className="collapse-title text-xl font-medium">
                Core Features
              </div>
              <div className="collapse-content">
                {project.features.map((feature, index) => (
                  <div key={index} className="space-y-5">
                    <p className="leading-8">
                      <span className="font-semibold">{feature.name}:</span>{" "}
                      {feature.details}{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              tabIndex={1}
              className="collapse collapse-arrow border-base-300 bg-base-200 border"
            >
              <div className="collapse-title text-xl font-medium">
                Technologies Used
              </div>
              <div className="collapse-content">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="space-y-4">
                    <p className="leading-8">
                      <span className="font-semibold">{tech.name}:</span>{" "}
                      {tech.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="flex flex-wrap items-center justify-center gap-5 space-x-4">
              <a
                href={project.liveLink}
                className="btn btn-outline hover:bg-blue-400 hover:border-none rounded-full"
              >
                Live Demo
              </a>
              <a
                href={project.clientRepo}
                className="btn btn-outline hover:bg-blue-400 hover:border-none rounded-full"
              >
                Client Repo
              </a>
              <a
                href={project.serverRepo}
                className="btn btn-outline hover:bg-blue-400 hover:border-none rounded-full"
              >
                Server Repo
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
