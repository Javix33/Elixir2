import * as nodes from "./nodos.js";
import * as buttons from "./botones.js";

export function Reiniciar() {
  nodes.PROCEDUREANSWER.remove();
  buttons.restartButton.remove();
  buttons.buttonCalificar.remove();
  nodes.MAINCONTAINER.appendChild(nodes.WELCOME);
  nodes.WELCOME.appendChild(buttonStart);
};