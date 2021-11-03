"use strict";

const btn = document.getElementById('btn');
btn.addEventListener('click', btnHandler);
function btnHandler(){

}

const identificator = setTimeout(()=>{
  console.log('hi')
},1000)

clearTimeout(identificator);


// counter();
// function counter(){
//   let i=0;
//   const id = setInterval(() => {
//     console.log(i++)
//     if(i>10){
//       clearInterval(id);
//     }
//   }, 1000);
// }

const array = [1,2,3,4,5,6,7,8,9,10]
counter2();
function counter2(){
  array.forEach(array => {
    setTimeout(() => {
      console.log(array)
    }, 5000);
  })};

  counter3();
  function counter3(){
    setTimeout(() => {
      array.forEach(e => {
        console.log()
      });
    }, 1000);
  }