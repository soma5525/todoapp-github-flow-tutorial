class TodoItem {
  constructor(text, id, priority) {
    this.text = text;
    this.id = id;
    this.priority = priority; // 'high', 'medium', 'low'
    this.completed = false;
    this.element = null;
  }

  getPriorityValue() {
    // 重要度を数値に変換（ソート用）
    const priorityValues = {
      high: 3,
      medium: 2,
      low: 1,
    };
    return priorityValues[this.priority] || 1;
  }

  getPriorityLabel() {
    const priorityLabels = {
      high: "高",
      medium: "中",
      low: "低",
    };
    return priorityLabels[this.priority] || "低";
  }

  render() {
    const li = document.createElement("li");
    li.dataset.id = this.id;
    li.className = this.completed ? "completed" : "";

    li.innerHTML = `
      <div class="todo-item">
        <span class="priority-indicator priority-${
          this.priority
        }" title="重要度: ${this.getPriorityLabel()}"></span>
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
