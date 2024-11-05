// 1. DZ#1
const gmailButton = document.querySelector("#gmail_button");
const gmailInput = document.querySelector("#gmail_input");
const gmailResult = document.querySelector("#gmail_result");

function checkGmail() {
  const email = gmailInput.value;
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (email && gmailRegex.test(email)) {
    gmailResult.textContent = "Валидный Gmail!";
    gmailResult.style.color = "green";
  } else if (email === "") {
    gmailResult.textContent = "Пожалуйста, введите адрес Gmail!";
    gmailResult.style.color = "orange";
  } else {
    gmailResult.textContent = "Неверный формат Gmail!";
    gmailResult.style.color = "red";
  }
}

// 2.
gmailButton.addEventListener("click", checkGmail);

const child = document.querySelector(".child_block");

let position = 0;

const moveChild = () => {
  position += 5;
  child.style.left = `${position}px`;

  if (position < 448) {
    setTimeout(moveChild, 30);
  }
};
moveChild();

// 1. DZ#2
const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0,
  positionY = 0;

// console.log( parentBlock.offsetWidth - childBlock.offsetWidth);

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
  if (positionX < offsetWidth && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
    requestAnimationFrame(moveBlock);
  } else if (positionX >= offsetWidth && positionY < offsetHeight) {
    positionY++;
    childBlock.style.top = `${positionY}px`;
    requestAnimationFrame(moveBlock);
  } else if (positionY >= offsetHeight && positionX > 0) {
    positionX--;
    childBlock.style.left = `${positionX}px`;
    requestAnimationFrame(moveBlock);
  } else if (positionX === 0 && positionY > 0) {
    positionY--;
    childBlock.style.top = `${positionY}px`;
    requestAnimationFrame(moveBlock);
  }
};
moveBlock();

// 2. 
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");
const secondsDisplay = document.getElementById("seconds");

let counter = 0;
let intervalId = null;

function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      counter++;
      secondsDisplay.textContent = counter;
    }, 1000);
  }
}
function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}
function resetTimer() {
  stopTimer();
  counter = 0;
  secondsDisplay.textContent = counter;
}

btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);
