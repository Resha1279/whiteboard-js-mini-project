const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let isPressed = false;

canvas.addEventListener("pointerdown", () => {
  isPressed = true;
});
window.addEventListener("pointerup", () => {
  isPressed = false;
});

canvas.addEventListener("pointermove", (e) => {
  if (isPressed) {
    const x = e.offsetX;
    const y = e.offsetY;
    drawCircle(x, y);
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}
