import { useEffect, useContext } from "react";
import UserItem from "../users/UserItem";
import Spinner from "../layout/Spinner";
import GitHubContext from "../../context/github/GitHubContext";

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GitHubContext);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div
        style={{ height: "calc(100vh - 300px)" }}
        className="mx-auto bg-sky-800/60 rounded-sm shadow-lg p-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden overflow-y-auto "
      >
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
