"use strict";

// function createCounter(initial = 0) {
//   let i = initial; //замкнутая переменная//
//   return {
//     increment() {
//       return ++i;
//     },
//     decrement() {
//       return --i;
//     },
//   };
// }
// const counter1 = createCounter();
// const counter2 = createCounter();

// const createAdder = (n) => (m) => (n += m);

// const adder = createAdder(10);
// console.log(adder(20));


const pattern1 = new RegExp('\\b\\w{4}\\b','gi');
const pattern2 = /\b\w{4}\b/gi;
const pattern3 = /\b(\d{4})([a-z]+)/gi;

const str = 'all 9999my troubles seemed 9999so far away';
const newStr = str.replace(pattern3,'$1')
console.log(newStr);
