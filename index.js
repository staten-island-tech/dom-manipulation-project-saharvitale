//; const button = document.getElementById("btn");
//; const text = document.querySelector("#text");
//; console.log(text);
const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  //use "#" for ids in querySelector
  box: document.getElementById("big-black-box"),
  //use "." for classes in querySelector
  points: document.querySelectorAll(".point"),
};

function backgroundaTxt(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "this is a red box";
}

backgroundaTxt(DOMSelectors.box, DOMSelectors.text);
