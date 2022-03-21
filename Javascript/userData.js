import saludoDia from "./saludoDia.js";
import * as nodes from "./nodos.js";
import * as buttons from "./botones.js";

export function guardarInfoUsuario() {
  let user = {
    Nombre: (document.getElementById("userName")).value,
    Edad: (document.getElementById("userAge")).value
  };
  return user;
};
export function userSession() {
  let userString = JSON.stringify(guardarInfoUsuario())
  sessionStorage.setItem("user", userString)
};
export function respuestaUsuario() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  let saludoRespuesta = `Hola ${user.Nombre} ${saludoDia}`
  swal({
      title: `${saludoRespuesta}`,
      icon: "success",
      button: "Continuar"
    })
    .then(() => {
      nodes.WELCOME.remove();
      nodes.NODONAME.remove()
      nodes.MAINCONTAINER.appendChild(nodes.PRODUCTTOUSE);
      let productForm = document.getElementById("productForm");
      productForm.appendChild(buttons.buttonProduct);
    });
};