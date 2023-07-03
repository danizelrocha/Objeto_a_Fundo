"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.name.value;
  const password = form.password.value;

  const formData = new FormData(form);

  formData.set("name", name);
  formData.set("password", password);

  console.log(formData.has("name")); // valida os dados
  console.log(formData.has("password"));// valida os dados

  console.log(formData.get("name")); // pega os dados
  console.log(formData.get("password")); //pega os dados

  // DELETE
  formData.delete("name");// passa a chave 
  console.log(formData.has("name"));// validar a chave

  // if (name && password) {
  //   console.log(name, password);
  //   form.submit();
  // }
});