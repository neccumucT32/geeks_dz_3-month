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

// TAB SLIDER DZ#3

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");
let currentTabIndex = 0;

const hideTabContent = () => {
  tabContentBlocks.forEach((block) => {
    block.style.display = "none";
  });
  tabs.forEach((tab) => {
    tab.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (id = 0) => {
  tabContentBlocks[id].style.display = "block";
  tabs[id].classList.add("tab_content_item_active");
};

hideTabContent();
showTabContent(currentTabIndex);

tabsParent.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabs.forEach((tab, tabIndex) => {
      if (event.target === tab) {
        hideTabContent();
        showTabContent(tabIndex);
        currentTabIndex = tabIndex;
      }
    });
  }
};

setInterval(() => {
  currentTabIndex = (currentTabIndex + 1) % tabs.length;
  hideTabContent();
  showTabContent(currentTabIndex);
}, 3000);


