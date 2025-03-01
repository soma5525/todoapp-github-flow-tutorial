class TodoItem {
  constructor(text, id) {
    this.text = text;
    this.id = id;
    this.completed = false;
    this.element = null;
  }

  render() {
    const li = document.createElement("li");
    li.dataset.id = this.id;
    li.className = this.completed ? "completed" : "";

    li.innerHTML = `
      <div class="todo-item">
        <span class="todo-text">${this.text}</span>
        <div class="todo-actions">
          <button class="complete-btn">${
            this.completed ? "元に戻す" : "完了"
          }</button>
          <button class="delete-btn">削除</button>
        </div>
      </div>
    `;

    // イベントリスナーを追加
    li.querySelector(".delete-btn").addEventListener("click", () => {
      this.onDelete(this.id);
    });

    li.querySelector(".complete-btn").addEventListener("click", () => {
      this.toggleComplete();
    });

    this.element = li;
    return li;
  }

  toggleComplete() {
    this.completed = !this.completed;
    this.element.className = this.completed ? "completed" : "";
    this.element.querySelector(".complete-btn").textContent = this.completed
      ? "元に戻す"
      : "完了";
  }

  onDelete(id) {
    // この関数はTodoListから設定されます
  }
}
