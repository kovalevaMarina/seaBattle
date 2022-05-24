var ships = [
  "1-a",
  "3-a",
  "4-a",
  "6-b",
  "2-c",
  "6-c",
  "2-d",
  "2-e",
  "6-f",
  "7-f",
  "8-f",
  "1-h",
  "2-h",
  "3-h",
  "4-h",
];
var fields = ["a", "b", "c", "d", "e", "f", "g", "h"];

function createBtn(tagName, clName, text) {
  var btn = document.createElement(tagName);
  btn.className = clName;
  btn.innerHTML = text;
  btn.setAttribute("data-id", text);
  var wrap = document.querySelector(".wrap");
  wrap.append(btn);
}
for (var i = 0; i < fields.length; i++) {
  for (var j = 0; j < fields.length; j++) {
    createBtn("button", "btn", j + 1 + "-" + fields[i]);
  }
}

var buttons = document.querySelectorAll(".btn");
var resultText = document.querySelector(".field-result");

function checkShip(e) {
  var elem = e.target;
  var shipCoordinate = elem.dataset.id;
  var isShip = ships.includes(shipCoordinate);
  if (isShip) {
    elem.classList.add("damaged");
    elem.innerHTML = "🔥";
    resultText.textContent = "Ранил";
  } else {
    elem.classList.add("past");
    elem.innerHTML = "🌊";
    resultText.textContent = "Мимо";
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", checkShip, { once: true });
});
