class TodoList {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(text, priority) {
    const todo = new TodoItem(text, this.nextId++, priority);
    todo.onDelete = (id) => this.deleteTodo(id);

    this.todos.push(todo);
    this.sortAndRenderTodos();
  }

  sortAndRenderTodos() {
    // 重要度でソート（高い順）
    this.todos.sort((a, b) => b.getPriorityValue() - a.getPriorityValue());

    // コンテナをクリア
    this.container.innerHTML = "";

    // ソートされたTodoを再描画
    this.todos.forEach((todo) => {
      this.container.appendChild(todo.render());
    });
  }

  deleteTodo(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      const todoElement = this.container.querySelector(`li[data-id="${id}"]`);
      if (todoElement) {
        todoElement.remove();
      }
    }
  }
}
