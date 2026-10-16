
function StudentCard({ user }) {
  return (
    <div>
      
      <p>Name:{user.name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
     
    </div>
  );
}

export default StudentCard;