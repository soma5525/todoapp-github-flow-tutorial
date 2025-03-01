document.addEventListener("DOMContentLoaded", () => {
  // TodoListコンポーネントを初期化
  const todoList = new TodoList("todo-list");

  // TodoInputコンポーネントを初期化
  const todoInput = new TodoInput("input", "add-btn", (text) => {
    todoList.addTodo(text);
  });
});
