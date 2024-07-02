import logo from "../../assets/images/my-logo.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-400 text-white border-b">
        <div className="footer container mx-auto px-10 md:px-0 py-10">
          <aside>
            <img src={logo} alt="MaaSajal Logo" />
            <p>
              Abdullah Sajal
              <br />
              Full Stack Web Developer
              <br />
              Software Engineer
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">My Services</h6>
            <a className="link link-hover">Front-end Web Development</a>
            <a className="link link-hover">Back-end Web Development</a>
            <a className="link link-hover">Full Stack Web Development</a>
            <a className="link link-hover">MERN Stack Web Development</a>
          </nav>
          <nav>
            <h6 className="footer-title">MaaSajal</h6>
            <a href="#about" className="link link-hover">
              About Me
            </a>
            <a href="#contact" className="link link-hover">
              Contact Me
            </a>
            <a href="#experiences" className="link link-hover">
              Jobs
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Reach by Social links</h6>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://www.linkedin.com/in/maa-sajal"
                target="_blank"
                className="link link-hover"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/maasajal"
                target="_blank"
                className="link link-hover"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/maa.sajal"
                target="_blank"
                className="link link-hover"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/maasajal"
                target="_blank"
                className="link link-hover"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </nav>
        </div>
      </footer>
      <footer className="footer footer-center bg-blue-400 text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            MaaSajal
          </p>
        </aside>
      </footer>
    </div>
  );
};
export default Footer;
