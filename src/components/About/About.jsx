import SectionTitle from "../SectionTitle";
import sajal from "../../assets/images/sajal.jpg";
import { Typewriter } from "react-simple-typewriter";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaHireAHelper,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div id="about" className="my-12">
      <SectionTitle
        title={"About Me"}
        intro={
          "Who am I? In the programming world, I am a learner constantly honing my skills."
        }
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-12">
        <div className="relative group overflow-hidden rounded-xl">
          <img
            src={sajal}
            alt="MaaSajal Photo"
            className="rounded-xl transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <div className="space-x-4 text-white text-4xl flex gap-5">
              <a
                href="https://github.com/maasajal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/maa-sajal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/maa.sajal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-4xl space-y-5">
          <h2 className="text-5xl font-PlayFair font-bold">
            Hi, My name is <span className="text-sky-400">Abdullah Sajal</span>
          </h2>
          <h1 className="mb-5 text-3xl font-bold font-PlayFair">
            I am a{" "}
            <span className="text-sky-400">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Web Developer",
                  "Full Stack Web Developer",
                  "MERN Stack Web Developer!",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={5}
              />
            </span>
          </h1>
          <p className="mb-5 leading-8 text-justify">
            I am a dedicated recent graduate with over a year of experience as a
            software engineer. I have developed robust programming skills and
            possess a deep understanding of web development and advanced
            technologies, including JavaScript, React.js, Node.js, Express.js,
            Firebase, MongoDB, Vite, DaisyUI, and TailwindCSS. I am eager to
            leverage my expertise in innovative projects and collaborate with
            esteemed professionals. I hold a Bachelor of Science in Software
            Engineering.
          </p>
          <div className="flex space-x-4">
            <a
              href="/Abdullah_Sajal_Resume.pdf"
              download
              className="btn btn-outline hover:text-blue-400"
            >
              <FaDownload /> Resume
            </a>
            <Link
              to={"contact"}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-400"
              className="btn btn-outline hover:text-blue-400"
            >
              <FaHireAHelper /> Hire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
