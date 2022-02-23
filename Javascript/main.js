//nodo principal
const MAINCONTAINER = document.getElementById("main");
//nodo welcome
let welcome = document.getElementById("welcome");
//nodo nombre
const NODONAME = document.createElement("article");
NODONAME.className = "data__inicial";
NODONAME.id = "NODONAME";
NODONAME.innerHTML = `<form class="data__inicial" action="" method="POST">
        <label class="label__input" for="nombre">
          Ingresa tu nombre
        </label>
        <input id="userName" type="text" name="nombre" placeholder="Nombre completo" required>    
        <input id="userAge" type="text" name="Edad" placeholder="Edad" required>  
      </form>`;
//nodo Fecha
let date = new Date();
let today = date.getDay();
//array
const WEEKDAYS = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
];
//propiedad length
let dayName = WEEKDAYS[today];
//nodo de producto

const PRODUCTTOUSE = document.createElement("article");
PRODUCTTOUSE.className = "data__inicial";
PRODUCTTOUSE.id = "userProduct";
PRODUCTTOUSE.innerHTML = ` <form id="productForm" action="" method="POST" class="data__inicial">
  <label class="label__input" for="producto">
    ¿Qué bebida de Elixir utilizarás? (Espadin, Naranja, Lichi o Maracuya)
  </label>
  <input type="text" name="producto" placeholder="Nombre de producto" id="seleccionProducto" required>
</form>`;
//nodo respuesta de producto
const RESPUESTAPRODUCT = document.createElement("article");
RESPUESTAPRODUCT.className = "data__inicial";
RESPUESTAPRODUCT.id = "productAnswer";
//nodo mostrar recetas
const RECIPESSHOWING = document.createElement("article");
RECIPESSHOWING.className = "data__inicial";
RECIPESSHOWING.id = "RECIPESSHOWING";
RECIPESSHOWING.innerHTML = `<aside class="receta">
  <p>
    1.- Mezcalita de limon: una deliciosa mezcla de limon y pepino con el toque especial del Mecal Espadin de Elixir
  </p>
</aside>
<aside class="receta">
  <p>
    2.- Mezcalita de jamaica: El delicioso sabor de la flor de jamaica ideal para cualquier situación.
  </p>
</aside>
<aside class="receta">
  <p>
    3.-Mezcalita de tamarindo: Delicioso sabor a tamarindo que no debes dejar de probar.
  </p>
</aside>`;
//nodo seleccion de receta
const RECIPEINPUT = document.createElement("article");
RECIPEINPUT.className = "data__inicial";
RECIPEINPUT.id = "RECIPEINPUT";
RECIPEINPUT.innerHTML = `<form id="recipeForm" class="data__inicial" action="" method="POST">
  <label class="label__input" for="receta">
    Selecciona la receta que quieres preparar ingresando unicamente el numero de la que elijas, ejemplo, para preparar una "mezcalita de jamaica" ingresa solo "2"
  </label>
  <input id="recipeSelection" type="text" name="receta" placeholder="Receta elegida" required>
</form>`;
//nodo respuesta producto
const RECIPEANSWER = document.createElement("article");
RECIPEANSWER.className = "data__inicial";
RECIPEANSWER.id = "RECIPEANSWER";
//nodo proporcion
//nodo de seleccion cantidad
const PROPORTION = document.createElement("article");
PROPORTION.className = "data__inicial";
PROPORTION.id = "PROPORTIONInput";
PROPORTION.innerHTML = `<form id="PROPORTIONForm" action="POST" class="data__inicial">
  <label class="label__input" for="volumen">
  ¿Qué cantidad en mililitros de esta receta deseas preparar?
  </label>
  <input id="ingresoPROPORTION" placeholder="ingresa cantidad en ml." type="text" name="volumen" required>
  </form>`;
//nodo respuesta proporcion
const PROPORTIONANSWER = document.createElement("article");
PROPORTIONANSWER.className = "data__inicial";
PROPORTIONANSWER.id = "PROPORTIONANSWER";
//nodo calificar
const NODOCALIFICACION = document.createElement("article");
NODOCALIFICACION.className = "data__inicial";
NODOCALIFICACION.id = "NODOCALIFICACION";
NODOCALIFICACION.innerHTML = `<form id="calificacionForm" class="data__inicial" action="" method="POST">
        <label class="label__input" for="calificación">
          Califica tu experiencia utilizando este recetario con un número del 1 al 10, donde uno es pesima y 10 es excelente
        </label>
        <input id="Calificacion" type="text" name="Calificacion" placeholder="Calificación" required>    
      </form>`;
//nodo agradecimiento
//nodo calificación
const NODOAGRADECIMIENTO = document.createElement("article");
NODOAGRADECIMIENTO.className = "data__inicial";
NODOAGRADECIMIENTO.id = "NODOAGRADECIMIENTO";
NODOAGRADECIMIENTO.innerHTML = `<form id="agradecimientoForm" class="data__inicial" action="" method="POST">
        <label class="label__input" for="calificación">
          Gracias por calificarnos, pulza "reiniciar recetario" para volver a empezar
        </label>   
      </form>`;
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
//button saludoNext
let buttonSaludoNext = document.createElement("button");
buttonSaludoNext.className = "botonIngreso";
buttonSaludoNext.id = "buttonSaludoNext";
buttonSaludoNext.innerHTML = `Siguiente`;
//boton producto
let buttonProduct = document.createElement("button");
buttonProduct.className = "botonIngreso";
buttonProduct.id = "buttonProduct";
buttonProduct.innerHTML = `Enviar`;
//boton reinicio
let restartButton = document.createElement("button");
restartButton.className = "botonIngreso";
restartButton.id = "restartButton";
restartButton.innerHTML = `<button id="buttonName" class="botonIngreso" type="submit"> 
        Reiniciar recetario
      </button>`;
restartButton.onclick = (e) => {
  RESPUESTAPRODUCT.remove();
  restartButton.remove();
  PROPORTIONANSWER.remove();
  NODOAGRADECIMIENTO.remove();
  MAINCONTAINER.appendChild(welcome);
  welcome.appendChild(buttonStart);
};
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
//boton calificar
let buttonCalificar = document.createElement("button");
buttonCalificar.className = "botonIngreso";
buttonCalificar.id = "buttonCalificar";
buttonCalificar.innerHTML = `Calificar recetario`;
//boton enviar calificacion

let buttonEnviarCalificación = document.createElement("button");
buttonEnviarCalificación.className = "botonIngreso";
buttonEnviarCalificación.id = "buttonEnviarCalificación";
buttonEnviarCalificación.innerHTML = `Enviar`;

//storage
//nombre
let userStringify = localStorage.getItem("user");

//OPTIMIZACION ASIGNACION CONDICIONAL---------------
let userStorage = JSON.parse(userStringify) || { nombre: "", edad: "" };
//desestructuración de objeto--------------------------
let { Nombre, Edad } = userStorage;

//funciones para ternario--------------

const FUNCIONIF = () => {
  NODONAME.remove();
  let saludoWelcome = `Hola ${Nombre}, hoy es ${dayName},`;
  //nodo de saludo
  let saludo = document.createElement("article");
  saludo.className = "data__inicial";
  saludo.id = "userWelcome";
  switch (today) {
    case today = 0:
      saludo.innerHTML = `<p id="saludoRespuesta">
        ${saludoWelcome} quiza no es el mejor día para beber`;
      break;
    case today = 1:
      saludo.innerHTML = `<p id="saludoRespuesta">
        ${saludoWelcome} inicio de semana, ten cuidado con tu consumo.`;
      break;
    case today = 2:
      saludo.innerHTML = `<p id="saludoRespuesta">
        ${saludoWelcome} recupera energia, con moderación.`;
      break;
    case today = 3:
      saludo.innerHTML = `<p id="saludoRespuesta">
        ${saludoWelcome} ombligo de semana un par de copas ayudarán.`;
      break;
    case today = 4:
      saludo.innerHTML = `<p id="saludoRespuesta">
        ${saludoWelcome} ya casi es fin de semana, fuerza.`;
      break;
    case today = 5:
      saludo.innerHTML = `<p id="saludoRespuesta">
        ${saludoWelcome} es viernes y el cuerpo lo sabe, si tomas no conduzcas.`;

      break;
    case today = 6:
      saludo.innerHTML = `<p id="saludoRespuesta">
        ${saludoWelcome} se nos fue la semana, tiempo de celebrar.`;

      break;
    default:
      saludo.innerHTML = `<p id="saludoRespuesta">
        ${saludoWelcome} no parece un mal dia para un poco de mezcal`;

  };
  MAINCONTAINER.appendChild(saludo);
  saludo.appendChild(buttonSaludoNext);
};
const FUNCIONELSE = () => {
  MAINCONTAINER.appendChild(NODONAME);
  NODONAME.appendChild(buttonName);
};
//verificacion storage
const VERIFICARNOMBRE = () => {

  //OPTIMIZACION OPERADOR TERNARIO--------------------

  Nombre !== undefined ? FUNCIONIF() : FUNCIONELSE();
};
//funciones
function calcularProporcion(recetaElegida, proporcion, recetaFinal) {
  for (ingrediente of recetaElegida) {
    resultado = (ingrediente = ingrediente * proporcion);
    recetaFinal.push(resultado);
  };
};
//arrays recetas
const RECIPELIMON = [
  agua = 800,
  mezcal = 64,
  jugoDeLimon = 80,
  pepino = 2,
  miel = 5
];
const RECIPEJAMAICA = [
  agua = 800,
  mezcal = 64,
  jamaica = 80,
  miel = 5
];
const RECIPETAMARINDO = [
  agua = 800,
  mezcal = 64,
  Tamarindo = 80,
  miel = 5
];
const RECIPES = [
  RECIPELIMON,
  RECIPEJAMAICA,
  RECIPETAMARINDO
];
let recetaFinal = [];



//inicio app

welcome.appendChild(buttonStart);
buttonStart.onclick = (e) => {
  e.preventDefault();
  welcome.remove();
  VERIFICARNOMBRE();
};
buttonName.onclick = (e) => {
  e.preventDefault();
  //operador OR
  let userName = Nombre || document.getElementById("userName");
  let userAge = document.getElementById("userAge");
  let user = {
    Nombre: userName.value,
    Edad: userAge.value
  };
  let userForString = JSON.stringify(user);
  userStorage = localStorage.setItem("user", userForString);
  NODONAME.remove();
  //nodo de saludo
  let saludo = document.createElement("article");
  saludo.className = "data__inicial";
  saludo.id = "userWelcome";
  let saludoWelcome = `Hola ${user?.Nombre || "usuario invitado"}, hoy es ${dayName},`;
  switch (today) {
    case today = 0:
      saludo.innerHTML = `<p id="saludoRespuesta">
          ${saludoWelcome} quiza no es el mejor día para beber`;
      break;
    case today = 1:
      saludo.innerHTML = `<p id="saludoRespuesta">
          ${saludoWelcome} inicio de semana, ten cuidado con tu consumo.`;
      break;
    case today = 2:
      saludo.innerHTML = `<p id="saludoRespuesta">
          ${saludoWelcome} recupera energia, con moderación.`;
      break;
    case today = 3:
      saludo.innerHTML = `<p id="saludoRespuesta">
          ${saludoWelcome} ombligo de semana un par de copas ayudarán.`;
      break;
    case today = 4:
      saludo.innerHTML = `<p id="saludoRespuesta">
          ${saludoWelcome} ya casi es fin de semana, fuerza.`;
      break;
    case today = 5:
      saludo.innerHTML = `<p id="saludoRespuesta">
          ${saludoWelcome} es viernes y el cuerpo lo sabe, si tomas no conduzcas.`;

      break;
    case today = 6:
      saludo.innerHTML = `<p id="saludoRespuesta">
          ${saludoWelcome} se nos fue la semana, tiempo de celebrar.`;

      break;
    default:
      saludo.innerHTML = `<p id="saludoRespuesta">
          ${saludoWelcome} no parece un mal dia para un poco de mezcal`;

  };
  MAINCONTAINER.appendChild(saludo);
  saludo.appendChild(buttonSaludoNext);
};
buttonSaludoNext.onclick = (e) => {
  e.preventDefault();
  let saludo = document.getElementById("userWelcome");
  saludo.remove();
  MAINCONTAINER.appendChild(PRODUCTTOUSE);
  let productForm = document.getElementById("productForm");
  productForm.appendChild(buttonProduct);

};
buttonProduct.onclick = (e) => {
  e.preventDefault();
  let productInput = document.getElementById("seleccionProducto");
  let userBebida = productInput.value;
  userBebida = userBebida.toLowerCase();
  if (userBebida == "naranja") {
    RESPUESTAPRODUCT.innerHTML = `<p class="contestacion">
      Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Naranja.
    </p>`;
    MAINCONTAINER.appendChild(RESPUESTAPRODUCT);
    PRODUCTTOUSE.remove();
    MAINCONTAINER.appendChild(RESPUESTAPRODUCT);
    RESPUESTAPRODUCT.appendChild(restartButton);
    RESPUESTAPRODUCT.appendChild(buttonCalificar);

  } else if (userBebida == "maracuya") {

    RESPUESTAPRODUCT.innerHTML = `<p class="contestacion">
      Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Maracuya.
    </p>`;
    MAINCONTAINER.appendChild(RESPUESTAPRODUCT);
    PRODUCTTOUSE.remove();
    MAINCONTAINER.appendChild(RESPUESTAPRODUCT);
    RESPUESTAPRODUCT.appendChild(restartButton);
    RESPUESTAPRODUCT.appendChild(buttonCalificar);

  } else if (userBebida == "lichi") {

    RESPUESTAPRODUCT.innerHTML = `<p class="contestacion">
      Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Lichi.
    </p>`;
    MAINCONTAINER.appendChild(RESPUESTAPRODUCT);
    PRODUCTTOUSE.remove();
    MAINCONTAINER.appendChild(RESPUESTAPRODUCT);
    RESPUESTAPRODUCT.appendChild(restartButton);
    RESPUESTAPRODUCT.appendChild(buttonCalificar);
  } else {
    RESPUESTAPRODUCT.innerHTML = `<p class="contestacion">
      Procedamos a preparar algo con tu Mezcal Espadin de Elixir.
    </p>`;

    PRODUCTTOUSE.remove();
    MAINCONTAINER.appendChild(RESPUESTAPRODUCT);
    MAINCONTAINER.appendChild(RESPUESTAPRODUCT);
    RESPUESTAPRODUCT.appendChild(RECIPESSHOWING);
    RESPUESTAPRODUCT.appendChild(RECIPEINPUT);
    let recipeForm = document.getElementById("recipeForm");
    recipeForm.appendChild(buttonRecipe);
  };
};
let recipeSelection;
buttonRecipe.onclick = (e) => {
  e.preventDefault();
  recipeSelection = document.getElementById("recipeSelection");
  RESPUESTAPRODUCT.remove();
  if (recipeSelection.value == 1) {
    RECIPEANSWER.innerHTML = `<p class="label__input" id="RECIPEANSWER">
      Elegiste la receta número 1 "mezcalita de limon"
    </p>`
  } else if (recipeSelection.value == 2) {
    RECIPEANSWER.innerHTML = `<p class="label__input" id="RECIPEANSWER">
      Elegiste la receta número 2 "mezcalita de jamaica"
    </p>`
  } else if (recipeSelection.value == 3) {
    RECIPEANSWER.innerHTML = `<p class="label__input"       id="RECIPEANSWER">
      Elegiste la receta número 3 "mezcalita de tamarindo"
    </p>`
  };
  MAINCONTAINER.appendChild(RECIPEANSWER);
  RECIPEANSWER.appendChild(PROPORTION);
  let PROPORTIONForm = document.getElementById("PROPORTIONForm");
  PROPORTIONForm.appendChild(buttonPROPORTION);
};
buttonPROPORTION.onclick = (e) => {
  e.preventDefault();
  let mililitrosPorPreparar = document.getElementById("ingresoPROPORTION");
  let recipeIndex = recipeSelection.value;
  recipeIndex = parseInt(recipeIndex) - 1;
  let recetaElegida = RECIPES[recipeIndex];
  let volumen = parseInt(mililitrosPorPreparar.value) / 1000;
  calcularProporcion(recetaElegida, volumen, recetaFinal);
  switch (recipeIndex) {
    case 0:
      PROPORTIONANSWER.innerHTML = `<p class="label__input">para la mezcalita de limon necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]}ml, mezcal: ${recetaFinal[1]} ml, jugo de limon: ${recetaFinal[2]} ml, pepinos: ${recetaFinal[3]} piezas, miel: ${recetaFinal[4]} cucharadas".</p>`;
      break;

    case 1:
      PROPORTIONANSWER.innerHTML = `<p class="label__input">para la mezcalita de jamaica necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]} ml, mezcal: ${recetaFinal[1]} ml, jamaica: ${recetaFinal[2]} gramos, miel: ${recetaFinal[3]} cucharadas".</p>`;
      break;
    case 2:
      PROPORTIONANSWER.innerHTML = `<p class="label__input">para la mezcalita de Tamarindo necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]} ml, mezcal: ${recetaFinal[1]} ml, Tamarindo: ${recetaFinal[2]} gramos, miel: ${recetaFinal[3]} cucharadas".</p>`;
      break;
    default:
      PROPORTIONANSWER.innerHTML = `<p class="label__input">La receta que seleccionaste es invalida, por favor refresca la pagina e intenta de nuevo.</p>`;
  };
  RECIPEANSWER.remove();
  MAINCONTAINER.appendChild(PROPORTIONANSWER);
  PROPORTIONANSWER.appendChild(restartButton);
  PROPORTIONANSWER.appendChild(buttonCalificar);
};
buttonCalificar.onclick = (e) => {
  e.preventDefault();
  PROPORTIONANSWER.remove();
  MAINCONTAINER.appendChild(NODOCALIFICACION);
  let calificacionForm = document.getElementById("calificacionForm")
  calificacionForm.appendChild(buttonEnviarCalificación);
  RESPUESTAPRODUCT.remove();

};
buttonEnviarCalificación.onclick = (e) => {
  e.preventDefault();
  let calificacionDeUsuario = document.getElementById("Calificacion");
  let userFromStorage = localStorage.getItem("user");
  let user = JSON.parse(userFromStorage);
  //OPTIMIZACIÓN SPREAD----------
  let usuarioConCalificacion = {
    ...user,
    calificacion: calificacionDeUsuario.value
  };
  let usuarioConCalificacionStringify = JSON.stringify(usuarioConCalificacion);
  localStorage.setItem("usuario con evaluación", usuarioConCalificacionStringify);
  NODOCALIFICACION.remove();
  MAINCONTAINER.appendChild(NODOAGRADECIMIENTO);
  let agradecimientoForm = document.getElementById("agradecimientoForm");
  agradecimientoForm.appendChild(restartButton);
};



/*  
  //nodo rondas
  let rondasInput = document.createElement("article");
  rondasInput.className = "data__inicial";
  rondasInput.id = "rondas";
  rondasInput.innerHTML = `<form action="POST" class="data__inicial">
<label for="caballitos" class="label__input">
¿Cuantos caballitos serviras?
</label>
<input id="caballitosInput" type="text" name: "caballitos" placeholder="Número de caballitos" required>
<button id="buttonCaballitos" class="botonIngreso">
  Enviar
</button>
</form>`

  const PROPORCIONENMILILITROS = 1000;
  volumen = volumen * PROPORCIONENMILILITROS;
  let caballitosAUsar = document.getElementById("caballitosInput");
  let caballitosPorServir = caballitosAUsar; //prompt(`tienes ${volumen} ml de esta receta ¿cuantos caballitos serviras? (solo numero)`);
  const MILITROS_POR_CABALLITO = 30;
  let mililitrosPorRonda = parseInt(caballitosPorServir) * MILITROS_POR_CABALLITO;
  //nodo respuesta rondas
  let rondasAnswer = document.createElement("article");
  rondasAnswer.className = "data__inicial";
  rondasAnswer.id = "rondasAnswer";


  function calculadorRondas(bebidaDisponible) {
    for (let i = bebidaDisponible, rondaActual = 1; i > mililitrosPorRonda; i -= mililitrosPorRonda, rondaActual++) {
      let rondasRestantes = Math.trunc((i / mililitrosPorRonda) - 1);
      let salida = `Ronda ${rondaActual} serviste ${caballitosPorServir} caballitos de mezcal te quedan ${rondasRestantes} rondas`;
      if (rondasRestantes >= rondaActual) {
        rondasAnswer.innerHTML = `<p class="label__input">${salida} eso es mas de la mitad, la noche es joven.
</p>`;
        MAINCONTAINER.append(rondasAnswer);
      } else if (rondasRestantes < rondaActual && rondasRestantes >= rondaActual / 4) {

        rondasAnswer.innerHTML = `<p class="label__input">${salida} queda menos de la mitad de tu bebida.</p>`;
        MAINCONTAINER.append(rondasAnswer);
      } else {


        rondasAnswer.innerHTML = `<p class="label__input">${salida} es momento de conseguir mas Elixir.</p>`;
        MAINCONTAINER.append(rondasAnswer);
      }
    };
  };
  calculadorRondas(volumen);
};*/