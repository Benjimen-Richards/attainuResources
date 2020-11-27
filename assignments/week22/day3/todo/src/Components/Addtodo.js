import React from "react";
import { connect } from "react-redux";
import { addtodo } from "../Redux/actions";

const Addtodo = (props) => {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let value = event.target.inputtext.value;
          props.dispatch(addtodo(value));
          event.target.inputtext.value = "";
        }}
      >
        <input type="text" name="inputtext" />
        <button>submit</button>
      </form>
    </>
  );
};
export default connect()(Addtodo);
