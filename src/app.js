const excuse = document.querySelector("#excuse");
const body = document.querySelector("body");

let generateExcuse = () => {

  let who = ['The dog', 'My grandma', 'His turtle', 'My bird', "My raccoon"];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'the keys', 'the car', 'the computer'];
  let when = ['before the class', 'right on time', 'when I finished', 'during my lunch'];

  let whoIndex= Math.floor(Math.random()*who.length);
  let actionIndex= Math.floor(Math.random()*action.length);
  let whatIndex= Math.floor(Math.random()*what.length);
  let whenIndex= Math.floor(Math.random()*when.length);


  return who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex];
  
}

function sum() {
  excuse.innerHTML = generateExcuse()
}

body.addEventListener("onload", sum())