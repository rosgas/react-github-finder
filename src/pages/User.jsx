import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";
import GitHubContext from "../context/github/GitHubContext";
import Spinner from "../components/layout/Spinner";
import octocat from "../components/assets/octocat.png";

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
    <div className="max-w-4xl mx-auto">
      <Link
        to="/"
        className=" block mb-2 text-emerald-300 hover:text-emerald-300/80 "
      >
        <HiArrowLeft className="inline " /> Back to search
      </Link>
      <div
        style={{ maxHeight: "calc(100vh - 220px)" }}
        className="bg-sky-800/60 rounded-sm shadow-lg md:p-10 p-5 overflow-hidden overflow-y-auto "
      >
        <div className="md:mb-10 grid grid-cols-3 md:grid-rows-2 gap-x-5 ">
          <figure className="md:row-span-3 ">
            <img
              src={avatar_url}
              alt="Profile image"
              className="md:h-auto md:w-56 rounded-full border-4 border-emerald-300/80"
            />
          </figure>
          <div className="mt-4 md:mt-0 row-span-2 md:col-span-2 col-span-3 pb-3.5">
            <h1 className="text-2xl md:text-3xl">{name}</h1>

            <h2 className="mb-3 text-xl text-slate-200/95">{login}</h2>
            {hireable && (
              <small className="inline bg-amber-200/40 text-amber-100 px-1.5 mr-2  rounded-md">
                Hireable
              </small>
            )}
            <small className="bg-amber-200/40 text-amber-100 px-1.5 rounded-md">
              {type}
            </small>
            <p className="pt-2 pb-3.5 text-slate-200/80">{bio}</p>
          </div>
          <div className="flex md:flex-row flex-col md:col-span-2 md:col-start-2 md:row-start-3 col-start-2 col-span-2 row-start-1 text-slate-200/95 justify-self-start">
            {location && (
              <h3 className="mb-1.5 md:mb-0 md:px-4 md:mr-2 md:py-2 md:rounded-sm md:shadow-lg md:bg-gradient-to-r md:from-slate-200/10">
                <MdLocationPin className="inline" /> {location}
              </h3>
            )}
            {blog && (
              <h3 className="mb-1.5 md:mb-0 md:px-4 md:mr-2 md:py-2 md:rounded-sm md:shadow-lg md:bg-gradient-to-r md:from-slate-200/10">
                <BsGlobe2 className="inline" />{" "}
                <a
                  href={`https://${blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {blog}
                </a>
              </h3>
            )}
            {twitter_username && (
              <h3 className="md:px-4 md:mr-2 md:py-2 md:rounded-sm md:shadow-lg md:bg-gradient-to-r md:from-slate-200/10">
                <FaTwitter className="inline" />{" "}
                <a
                  href={`https://twitter.com/${twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {twitter_username}
                </a>
              </h3>
            )}
          </div>
        </div>
        <div className="mb-6 grid md:grid-cols-4 grid-cols-4 gap-y-5 md:text-base text-xs">
          <div className="flex flex-col items-center">
            <div className="bg-sky-600 h-16 w-16 rounded-full flex items-center justify-center">
              {followers}
            </div>
            <h2 className="text-slate-300 mt-2">Followers</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-pink-500 h-16 w-16 rounded-full flex items-center justify-center">
              {following}
            </div>
            <h2 className="text-slate-300 mt-2">Following</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-500 h-16 w-16 rounded-full flex items-center justify-center">
              {public_repos}
            </div>
            <h2 className="text-slate-300 mt-2">Repos</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-amber-500 h-16 w-16 rounded-full flex items-center justify-center">
              {public_gists}
            </div>
            <h2 className="text-slate-300 mt-2">Gists</h2>
          </div>
        </div>
        <div className="mb-4 w-full border-t-2 border-slate-500"></div>

        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 btn btn-outline btn-accent"
        >
          <img src={octocat} alt="octocat" className="h-8 pr-2" /> Visit gitHub
          profile
        </a>
      </div>
    </div>
  );
}

export default User;
