function About() {
  return (
    <div className="mx-auto max-w-4xl md:bg-sky-800/60 rounded-sm md:shadow-lg p-10 text-slate-300">
      <h1 className="mb-4 md:text-3xl text-2xl text-slate-100">
        GitHub Finder
      </h1>
      <p className="">
        A <span className="text-slate-100">React.js</span> app to search GitHub
        profiles and see profile details. This app uses the{" "}
        <span className="text-slate-100">Context API</span> along with the
        <span className="text-slate-100"> useContext</span> and{" "}
        <span className="text-slate-100">useReducer hooks </span>
        for state management and is part of the
        <span className="text-slate-100"> "React Front To Back"</span> course
        from
        <a
          href="https://www.traversymedia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link text-pink-500"
        >
          {" "}
          Brad Traversy
        </a>
        .
      </p>
      <br />
      <p>
        Version: <span className="text-slate-100">1.0.0</span>
      </p>
      <p>
        Layout by:{" "}
        <a
          href="https://github.com/rosgas"
          target="_blank"
          rel="noopener noreferrer"
          className="link text-pink-500"
        >
          Rossella Gasbarri
        </a>
      </p>
      <br />
      <a
        href="https://github.com/rosgas/react-github-finder"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline btn-accent"
      >
        GitHub Repository
      </a>
    </div>
  );
}

export default About;
