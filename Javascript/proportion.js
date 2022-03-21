import * as nodes from "./nodos.js";
import * as buttons from "./botones.js";

//arrays recetas
const RECIPELIMON = [
  800,
  64,
  80,
  2,
  5
];
const RECIPEJAMAICA = [
  800,
  64,
  80,
  5
];
const RECIPETAMARINDO = [
  800,
  64,
  80,
  5
];
const RECIPES = [
  RECIPELIMON,
  RECIPEJAMAICA,
  RECIPETAMARINDO
];

function calcularProporcion(recetaElegida, proporcion, recetaFinal) {
  recetaElegida.forEach(element => {
    let resultado = element * proporcion;
    recetaFinal.push(resultado);
  });
};

function proportionRecipe() {
  let recipeIndex = sessionStorage.getItem("recipeIndex");
  let recetaFinal = [];
  let mililitrosPorPreparar = (document.getElementById("ingresoPROPORTION")).value;
  parseInt(mililitrosPorPreparar);
  let recetaElegida = RECIPES[recipeIndex];
  let volumen = mililitrosPorPreparar / 1000;
  calcularProporcion(recetaElegida, volumen, recetaFinal);
  let proportionAnswer;
  if (recipeIndex == 0) {
    proportionAnswer = `para la mezcalita de limon necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]}ml, mezcal: ${recetaFinal[1]} ml, jugo de limon: ${recetaFinal[2]} ml, pepinos: ${recetaFinal[3]} piezas, miel: ${recetaFinal[4]} cucharadas".`;
    nodes.PROCEDUREANSWER.innerHTML = `<p class="label__input">Para preparar la mezcalita de limon necesitaras seguir estas instrucciones </p>`;
  } else if (recipeIndex == 1) {
    proportionAnswer = `para la mezcalita de jamaica necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]} ml, mezcal: ${recetaFinal[1]} ml, jamaica: ${recetaFinal[2]} gramos, miel: ${recetaFinal[3]} cucharadas".`;
    nodes.PROCEDUREANSWER.innerHTML = `<p class="label__input">Para preparar la mezcalita de jamaica necesitaras seguir estas instrucciones </p>`;
  } else if (recipeIndex == 2) {
    proportionAnswer = `para la mezcalita de Tamarindo necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]} ml, mezcal: ${recetaFinal[1]} ml, Tamarindo: ${recetaFinal[2]} gramos, miel: ${recetaFinal[3]} cucharadas".`;
    nodes.PROCEDUREANSWER.innerHTML = `<p class="label__input">Para preparar la mezcalita de tamarindo necesitaras seguir estas instrucciones </p>`;
  };
  swal({
      title: `${proportionAnswer}`,
      icon: "success",
      button: "Continuar"
    })
    .then(() => {
      nodes.PROPORTION.remove();
      nodes.MAINCONTAINER.appendChild(nodes.PROCEDUREANSWER);
      nodes.PROCEDUREANSWER.appendChild(buttons.buttonProcedure);
    });
};
export function VerificarVolumen() {

  let mililitrosPorPreparar = (document.getElementById("ingresoPROPORTION")).value;
  if (isNaN(mililitrosPorPreparar)) {
    swal({
      title: "Ingresaste in dato invalido, por favor intenta de nuevo",
      icon: "warning",
      button: "Reintentar"
    });
  } else {
    proportionRecipe();
  };
};