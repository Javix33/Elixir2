import * as nodes from "./nodos.js";
import * as buttons from "./botones.js";
import { VerificarUsuario } from "./start.js";
import { guardarInfoUsuario, userSession, respuestaUsuario } from "./userData.js";
import { RespuestaProducto } from "./Producto.js";
import { RecipeSelection } from "./Recipe.js";
import { VerificarVolumen } from "./proportion.js";
import { ObtainProcedures, answerProcedure } from "./procedureObtain.js";
import { EnviarCalificacion, SolicitarCalificacion } from "./calificacionUsuario.js";
import { Reiniciar } from "./restart.js";
// inicio app
nodes.WELCOME.appendChild(buttons.buttonStart);
buttons.buttonStart.onclick = () => {
  VerificarUsuario()
};
buttons.buttonName.onclick = (e) => {
  e.preventDefault();
  guardarInfoUsuario();
  userSession();
  respuestaUsuario();
};
buttons.buttonProduct.onclick = (e) => {
  e.preventDefault();
  RespuestaProducto();
};
buttons.buttonRecipe.onclick = (e) => {
  e.preventDefault();
  RecipeSelection()
};
buttons.buttonPROPORTION.onclick = () => {
  VerificarVolumen();
  ObtainProcedures();
};
buttons.buttonProcedure.onclick = () => {
  answerProcedure();
};
buttons.buttonCalificar.onclick = () => {
  SolicitarCalificacion();
};
buttons.buttonEnviarCalificacion.onclick = (e) => {
  e.preventDefault();
  EnviarCalificacion();
};
buttons.restartButton.onclick = () => {
  Reiniciar();
};