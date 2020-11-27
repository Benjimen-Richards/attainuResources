const Add_todo = "Add_todo";
export const addtodo = (message) => ({
  type: Add_todo,
  message: message,
  id: Math.random(),
});
const Delete_todo = "Delete_todo";
export const deletetodo = (id) => ({
  type: Delete_todo,
  id,
});
