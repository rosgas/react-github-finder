import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

function Navbar({ title }) {
  return (
    <nav className="navbar w-screen shadow-lg bg-sky-800/60 text-lg">
      <div className="container mx-auto flex flex-row items-end justify-between">
        <Link to="/" className="text-emerald-300 text-2xl flex-none">
          <FaGithub className="text-amber-200 mx-1 inline align-middle" />
          <div className="inline align-middle">{title}</div>
        </Link>

        <ul className="flex text-amber-200">
          <li>
            <Link
              className="md:mx-5 mx-2 hover:border-b-2 border-amber-200 "
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="md:mx-5 mx-2 hover:border-b-2 border-amber-200 "
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "GitHub Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
