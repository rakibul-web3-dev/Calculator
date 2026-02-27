const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("btn-clear")) {
      currentInput = "";
      display.value = "0";
    } else if (button.classList.contains("btn-del")) {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput || "0";
    } else if (button.classList.contains("btn-equal")) {
      try {
        display.value = eval(currentInput.replace(/%/g, "/100"));
        currentInput = display.value;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
