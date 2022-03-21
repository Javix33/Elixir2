import * as nodes from "./nodos.js";
import * as buttons from "./botones.js";

export function ObtenerProducto() {
  let productInput = document.getElementById("seleccionProducto");
  let userBebida = productInput.value;
  userBebida.toLowerCase();
  return userBebida;
};
export function RespuestaProducto() {
  let userBebida = ObtenerProducto();
  let respuestaProducto;
  if (userBebida == "naranja") {
    respuestaProducto = "Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Naranja.";
    swal({
        title: `${respuestaProducto}`,
        icon: "success",
        button: "Continuar"
      })
      .then(() => {
        nodes.PRODUCTTOUSE.remove();
        nodes.MAINCONTAINER.appendChild(buttons.restartButton);
        nodes.MAINCONTAINER.appendChild(buttons.buttonCalificar);
      });
  } else if (userBebida == "maracuya") {
    respuestaProducto = "Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Maracuya.";
    swal({
        title: `${respuestaProducto}`,
        icon: "success",
        button: "Continuar"
      })
      .then(() => {
        nodes.PRODUCTTOUSE.remove();
        nodes.MAINCONTAINER.appendChild(buttons.restartButton);
        nodes.MAINCONTAINER.appendChild(buttons.buttonCalificar);
      });
  } else if (userBebida == "lichi") {
    respuestaProducto = "Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Lichi.";
    swal({
        title: `${respuestaProducto}`,
        icon: "success",
        button: "Continuar"
      })
      .then(() => {
        nodes.PRODUCTTOUSE.remove();
        nodes.MAINCONTAINER.appendChild(buttons.restartButton);
        nodes.MAINCONTAINER.appendChild(buttons.buttonCalificar);
      });
  } else if (userBebida == "espadin") {
    respuestaProducto = "Procedamos a preparar algo con tu Mezcal Espadin de Elixir.";
    swal({
        title: `${respuestaProducto}`,
        icon: "success",
        button: "Continuar"
      })
      .then(() => {
        nodes.PRODUCTTOUSE.remove();
        nodes.MAINCONTAINER.appendChild(nodes.RECIPESSHOWING);
        nodes.RECIPESSHOWING.appendChild(nodes.RECIPEINPUT);
        let recipeForm = document.getElementById("recipeForm");
        recipeForm.appendChild(buttons.buttonRecipe);
      });
  } else {
    respuestaProducto = "Ingresaste un producto invalido, por favor intentalo de nuevo";
    swal({
      title: `${respuestaProducto}`,
      icon: "warning",
      button: "Reintentar"
    });
  };
};