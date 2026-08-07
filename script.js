const countBtn = document.getElementById("count-btn");
const resetBtn = document.getElementById("reset-btn");

let count = 0;

function render() {
  countBtn.textContent = `Clicked ${count} time${count === 1 ? "" : "s"}`;
}

countBtn.addEventListener("click", () => {
  count += 1;
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

render();
