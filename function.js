const todos = [
  { id: 1, task: "HTML I", isCompleted: true },
  { id: 2, task: "CSS", isCompleted: true },
  { id: 3, task: "JS", isCompleted: false },
  { id: 4, task: "BOTSTRAP", isCompleted: true },
  { id: 5, task: "REACT", isCompleted: false },
  { id: 6, task: "HTML II", isCompleted: true },
];

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
