class TodoItem {
  constructor(text, id, priority) {
    this.text = text;
    this.id = id;
    this.priority = priority; // 'high', 'medium', 'low'
    this.completed = false;
    this.element = null;
    this.onEdit = null; // 編集コールバック
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
          <button class="edit-btn">編集</button>
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

    li.querySelector(".edit-btn").addEventListener("click", () => {
      if (this.onEdit) {
        this.onEdit(this);
      }
    });

    // テキストをクリックしても編集モードに
    li.querySelector(".todo-text").addEventListener("click", () => {
      if (this.onEdit) {
        this.onEdit(this);
      }
    });

    // 優先度インジケーターをクリックしても編集モードに
    li.querySelector(".priority-indicator").addEventListener("click", () => {
      if (this.onEdit) {
        this.onEdit(this);
      }
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

  update(text, priority) {
    this.text = text;
    this.priority = priority;

    // 表示を更新
    const textElement = this.element.querySelector(".todo-text");
    textElement.textContent = text;

    const priorityIndicator = this.element.querySelector(".priority-indicator");
    priorityIndicator.className = `priority-indicator priority-${priority}`;
    priorityIndicator.title = `重要度: ${this.getPriorityLabel()}`;
  }

  onDelete(id) {
    // この関数はTodoListから設定されます
  }
}
