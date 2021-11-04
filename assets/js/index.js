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


const user = {
  name: 'Elon',
  sname: 'Musk',
  age:50,
  getFuulName(){
    return `${this.name} ${this.sname}`;
  },
  children:[1,2,3,'one','two'],
  isAdult:true,
  hasPet:undefined,
  isUkraine:null,
  [Symbol('chepuha')]:123,
  friends:{
    friend:'Tom',
    firend2:'Tim',
  }
}

const serializeUser = JSON.stringify(user);
console.log(serializeUser)

const deserializeUser = JSON.parse(serializeUser);
console.log(deserializeUser);


const obj = {
  string:'',
  number:123,
  logic:true,
  nothink:null,
  somethink:undefined,
  massiv:['one','two',1,2,3]
}
console.log(obj);

const serializeObj = JSON.stringify(obj);
console.log(serializeObj)

const deserializeObj = JSON.parse(serializeObj);
console.log(deserializeObj);