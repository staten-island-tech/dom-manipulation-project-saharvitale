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

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "this is a red box";
  text.style.fontSize = "40px";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);
