const startBtn = document.querySelector("#start");
const timeList = document.querySelector("#time-list");
let time = 0;
const timeEl = document.querySelector("#time");
const board = document.querySelector(".board");
const screens = document.querySelectorAll(".screen");
let score = 0;
const colors = [
  "rgb(247, 58, 58)",
  "rgb(247, 219, 58)",
  "rgb(102, 247, 58)",
  "rgb(58, 247, 175)",
  "rgb(58, 134, 247)",
  "rgb(156, 58, 247)",
  "rgb(247, 58, 190)",
  "rgb(204, 35, 35)",
];

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }

  timeEl.innerHTML = `00:${current}`;
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Score: <span class='primary'>${score}</span></h1>`;
}

function createRandomCircle() {
  const circle = document.createElement("div");

  const size = getRundomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRundomNumber(0, width - size);
  const y = getRundomNumber(0, height - size);

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  const color = getRandomColor();
  circle.style.backgroundColor = color;
  circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

  board.append(circle);
}

function getRundomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// function setColor(element) {
//   const color = getRandomColor();
//   element.style.backgroundColor = color;
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
