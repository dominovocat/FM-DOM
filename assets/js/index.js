"use strict";

const messageArray = [];

const form = document.getElementById('root-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target: { textInput },
  } = e;
  const inputValue = textInput.value.trim();
  const validation = /(^[A-Z][a-z]{2,12} [A-Z][a-z]{1,17}$)/;
  const validator = /^[A-Z][a-z]{2,12} ([A-Z]\.){2}$/;
  const validationForImages = /^(\w+|\.|\-){1,}\.(jpg|png)$/
  if (validationForImages.test(inputValue)) {
    messageArray.push(inputValue);
    form.reset();
  }
  console.dir(messageArray);
});

