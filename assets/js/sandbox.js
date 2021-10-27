"use strict";

function createCounter() {
  let i = 0;
  return function counter() {
    i++;
    return i;
  };
}
const counter1 = createCounter();