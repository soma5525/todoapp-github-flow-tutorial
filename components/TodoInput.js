class TodoInput {
  constructor(inputId, buttonId, onAdd) {
    this.input = document.getElementById(inputId);
    this.button = document.getElementById(buttonId);
    this.onAdd = onAdd;

    this.button.addEventListener("click", () => this.addTodo());
    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.addTodo();
      }
    });
  }

  addTodo() {
    const text = this.input.value.trim();
    if (text === "") return;

    this.onAdd(text);
    this.input.value = "";
    this.input.focus();
  }
}
