import { createContext, useReducer } from "react";
import githubReducer from "./GitHubReducers";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispach] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();

    dispach({
      type: "GET_USERS",
      payload: data,
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
