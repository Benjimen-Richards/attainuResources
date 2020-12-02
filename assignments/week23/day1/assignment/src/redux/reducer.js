import react from "react";
const initialstate = ["revision for test"];
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Add_task":
      const todos = [...state, action.payload];
      return todos;
    case "Remove":
      const todo = state.filter((user) => user !== action.payload);
      return todo;
    default:
      return state;
  }
};
export default reducer;
