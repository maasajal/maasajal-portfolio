import logo from "../../assets/images/my-logo.png";
const Navbar = () => {
  return (
    <header className="bg-transparent">
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
                <a key={nav.path} href={nav.path}>
                  {nav.navName}
                </a>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost h-full">
            <img src={logo} alt="MaaSajal Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {navLinks.map((nav) => (
              <a key={nav.path} href={nav.path}>
                {nav.navName}
              </a>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <a href="/hire" className="btn btn-outline">Hire Me</a>
        </div>
      </div>
    </header>
  );
};
const navLinks = [
  {
    navName: "Home",
    path: "/",
  },
  {
    navName: "About Me",
    path: "#about",
  },
  {
    navName: "Education",
    path: "#education",
  },
  {
    navName: "Experiences",
    path: "#experiences",
  },
  {
    navName: "Projects",
    path: "#projects",
  },
  {
    navName: "Skills",
    path: "#skills",
  },
  {
    navName: "Contact Me",
    path: "#contact",
  },
];
export default Navbar;
