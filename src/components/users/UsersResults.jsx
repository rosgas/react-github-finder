import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();

    console.log(data);
    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="mx-auto bg-sky-800/60 rounded-sm shadow-lg p-10 text-slate-300 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {users.map((user) => (
          <h3>{user.login}</h3>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
