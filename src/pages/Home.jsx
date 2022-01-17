import { useContext } from "react";
import UserResults from "../components/users/UsersResults";
import UserSearch from "../components/users/UserSearch";
import GitHubContext from "../context/github/GitHubContext";

function Home() {
  const { users } = useContext(GitHubContext);
  return (
    <>
      <UserSearch />
      {users.length > 0 && <UserResults />}
    </>
  );
}

export default Home;
