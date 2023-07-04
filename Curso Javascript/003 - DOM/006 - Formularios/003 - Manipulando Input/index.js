"use strict";


//Com Submit
/* const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value;

  const newDivElement = document.createElement("div");
  newDivElement.innerText = name;

  form.nextElementSibling.remove();
  form.after(newDivElement);

}); */


//    Com input
const form = document.forms.namedItem("registration");

form.addEventListener("input", (event) => {
  event.preventDefault();

  const name = form.name.value;

  const newDivElement = document.createElement("div");
  newDivElement.innerText = name.toUpperCase();

  form.nextElementSibling.remove();
  form.after(newDivElement);
}); 