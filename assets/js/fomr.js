'use strict';

const messageArray = [];

const form = document.getElementById("root-form");
const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target: { textInput },
  } = e;
  const inputValue = textInput.value.trim();
  const validation = /(^[A-Z][a-z]{2,12}$)/;
  const validator = /^[A-Z][a-z]{2,12} ([A-Z]\.){2}$/;
  const validationForImages = /^(\w+|\.|\-){1,}\.(jpg|png)$/;
  if (validation.test(inputValue) && !messageArray.includes(inputValue)) {
    messageArray.push(inputValue);
    form.reset();
    const li = createElement(
      "li",
      { classNames: ["item"] },
      document.createTextNode(inputValue)
    );
    const button = createElement(
      "button",
      {
        typeEvent: "click",
        onClick: removeData.bind(li),
        dataValue: inputValue,
      },
      document.createTextNode("X")
    );
    li.append(button);
    list.append(li);
  }
  console.dir(messageArray);
});

function removeData({
  target: {
    dataset: { value },
  },
}) {
  this.remove();
  messageArray.splice(messageArray.indexOf(value), 1);
}
function createElement(
  type,
  { dataValue = "", classNames = [], typeEvent = "", onClick = null },
  ...children
) {
  const elem = document.createElement(type);
  if (dataValue) {
    elem.dataset.value = dataValue;
  }
  if (classNames.length) {
    elem.classList.add(...classNames);
  }
  elem.addEventListener(typeEvent, onClick);
  elem.append(...children);
  return elem;
}