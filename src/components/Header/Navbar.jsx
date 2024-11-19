import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/images/my-logo.png";
import { FaHireAHelper } from "react-icons/fa";
import CV from "../CV/CV";
const Navbar = () => {
  return (
    <header className="bg-blue-300 z-20 sticky top-0 md:sticky md:-top-20 hover:-top-1 transition-all duration-300 w-full">
      <div className="navbar container mx-auto font-PlayFair">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 capitalize"
            >
              {navLinks.map((nav) => (
                <li key={nav.path}>
                  <Link
                    to={nav.path}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="text-blue-600"
                    className="hover:text-blue-600 hover:bg-transparent"
                  >
                    {nav.navName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost h-full">
            <img src={logo} alt="MaaSajal Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-bold">
            {navLinks.map((nav) => (
              <li key={nav.path}>
                <Link
                  to={nav.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-blue-600"
                  className="hover:text-blue-600 hover:bg-transparent"
                >
                  {nav.navName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          {/* <CV /> */}
          <Link
            to={"contact"}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400"
            className="btn btn-outline text-white hover:text-blue-400"
          >
            <FaHireAHelper /> Hire
          </Link>
        </div>
      </div>
      <div className="md:absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[80px] border-r-[80px] md:border-t-[30px] border-transparent border-t-blue-300"></div>
    </header>
  );
};
const navLinks = [
  {
    navName: "Home",
    path: "home",
  },
  {
    navName: "About Me",
    path: "about",
  },
  {
    navName: "Skills",
    path: "skills",
  },
  {
    navName: "Projects",
    path: "projects",
  },
  {
    navName: "Experiences",
    path: "experiences",
  },
  {
    navName: "Education",
    path: "education",
  },
  {
    navName: "Contact Me",
    path: "contact",
  },
];
export default Navbar;
