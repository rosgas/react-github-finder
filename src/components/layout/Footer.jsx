import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-screen py-6 bg-sky-900/50">
      <div className="container mx-auto text-center text-slate-400 text-sm">
        <p>
          You can find the GitHub repository of this coding project{" "}
          <a
            href="https://github.com/rosgas/react-github-finder"
            target="_blank"
            className="link"
          >
            here
          </a>
        </p>
        <p>
          Background vector created by freepik -{" "}
          <a
            href="https://www.freepik.com/vectors/background"
            target="_blank"
            className="link"
          >
            www.freepik.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
