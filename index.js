//; const button = document.getElementById("btn");
//; const text = document.querySelector("#text");
//; console.log(text);
const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  empty: document.querySelector(".nothing"),
  //use "." for classes in querySelector
  point: document.querySelectorAll(".point"),
};
console.log(DOMSelectors);
