import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import UserResults from "../components/users/UsersResults";
import UserSearch from "../components/users/UserSearch";
import GitHubContext from "../context/github/GitHubContext";

function Home() {
  const { users } = useContext(GitHubContext);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <UserSearch />
        {users.length > 0 && <UserResults />}
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
