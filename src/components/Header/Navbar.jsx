import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/images/my-logo.png";
import { FaHireAHelper } from "react-icons/fa";
import CV from "../CV/CV";
const Navbar = () => {
  return (
    <header className="bg-[#87CEEB80] z-20 sticky top-0 w-full text-white pb-1">
      <div className="navbar py-6 container mx-auto font-PlayFair">
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
                    activeClass="text-blue-500"
                    className="text-black hover:text-blue-400"
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
          <ul className="menu menu-horizontal px-1 gap-1 uppercase font-bold">
            {navLinks.map((nav) => (
              <li key={nav.path}>
                <Link
                  to={nav.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-blue-500"
                  className="text-black hover:text-blue-400"
                >
                  {nav.navName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <CV />
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
