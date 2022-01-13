import { useEffect, useState } from "react";
import UserItem from "../users/UserItem";
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
