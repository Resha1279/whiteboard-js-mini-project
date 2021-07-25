const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

const sizeinput = document.getElementById("sizeinput");

const clear = document.getElementById("clear");
const erase = document.getElementById("erase");

const color = document.getElementById("color");

let size = 20;
let isPressed = false;
let colorVal = "black";
let x1;
let y1;

canvas.addEventListener("pointerdown", (e) => {
  x1 = e.offsetX;
  y1 = e.offsetY;
  isPressed = true;
});
window.addEventListener("pointerup", () => {
  x1 = undefined;
  y1 = undefined;
  isPressed = false;
});

canvas.addEventListener("pointermove", (e) => {
  if (isPressed) {
    x2 = e.offsetX;
    y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
  }
});

increase.addEventListener("click", () => {
  size = size < 50 ? size + 5 : 50;
  sizeinput.value = size;
});

decrease.addEventListener("click", () => {
  size = size > 10 ? size - 5 : 5;
  sizeinput.value = size;
});

color.addEventListener("click", (e) => {
  colorVal = e.target.value;
});

color.addEventListener("change", (e) => {
  colorVal = e.target.value;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

erase.addEventListener("click", () => {
  colorVal = "#F5F5F5";
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = colorVal;
  ctx.strokeStyle = "black";
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = colorVal;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
