class EditModal {
  constructor() {
    this.modal = document.getElementById("edit-modal");
    this.closeBtn = this.modal.querySelector(".close-btn");
    this.cancelBtn = document.getElementById("cancel-btn");
    this.saveBtn = document.getElementById("save-btn");
    this.input = document.getElementById("edit-input");

    this.priorityButtons = this.modal.querySelectorAll(".priority-btn");
    this.currentTodo = null;
    this.currentPriority = "low";

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.closeBtn.addEventListener("click", () => this.close());
    this.cancelBtn.addEventListener("click", () => this.close());

    this.saveBtn.addEventListener("click", () => {
      if (this.onSave && this.currentTodo) {
        const text = this.input.value.trim();
        if (text) {
          this.onSave(this.currentTodo.id, text, this.currentPriority);
          this.close();
        }
      }
    });

    // 優先度ボタンのイベントリスナー
    this.priorityButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.selectPriority(button.dataset.priority);
      });
    });
  }

  selectPriority(priority) {
    this.currentPriority = priority;

    // ボタンの選択状態を更新
    this.priorityButtons.forEach((button) => {
      if (button.dataset.priority === priority) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    });
  }

  open(todo) {
    this.currentTodo = todo;
    this.input.value = todo.text;
    this.selectPriority(todo.priority);

    this.modal.classList.add("show");
    this.input.focus();
  }

  close() {
    this.modal.classList.remove("show");
    this.currentTodo = null;
  }

  setOnSave(callback) {
    this.onSave = callback;
  }
}
