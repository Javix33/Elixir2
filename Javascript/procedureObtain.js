import * as nodes from "./nodos.js";
import * as buttons from "./botones.js";

const URL_JSON = "../Javascript/assets/preparaciones.json"
export function ObtainProcedures() {
  return fetch(URL_JSON)
    .then(resultado => resultado.json())
    .then((resultado) => {
      localStorage.setItem("recipes", JSON.stringify(resultado.Recipes))
    });
};
export function answerProcedure() {
  let recipeIndex = sessionStorage.getItem("recipeIndex");
  let procedimientos = localStorage.getItem("recipes");
  procedimientos = JSON.parse(procedimientos);
  let procedimientoRecetaElegida;
  if (recipeIndex == 0) {
    procedimientoRecetaElegida = procedimientos.Limon;
    PROCEDUREANSWER.innerHTML = `<h2 class="elixir__contenido__titulo"> 
      Paso 1
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["1"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 2
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["2"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 3
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["3"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 4
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["4"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 5
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["5"]};
    </p>
  `;
  } else if (recipeIndex == 1) {
    procedimientoRecetaElegida = procedimientos.Jamaica;
    PROCEDUREANSWER.innerHTML = `
    <h2 class="elixir__contenido__titulo"> 
      Paso 1
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["1"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 2
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["2"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 3
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["3"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 4
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["4"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 5
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["5"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 6
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["6"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 7
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["7"]};
    </p>`;
  } else if (recipeIndex == 2) {
    procedimientoRecetaElegida = procedimientos.Tamarindo;
    PROCEDUREANSWER.innerHTML = `
    <h2 class="elixir__contenido__titulo"> 
      Paso 1
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["1"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 2
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["2"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 3
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["3"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 4
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["4"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 5
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["5"]};
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 6
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["6"]}
    </p>
    <h2 class="elixir__contenido__titulo"> 
      Paso 7
    </h2>
    <p class="contestacion">
    ${procedimientoRecetaElegida["7"]}
    </p>`;
  };
  nodes.PROCEDUREANSWER.appendChild(buttons.restartButton);
  nodes.PROCEDUREANSWER.appendChild(buttons.buttonCalificar);
};