import { useContext } from "react";
import RepoItem from "./RepoItem";
import Spinner from "../assets/spinner.gif";
import GitHubContext from "../../context/github/GitHubContext";

function RepoList() {
  const { repos, loading } = useContext(GitHubContext);

  if (!loading) {
    return (
      <>
        <h2 className="text-2xl mb-3">Latest repositories</h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </>
    );
  } else {
    return <Spinner />;
  }
}

export default RepoList;
