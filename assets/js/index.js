"use strict";

// const btn = document.getElementById('btn');
// btn.addEventListener('click', btnHandler);
// function btnHandler(){

// }

// const identificator = setTimeout(()=>{
//   console.log('hi')
// },1000)

// clearTimeout(identificator);

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

//легальный цикл//
// let i=0;
// function f() {
//   console.log(i++);
//   setTimeout(() => {
//     f();
//   },0)
// }

// promise.then((response)=>{
//   console.log('ok');
//   console.log(response)
//   const jsonPromise = response.json();
//   jsonPromise.then((data)=>{
//     console.table(data)
//   })
// });

fetch("./assets/js/data.json")
  .then((Response) => Response.json())
  .then((data) => {
    // console.log(data);
    data.forEach((user) => {
      console.log(user.name);
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("end");
  });

  const myFirstPromise = new Promise(executor);

  function executor(resolve,reject){
    Math.random()>0.5?resolve():reject();
  }

  
