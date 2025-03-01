document.addEventListener("DOMContentLoaded", () => {
  // TodoListコンポーネントを初期化
  const todoList = new TodoList("todo-list");

  // EditModalコンポーネントを初期化
  const editModal = new EditModal();

  // 編集保存時のコールバックを設定
  editModal.setOnSave((id, text, priority) => {
    todoList.updateTodo(id, text, priority);
  });

  // 編集ボタンクリック時のコールバックを設定
  todoList.setEditCallback((todo) => {
    editModal.open(todo);
  });

  // TodoInputコンポーネントを初期化
  const todoInput = new TodoInput("input", "add-btn", (text, priority) => {
    todoList.addTodo(text, priority);
  });

  // PrioritySelectorコンポーネントを初期化
  const prioritySelector = new PrioritySelector((priority) => {
    todoInput.setPriority(priority);
  });
});
