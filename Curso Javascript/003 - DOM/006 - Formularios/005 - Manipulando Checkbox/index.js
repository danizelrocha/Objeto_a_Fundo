"use strict";

const form = document.forms.namedItem("select-checkbox");// id
const submit = document.querySelector("#submit");//id
const change = document.querySelector("#change");//id

let checkedValues = [];//array vazio para que nada inicie selecionado. Criar com let para poder manipular os dados.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submit.innerHTML = checkedValues;
});

form.checkbox.forEach((element) => {
  element.addEventListener("change", (event) => {    //addEventListener o checkbox é um array para  que cada um tenha um id de inicio
    hasChecked(event, element);
    change.innerHTML = checkedValues;
  });
});

const hasChecked = (event, element) => {
  const { target } = event;

  if (target.checked) {
    return checkedValues.push(element.value);
  }

  if (!target.checked) {
    return checkedValues.map((checkdValue, index) => {
      if (element.value === checkdValue) {
        return checkedValues.splice(index, 1);
      }
    });
  }
};
