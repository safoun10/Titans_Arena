import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          GALLERY
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allgame"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          All GAMES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          BLOGS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/support"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          SUPPORT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/eSports"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          ESPORTS
        </NavLink>
      </li>
    </>
  );

  return (
    <nav>
      <div className="navbar px-4 lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl flex items-center">
            <span className="text-md pl-2 md:text-3xl uppercase font-bold">
              logo
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 font-bold text-base">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="bt-primary font-bold">
            Log In
          </Link>
          {/* <Link to="/login" className="bt-primary font-bold">
            Sign Up
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
