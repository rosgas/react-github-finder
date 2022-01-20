import { useState, useContext } from "react";
import { MdClear } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import GitHubContext from "../../context/github/GitHubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";

function UserSearch() {
  const [text, setText] = useState("");

  const { searchUsers } = useContext(GitHubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleReset = (e) => {
    if (text !== "") {
      setText("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter a GitHub username", "error");
    } else {
      searchUsers(text);

      setText("");
    }
  };

  return (
    <div className="mb-4">
      <form
        onSubmit={handleSubmit}
        className="form-control w-96 mx-auto -translate-y-8"
      >
        <Alert />
        <div className="relative ">
          <input
            type="text"
            placeholder="Search a GitHub user"
            className="w-full text-base pr-16 input input-accent input-bordered bg-transparent"
            value={text}
            onChange={handleChange}
          />
          {text !== "" && (
            <button
              onClick={handleReset}
              type="reset"
              className="absolute right-9 -translate-x-full translate-y-2/4 "
            >
              <MdClear className="text-2xl" />
            </button>
          )}

          <button
            type="submit"
            className="absolute top-0 right-0 rounded-l-none btn btn-accent btn-outline"
          >
            <BsSearch className="text-lg text-slate-100" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserSearch;
