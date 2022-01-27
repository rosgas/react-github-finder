import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import RepoItem from "./RepoItem";
import Spinner from "../assets/spinner.gif";
import GitHubContext from "../../context/github/GitHubContext";

function RepoList() {
  const { repos, loading } = useContext(GitHubContext);

  if (!loading) {
    return (
      <AnimatePresence>
        <h2 className="text-2xl mb-3">Latest repositories</h2>
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <RepoItem key={repo.id} repo={repo} />
          </motion.div>
        ))}
      </AnimatePresence>
    );
  } else {
    return <Spinner />;
  }
}

export default RepoList;
