import PropTypes from "prop-types";
import { FiLink } from "react-icons/fi";
import { GoEye, GoIssueOpened } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";

function RepoItem({ repo }) {
  const {
    name,
    html_url,
    description,
    open_issues,
    forks,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <>
      <div className="p-4 mb-3 rounded-sm shadow-lg bg-gradient-to-r from-slate-200/10">
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 md:text-xl text-md"
        >
          <FiLink /> {name}
        </a>
        {description && (
          <div className="md:ml-7 ml-6 md:text-md text-sm">
            <p className="text-slate-300">{description}</p>
          </div>
        )}
        <div className="flex md:ml-7 ml-6 mt-3 gap-x-4">
          <small className="flex items-center gap-x-1 bg-cyan-200/40 text-cyan-100 px-1.5 rounded-md">
            <GoEye /> {watchers_count}
          </small>
          <small className="flex items-center gap-x-1 bg-amber-200/40 text-amber-100 px-1.5 rounded-md">
            <FaStar /> {stargazers_count}
          </small>
          <small className="flex items-center gap-x-1 bg-emerald-400/40 text-emerald-100 px-1.5 rounded-md">
            <GoIssueOpened /> {open_issues}
          </small>
          <small className="flex items-center gap-x-1 bg-pink-400/60 text-pink-200 px-1.5 rounded-md">
            <BiGitRepoForked /> {forks}
          </small>
        </div>
      </div>
    </>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
