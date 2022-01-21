import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GitHubContext from "../context/github/GitHubContext";
import Spinner from "../components/layout/Spinner";

function User() {
  const { getUser, user, loading } = useContext(GitHubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    hireable,
    type,
    name,
    login,
    bio,
    avatar_url,
    html_url,
    location,
    blog,
    twitter_username,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Link to="/" className="btn btn-outline btn-accent mb-3 ">
        Back to search
      </Link>
      <div
        style={{ maxHeight: "calc(100vh - 300px)" }}
        className=" bg-sky-800/60 rounded-sm shadow-lg p-10 overflow-hidden overflow-y-auto "
      >
        <div>{login}</div>
      </div>
    </>
  );
}

export default User;
