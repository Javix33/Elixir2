//obtener fecha
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
const DAY_NAME = WEEKDAYS[today];
let saludoDia;
switch (today) {
  case today = 0:
    saludoDia = `hoy es ${DAY_NAME} quiza no es el mejor día para beber`;
    break;
  case today = 1:
    saludoDia = `hoy es ${DAY_NAME} inicio de semana, ten cuidado con tu consumo.`;
    break;
  case today = 2:
    saludoDia = `hoy es ${DAY_NAME} recupera energia, con moderación.`;
    break;
  case today = 3:
    saludoDia = `hoy es ${DAY_NAME} ombligo de semana un par de copas ayudarán.`;
    break;
  case today = 4:
    saludoDia = `hoy es ${DAY_NAME} ya casi es fin de semana, fuerza.`;
    break;
  case today = 5:
    saludoDia = `hoy es ${DAY_NAME} es viernes y el cuerpo lo sabe, si tomas no conduzcas.`;

    break;
  case today = 6:
    saludoDia = `hoy es ${DAY_NAME} se nos fue la semana, tiempo de celebrar.`;
};
export default saludoDia;