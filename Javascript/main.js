//nodo principal
let mainContainer = document.getElementById("main");
//inicio webapp
let usuario = document.getElementById("userName");
let user = usuario.value;
let date = new Date();
let today = date.getDay();
//array
let weekDays = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
];
//propiedad length
let dayName = weekDays[today];
let welcome = `Hola ${user}, la semana tiene ${weekDays.length} días y hoy es ${dayName},`;
//
//nodo de bienvenida
let bienvenida = document.createElement("article");
bienvenida.className = "data__inicial";
bienvenida.id = "userWelcome";
//nodo de producto

let productToUse = document.createElement("article");
productToUse.className = "data__inicial";
productToUse.id = "userProduct";
productToUse.innerHTML = ` <form action="" method="POST" class="data__inicial">
<label class="label__input" for="producto">
¿Qué bebida de Elixir utilizarás? (Espadin, Naranja, Lichi o Maracuya)
</label>
<input type="text" name="producto" placeholder="Nombre de producto" id="seleccionProducto" required>
<button id="botonProducto" class="botonIngreso" type="submit">
Enviar
</button>
</form>`

switch (today) {
  case today = 0:
    bienvenida.innerHTML = `<p id="saludoRespuesta">
    ${welcome} quiza no es el mejor día para beber`;
    mainContainer.appendChild(bienvenida);
    mainContainer.appendChild(productToUse);
    break;
  case today = 1:
    bienvenida.innerHTML = `<p id="saludoRespuesta">
    ${welcome} inicio de semana, ten cuidado con tu consumo.`;
    mainContainer.appendChild(bienvenida);
    mainContainer.appendChild(productToUse);
    break;
  case today = 2:
    bienvenida.innerHTML = `<p id="saludoRespuesta">
    ${welcome} recupera energia, con moderación.`;
    mainContainer.appendChild(bienvenida);
    mainContainer.appendChild(productToUse);
    break;
  case today = 3:
    bienvenida.innerHTML = `<p id="saludoRespuesta">
    ${welcome} ombligo de semana un par de copas ayudarán.`;
    mainContainer.appendChild(bienvenida);
    mainContainer.appendChild(productToUse);
    break;
  case today = 4:
    bienvenida.innerHTML = `<p id="saludoRespuesta">
    ${welcome} ya casi es fin de semana, fuerza.`;
    mainContainer.appendChild(bienvenida);
    mainContainer.appendChild(productToUse);
    break;
  case today = 5:
    bienvenida.innerHTML = `<p id="saludoRespuesta">
    ${welcome} es viernes y el cuerpo lo sabe, si tomas no conduzcas.`;
    mainContainer.appendChild(bienvenida);
    mainContainer.appendChild(productToUse);
    break;
  case today = 6:
    bienvenida.innerHTML = `<p id="saludoRespuesta">
    ${welcome} se nos fue la semana, tiempo de celebrar.`;
    mainContainer.appendChild(bienvenida);
    mainContainer.appendChild(productToUse);
    break;
  default:
    bienvenida.innerHTML = `<p id="saludoRespuesta">
    ${welcome} no parece un mal dia para un poco de mezcal`;
    mainContainer.appendChild(bienvenida);
    mainContainer.appendChild(productToUse);
};
//nodo respuesta de producto
let respuestaProducto = document.createElement("article");
respuestaProducto.className = "data__inicial";
respuestaProducto.id = "productAnswer";

let productSelection = document.getElementById("seleccionProducto");
let userBebida = productSelection.value;
userBebida = userBebida.toLowerCase();

//nodo mostrar recetas
let recipesShowing = document.createElement("article");
recipesShowing.className = "data__inicial";
recipesShowing.id = "recipesShowing";
recipesShowing.innerHTML = `<aside class="receta">
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
</aside>`

//nodo seleccion de receta
let recipeInput = document.createElement("article");
recipeInput.className = "data__inicial";
recipeInput.id = "recipeInput";
recipeInput.innerHTML = `<form class="data__inicial" action="" method="POST">
<label class="label__input" for="receta">
  Selecciona la receta que quieres preparar ingresando unicamente el numero de la que elijas, ejemplo, para preparar una "mezcalita de jamaica" ingresa solo 2
</label>
<input id="recipeSelection" type="text" name="receta" placeholder="Receta elegida" required>
<button id="buttonRecipe" type="submit" class="botonIngreso">
  Enviar
</button>
</form>`
  //nodo de seleccion cantidad
let proportion = document.createElement("article");
proportion.className = "data__inicial";
proportion.id = "proportionInput";
proportion.innerHTML = `<form action="POST" class="data__inicial">
<label class="label__input" for="volumen">
¿Qué cantidad en mililitros de esta receta deseas preparar?
</label>
<input id="ingresoProportion" placeholder="ingresa cantidad en ml." type="text" name="volumen" required>
<button id="buttonProportion" class="botonIngreso" type="submit">
Enviar
</button>
</form>`

if (userBebida == "naranja") {
  respuestaProducto.innerHTML = `<p class="contestacion">
  Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Naranja.
  </p>`;
  mainContainer.appendChild(respuestaProducto);
} else if (userBebida == "maracuya") {

  respuestaProducto.innerHTML = `<p class="contestacion">
  Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Maracuya.
  </p>`;
  mainContainer.appendChild(respuestaProducto);
} else if (userBebida == "lichi") {

  respuestaProducto.innerHTML = `<p class="contestacion">
  Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Lichi.
  </p>`;
  mainContainer.appendChild(respuestaProducto);

} else {
  respuestaProducto.innerHTML = `<p class="contestacion">
Procedamos a preparar algo con tu Mezcal Espadin de Elixir.
</p>`;
  mainContainer.appendChild(respuestaProducto);
  mainContainer.appendChild(recipesShowing);
  mainContainer.appendChild(recipeInput);
  mainContainer.appendChild(proportion);


  let recipeLimon = [
    agua = 800,
    mezcal = 64,
    jugoDeLimon = 80,
    pepino = 2,
    miel = 5
  ];
  let recipeJamaica = [
    agua = 800,
    mezcal = 64,
    jamaica = 80,
    miel = 5
  ];
  let receipeTamarindo = [
    agua = 800,
    mezcal = 64,
    Tamarindo = 80,
    miel = 5
  ];

  let recipes = [
    recipeLimon,
    recipeJamaica,
    receipeTamarindo
  ];
  let seleccionReceta = recipeInput.value;
  seleccionReceta = parseInt(seleccionReceta) - 1;


  let recetaElegida = recipes[0];

  let recetaFinal = [];
  let mililitrosPorPreparar = document.getElementById("ingresoProportion");

  let volumen = mililitrosPorPreparar;
  volumen = parseInt(volumen) / 1000;

  function calcularProporcion(recetaElegida, proporcion, recetaFinal) {

    for (ingrediente of recetaElegida) {
      resultado = (ingrediente = ingrediente * proporcion);
      recetaFinal.push(resultado)
    }
  };
  calcularProporcion(recetaElegida, volumen, recetaFinal);
  //respuesta proporcion
  let proportionAnswer = document.createElement("article");
  proportionAnswer.className = "data__inicial";
  proportionAnswer.id = "proportionAnswer";
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

  switch (seleccionReceta) {
    case 0:
      proportionAnswer.innerHTML = `<p class="label__input">para la mezcalita de limon necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]}ml, mezcal: ${recetaFinal[1]} ml, jugo de limon: ${recetaFinal[2]} ml, pepinos: ${recetaFinal[3]} piezas, miel: ${recetaFinal[4]} cucharadas".</p>`;
      mainContainer.append(proportionAnswer);
      mainContainer.append(rondasInput);
      break;

    case 1:
      proportionAnswer.innerHTML = `<p class="label__input">para la mezcalita de jamaica necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]} ml, mezcal: ${recetaFinal[1]} ml, jamaica: ${recetaFinal[2]} gramos, miel: ${recetaFinal[3]} cucharadas".</p>`;
      mainContainer.append(proportionAnswer);
      mainContainer.append(rondasInput);
      break;
    case 2:
      proportionAnswer.innerHTML = `<p class="label__input">para la mezcalita de Tamarindo necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]} ml, mezcal: ${recetaFinal[1]} ml, Tamarindo: ${recetaFinal[2]} gramos, miel: ${recetaFinal[3]} cucharadas".</p>`;
      mainContainer.append(proportionAnswer);
      mainContainer.append(rondasInput);
      break;
    default:
      proportionAnswer.innerHTML = `<p class="label__input">La receta que seleccionaste es invalida, por favor refresca la pagina e intenta de nuevo.</p>`;
      mainContainer.append(proportionAnswer);
  };
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
        mainContainer.append(rondasAnswer);
      } else if (rondasRestantes < rondaActual && rondasRestantes >= rondaActual / 4) {

        rondasAnswer.innerHTML = `<p class="label__input">${salida} queda menos de la mitad de tu bebida.</p>`;
        mainContainer.append(rondasAnswer);
      } else {


        rondasAnswer.innerHTML = `<p class="label__input">${salida} es momento de conseguir mas Elixir.</p>`;
        mainContainer.append(rondasAnswer);
      }
    };
  };
  calculadorRondas(volumen);
};