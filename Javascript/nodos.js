  //nodo principal
  const MAINCONTAINER = document.getElementById("main");
  //nodo bienvenida
  const WELCOME = document.getElementById("welcome");
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
  //nodo de seleccion cantidad
  const PROPORTION = document.createElement("article");
  PROPORTION.className = "data__inicial";
  PROPORTION.id = "PROPORTIONInput";
  PROPORTION.innerHTML = `
  <label class="label__input" for="volumen">
  ¿Qué cantidad en mililitros de esta receta deseas preparar?
  </label>
  <input id="ingresoPROPORTION" placeholder="ingresa cantidad en ml." type="text" name="volumen" required>
  `;
  //nodo respuesta preparacion------Fetch
  const PROCEDUREANSWER = document.createElement("article");
  PROCEDUREANSWER.className = "data__inicial";
  PROCEDUREANSWER.id = "PROCEDUREANSWER";
  //nodo calificar
  const NODOCALIFICACION = document.createElement("article");
  NODOCALIFICACION.className = "data__inicial";
  NODOCALIFICACION.id = "NODOCALIFICACION";
  NODOCALIFICACION.innerHTML = `<form id="calificacionForm" class="data__inicial" action="" method="POST">
        <label class="label__input" for="calificación">
          Califica tu experiencia utilizando este recetario con un número del 1 al 10, donde 1 es pesima y 10 es excelente
        </label>
        <input id="Calificacion" type="text" name="Calificacion" placeholder="Calificación" required>    
      </form>`;
  export { MAINCONTAINER, WELCOME, NODONAME, PRODUCTTOUSE, RECIPESSHOWING, RECIPEINPUT, PROPORTION, PROCEDUREANSWER, NODOCALIFICACION };