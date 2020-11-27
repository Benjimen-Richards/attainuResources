const initialstate = {
  data: [],
};
const todo = (state = initialstate, action) => {
  switch (action.type) {
    case "Add_todo":
      return {
        ...state,
        data: [
          ...state.data,
          {
            message: action.message,
            id: action.id,
          },
        ],
      };
    case "Delete_todo":
      const todo = state.data.filter((data) => data.id !== action.id);
      return {
        ...state,
        data: todo,
      };
    default:
      return state;
  }
};
export default todo;
