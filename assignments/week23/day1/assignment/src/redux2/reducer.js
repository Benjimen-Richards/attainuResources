const initialstate = ["revision"];

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Add_task":
      const todos = [...state, action.payload];
      return todos;
    case "Remove_task":
      return {};
    default:
      return state;
  }
};
export default reducer;
