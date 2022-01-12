import { Link } from "react-router-dom";
import ErrorImg from "../components/assets/not-found.png";

function NotFound() {
  return (
    <div className="flex mx-auto max-w-5xl bg-sky-800/60 rounded-sm shadow-lg p-10 text-slate-300">
      <div className="basis-3/5 flex flex-col items-center justify-center">
        <img src={ErrorImg} alt="404 Error" className="mb-4" />
        <a
          href="https://www.freepik.com/vectors/website"
          className="text-xs text-slate-400"
        >
          Website vector created by stories - www.freepik.com
        </a>
      </div>
      <div className="basis-2/5">
        <h2 className="uppercase font-semibold text-slate-200 text-3xl mb-3">
          Something <br /> went <span className="">wrong</span>
        </h2>
        <p className="max-w-xs mb-6">
          We couldn't find what you're looking for. <br /> It looks you are
          trying to access a page that either has been deleted or never been
          existed.
        </p>
        <Link to="/" className="btn btn-secondary">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
