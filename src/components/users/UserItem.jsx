import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="p-2 rounded bg-sky-100/10 shadow-lg ">
      <div className=" flex flex-row">
        <div className="w-14 h-14 mr-4">
          <img
            src={avatar_url}
            alt="User avatar"
            className="rounded-full border-4 border-emerald-300/60"
          />
        </div>
        <div>
          <h2>{login}</h2>
          <Link to={`user/${login}`} className="link text-slate-300 text-sm">
            Visit profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
