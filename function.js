const todos = [
  { id: 1, task: "HTML I", isCompleted: true },
  { id: 2, task: "CSS", isCompleted: true },
  { id: 3, task: "JS", isCompleted: false },
  { id: 4, task: "BOTSTRAP", isCompleted: true },
  { id: 5, task: "REACT", isCompleted: false },
  { id: 6, task: "HTML II", isCompleted: true },
];

//function declaration;
/**
 * @param {Object} todo Todo;
 * @param {string} todo.task;
 * @param {boolean} todo.isCompleted;
 * @returns {Array} todo[] todos
 */
function addTodo(todo) {
  if (!todo) throw new Error("todo should be used todo type");
  const todosLength = todos.length;
  const newTodo = { id: todosLength + 1, ...todo };
  return todos.push(newTodo);
}

//arrow function
const deleteTodo = (id) => {
  todos.splice(
    todos.findIndex((e) => e.id === id),
    1
  );
  return todos;
};

console.log({ todos });
deleteTodo(5);

const allStatus = false;
((allStatus) => {
  todos.map((todo) => {
    todo.isCompleted = allStatus;
    return todo;
  });
})(allStatus);

console.log({ todos });
