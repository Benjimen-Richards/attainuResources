import React from "react";
import { connect } from "react-redux";
import { deletetodo } from "../Redux/actions";
const List = (props) => {
  return (
    <ul
      style={{
        width: "500px",
        height: "max-content",
      }}
    >
      {props.todo.map((todo, index) => (
        <div
          style={{
            display: "flex",
            padding: "10px",
            justifyContent: "space-evenly",
          }}
        >
          <ol
            key={index}
            style={{
              textAlign: "start",
            }}
          >
            {todo.message}
          </ol>
          <button onClick={() => props.dispatch(deletetodo(todo.id))}>
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};
const mapState = (state) => ({
  todo: state.todo.data,
});
export default connect(mapState)(List);
