import React from "react";
import Userdata from "./Userdata";

const Users = (props) => {
  const redirect = (id) => {
    props.history.push("/users/" + id);
  };
  return (
    <>
      <ul>
        {Userdata.map((data) => {
          return (
            <li key={data.id} onClick={() => redirect(data.id)}>
              {data.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Users;
