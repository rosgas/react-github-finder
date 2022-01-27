import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { MdClear } from "react-icons/md";
import UserItem from "../users/UserItem";
import Spinner from "../layout/Spinner";
import GitHubContext from "../../context/github/GitHubContext";

function UserResults() {
  const { users, loading, dispatch } = useContext(GitHubContext);

  const handleClear = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  if (!loading) {
    return (
      <AnimatePresence>
        <div className="relative">
          <button
            onClick={handleClear}
            className="absolute right-0 -translate-y-full text-lg "
          >
            Clear <MdClear className="inline" />
          </button>
          <div
            style={{ maxHeight: "calc(100vh - 300px)" }}
            className="mx-auto bg-sky-800/60 rounded-sm shadow-lg p-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden overflow-y-auto "
          >
            {users.map((user) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {" "}
                <UserItem key={user.id} user={user} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatePresence>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
