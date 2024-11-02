// 1.
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
