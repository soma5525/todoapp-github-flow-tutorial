class PrioritySelector {
  constructor(onPriorityChange) {
    this.buttons = document.querySelectorAll(".priority-btn");
    this.onPriorityChange = onPriorityChange;

    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        this.selectPriority(button);
      });
    });
  }

  selectPriority(selectedButton) {
    // 現在の選択を解除
    this.buttons.forEach((button) => {
      button.classList.remove("selected");
    });

    // 新しい選択を適用
    selectedButton.classList.add("selected");

    // 選択された優先度を通知
    const priority = selectedButton.dataset.priority;
    this.onPriorityChange(priority);
  }
}
