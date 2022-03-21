//creacion de botones
let buttonStart = document.createElement("button");
buttonStart.className = "botonIngreso";
buttonStart.id = "buttonStart";
buttonStart.innerHTML = `comenzar`;
//buttonName
let buttonName = document.createElement("button");
buttonName.className = "botonIngreso";
buttonName.id = "buttonName";
buttonName.innerHTML = `Enviar`;
//boton producto
let buttonProduct = document.createElement("button");
buttonProduct.className = "botonIngreso";
buttonProduct.id = "buttonProduct";
buttonProduct.innerHTML = `Enviar`;
//boton reinicio
let restartButton = document.createElement("button");
restartButton.className = "botonIngreso";
restartButton.id = "restartButton";
restartButton.innerHTML = `<button id="restartButton" class="botonIngreso" type="submit"> 
        Reiniciar recetario
      </button>`;
//boton seleccion receta
let buttonRecipe = document.createElement("button");
buttonRecipe.className = "botonIngreso";
buttonRecipe.id = "buttonRecipe";
buttonRecipe.innerHTML = `Enviar`;
//boton proporcion
let buttonPROPORTION = document.createElement("button");
buttonPROPORTION.className = "botonIngreso";
buttonPROPORTION.id = "buttonPROPORTION";
buttonPROPORTION.innerHTML = `Enviar`;
//boton procedimiento
let buttonProcedure = document.createElement("button");
buttonProcedure.className = "botonIngreso";
buttonProcedure.id = "buttonProcedure";
buttonProcedure.innerHTML = `Obtener preparación`;
//boton calificar
let buttonCalificar = document.createElement("button");
buttonCalificar.className = "botonIngreso";
buttonCalificar.id = "buttonCalificar";
buttonCalificar.innerHTML = `Calificar recetario`;
//boton enviar calificacion
let buttonEnviarCalificacion = document.createElement("button");
buttonEnviarCalificacion.className = "botonIngreso";
buttonEnviarCalificacion.id = "buttonEnviarCalificación";
buttonEnviarCalificacion.innerHTML = `Enviar`;

export { buttonStart, buttonName, buttonProduct, restartButton, buttonRecipe, buttonPROPORTION, buttonProcedure, buttonCalificar, buttonEnviarCalificacion };