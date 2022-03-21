import * as nodes from "./nodos.js";
import * as buttons from "./botones.js";

export function RecipeSelection() {
  let recipeSelection = document.getElementById("recipeSelection");
  parseInt(recipeSelection);
  let recipeAnswer;
  if (recipeSelection.value == 1) {
    recipeAnswer = `Elegiste la receta número 1 "mezcalita de Limon"`;
    swal({
        title: `${recipeAnswer}`,
        icon: "success",
        button: "Continuar"
      })
      .then(() => {
        nodes.RECIPESSHOWING.remove();
        nodes.MAINCONTAINER.appendChild(nodes.PROPORTION);
        nodes.PROPORTION.appendChild(buttons.buttonPROPORTION);
      });
  } else if (recipeSelection.value == 2) {
    recipeAnswer = `Elegiste la receta número 2 "mezcalita de Jamaica"`;
    swal({
        title: `${recipeAnswer}`,
        icon: "success",
        button: "Continuar"
      })
      .then(() => {
        nodes.RECIPESSHOWING.remove();
        nodes.MAINCONTAINER.appendChild(nodes.PROPORTION);
        nodes.PROPORTION.appendChild(buttons.buttonPROPORTION);
      });
  } else if (recipeSelection.value == 3) {
    recipeAnswer = `Elegiste la receta número 3 "mezcalita de Tamarindo"`;
    swal({
        title: `${recipeAnswer}`,
        icon: "success",
        button: "Continuar"
      })
      .then(() => {
        nodes.RECIPESSHOWING.remove();
        nodes.MAINCONTAINER.appendChild(nodes.PROPORTION);
        nodes.PROPORTION.appendChild(buttons.buttonPROPORTION);
      });
  } else {
    recipeAnswer = `Ingresaste un número que no corresponde a ninguna receta, por favor intentalo de nuevo`;
    swal({
      title: `${recipeAnswer}`,
      icon: "warning",
      button: "Reintentar"
    });
  };
  sessionStorage.setItem("recipeIndex", (recipeSelection.value) - 1);
};