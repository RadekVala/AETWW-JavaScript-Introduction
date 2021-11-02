import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello from external Javascript</h1>
`;

const div = document.getElementById("app");

// what is DOM
console.log(document);

// log the div with id app element
console.log(div);

// grab the button
const buttonEl = document.querySelector("button");
// attach the event handler
buttonEl.addEventListener("click", function () {
  console.log("clicked");
  div.setAttribute("style", "opacity:0");

  // grab the input field
  const inputEl = document.querySelector("#userInput");
  var userInput = inputEl.value;
  alert("Your input is: " + userInput);
});
