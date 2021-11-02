"use strict";

const messageArray = [];

const form = document.getElementById("root-form");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target: { textInput },
  } = e;
  const inputValue = textInput.value.trim();
  if(textInput.value){
    messageArray.push(inputValue);
    form.reset();
  }
  console.log(e.target.textInput.value);
});
function createElement(type, { classNames }, children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...children);
  return elem;
}
