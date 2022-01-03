const board = document.querySelector("#board");
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
const SQUARES_NUMBER = 2592;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = "rgb(32, 32, 32)";
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}
