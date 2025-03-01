class TodoInput {
  constructor(inputId, buttonId, onAdd) {
    this.input = document.getElementById(inputId);
    this.button = document.getElementById(buttonId);
    this.onAdd = onAdd;
    this.currentPriority = "low"; // デフォルトの重要度

    this.button.addEventListener("click", () => this.addTodo());
    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.addTodo();
      }
    });
  }

  setPriority(priority) {
    this.currentPriority = priority;
  }

  addTodo() {
    const text = this.input.value.trim();
    if (text === "") return;

    this.onAdd(text, this.currentPriority);
    this.input.value = "";
    this.input.focus();
  }
}
