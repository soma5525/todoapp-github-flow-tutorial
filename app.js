document.addEventListener("DOMContentLoaded", () => {
  // TodoListコンポーネントを初期化
  const todoList = new TodoList("todo-list");

  // TodoInputコンポーネントを初期化
  const todoInput = new TodoInput("input", "add-btn", (text, priority) => {
    todoList.addTodo(text, priority);
  });

  // PrioritySelectorコンポーネントを初期化
  const prioritySelector = new PrioritySelector((priority) => {
    todoInput.setPriority(priority);
  });
});
