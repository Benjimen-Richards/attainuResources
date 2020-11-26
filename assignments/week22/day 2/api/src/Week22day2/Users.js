import Data from "./Data";
const Users = (props) => {
  const Redirect = (id) => {
    props.history.push("/users/" + id);
  };
  return (
    <ul>
      {Data.map((user) => {
        return (
          <li key={user.id} onClick={() => Redirect(user.id)}>
            {user.id}|{user.title}
          </li>
        );
      })}
    </ul>
  );
};
export default Users;
