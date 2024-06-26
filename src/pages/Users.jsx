import { useFetch } from "../hooks/useFetch";

const Users = () => {
  let users = useFetch("https://jsonplaceholder.typicode.com/users", []);
  return (
    <div>
      <h1>Aca van a ir los usuarios</h1>
      {users.map((user) => {
        return <h2 key={user.id}>{user.name}</h2>;
      })}
    </div>
  );
};

export default Users;
