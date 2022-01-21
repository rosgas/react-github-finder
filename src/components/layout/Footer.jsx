function Footer() {
  return (
    <footer className="w-screen py-6 px-3.5 bg-sky-900/50">
      <div className="container mx-auto text-center text-slate-400 md:text-sm text-xs">
        <p className="mb-2">
          You can find the GitHub repository of this project{" "}
          <a
            href="https://github.com/rosgas/react-github-finder"
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
