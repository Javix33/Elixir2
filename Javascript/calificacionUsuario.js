import * as nodes from "./nodos.js";
import * as buttons from "./botones.js";

export function SolicitarCalificacion() {
  nodes.PROCEDUREANSWER.remove();
  buttons.restartButton.remove();
  buttons.buttonCalificar.remove();
  nodes.MAINCONTAINER.appendChild(nodes.NODOCALIFICACION);
  let calificacionForm = document.getElementById("calificacionForm")
  calificacionForm.appendChild(buttons.buttonEnviarCalificacion);
};
export function EnviarCalificacion() {
  let agradecimiento = `Gracias por calificarnos, pulsa "reiniciar recetario" para volver a empezar`
  let calificacionDeUsuario = document.getElementById("Calificacion");
  let userFromStorage = sessionStorage.getItem("user");
  let user = JSON.parse(userFromStorage);
  let usuarioConCalificacion = {
    ...user,
    calificacion: calificacionDeUsuario.value
  };
  let usuarioConCalificacionStringify = JSON.stringify(usuarioConCalificacion);
  sessionStorage.setItem("usuario con evaluación", usuarioConCalificacionStringify);
  nodes.NODOCALIFICACION.remove();
  swal({
      title: `${agradecimiento}`,
      icon: "success",
      button: "Continuar"
    })
    .then(() => {
      nodes.MAINCONTAINER.appendChild(buttons.restartButton);
    });
};