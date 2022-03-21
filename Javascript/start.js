import * as nodes from "./nodos.js";
import * as buttons from "./botones.js";
import { respuestaUsuario } from "./userData.js";

export function solicitarInformacionUsuario() {
  nodes.WELCOME.remove();
  nodes.MAINCONTAINER.appendChild(nodes.NODONAME);
  nodes.NODONAME.appendChild(buttons.buttonName);
};
export function VerificarUsuario() {
  let userVerification = sessionStorage.getItem("user") || undefined;
  if (userVerification !== undefined) {
    respuestaUsuario();
  } else {
    solicitarInformacionUsuario();
  };
};