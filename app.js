document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", addTodo);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  function addTodo() {
    const todoText = input.value.trim();
    if (todoText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${todoText}</span>
      <button class="delete-btn">削除</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });

    todoList.appendChild(li);
    input.value = "";
    input.focus();
  }
});
