"use strict";

function createCounter(initial = 0) {
  let i = initial; //замкнутая переменная//
  return {
    increment() {
      return ++i;
    },
    decrement() {
      return --i;
    },
  };
}
const counter1 = createCounter();
const counter2 = createCounter();

const createAdder = (n) => (m) => (n += m);

const adder = createAdder(10);
console.log(adder(20));
