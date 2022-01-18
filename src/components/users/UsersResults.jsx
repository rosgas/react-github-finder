import { useContext } from "react";
import { MdClear } from "react-icons/md";
import UserItem from "../users/UserItem";
import Spinner from "../layout/Spinner";
import GitHubContext from "../../context/github/GitHubContext";

function UserResults() {
  const { users, loading, clearUsers } = useContext(GitHubContext);

  const handleClear = () => {
    clearUsers();
  };

  if (!loading) {
    return (
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
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
