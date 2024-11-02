// // Regular expressions -регулярные выражения

// // flags - i, g, m, y
// // i - ignoreCase
// // g - global
// // m - multiLine

// Спецсимволы
//  \d = [0-9]

// const name = prompt()

// const regExp = /n/ig

// console.log(name(match(regExp)));

const numbers = "0123456789";

// const regExp = /[0-9]/g;

// const regExp = /\d/g;

console.log(numbers.replace(regExp, "*"));

// console.log(numbers.match(regExp));

// PHONE CHECKER

// const phoneInput = document.querySelector("#phone_input");
// const phoneButton = document.querySelector("#phone_Button");
// const phoneResult = document.querySelector("#phone_result");

// const regExp = /\+996 [2579] [0-9] \d{2}-\d{2}-\d{2}-\d{2}$/;

// phoneButton.onclick = () => {
//   if (regExp.test(phoneInput.value)) {
//     phoneResult.innerHTML = "OK";
//     phoneResult.style.color = "green";
//   } else {
//     phoneResult.innerHTML = "not OK";
//     phoneResult.style.color = "red";
//   }
// };
