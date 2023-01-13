//; const button = document.getElementById("btn");
//; const text = document.querySelector("#text");
//; console.log(text);
const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  //use "#" for ids in querySelector
  box: document.getElementById("big-black-box"),
  //use "." for classes in querySelector
  points: document.querySelectorAll(".point"), //node list
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "this is a red box";
  text.style.fontSize = "40px";
}
DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  DOMSelectors.points.forEach((point) => {
    point.addEventListener("click", function () {
      point.textContent = "hello";
    });
  });
}
changeLi();
