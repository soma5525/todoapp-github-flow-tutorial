class TodoList {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(text) {
    const todo = new TodoItem(text, this.nextId++);
    todo.onDelete = (id) => this.deleteTodo(id);

    this.todos.push(todo);
    this.container.appendChild(todo.render());
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
