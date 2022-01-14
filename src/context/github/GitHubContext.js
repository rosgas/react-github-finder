import { createContext, useState } from "react";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <GitHubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
