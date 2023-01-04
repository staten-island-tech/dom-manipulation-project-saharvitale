//; const button = document.getElementById("btn");
//; const text = document.querySelector("#text");
//; console.log(text);
const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  //use "." for classes in querySelector
  points: document.querySelectorAll(".point"),
};

console.log(DOMSelectors);
