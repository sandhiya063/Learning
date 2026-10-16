import { useEffect, useState } from "react";
import { getUsers } from "./api";
import StudentCard from "./StudentCard";

function StudentList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers()
    .then((data)=>{
        setUsers(data);
    })
    .catch((error)=>{
        console.log("error",error)
    })
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      {users.slice(0,5).map((user) => (
        <StudentCard  key={user.id} user={user} />
      ))}
    </div>
  );
}

export default StudentList;