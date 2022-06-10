//declaro las variables donde guardo los datos y la dimension del array
let cantidadButacas: number = 0;
let cantidadButacasLibres: number = 0;
let cantidadButacasOcupadas: number = 0;
let butacas: boolean[] = new Array(cantidadButacas);

//creo una funcion que crea 1 y 0 y guardo los valores de forma booleana en el array
function cargarButacasAleatorias() {
  let boolean: number;
  for (let index = 0; index < cantidadButacas; index++) {
    boolean = Math.floor(Math.random() * 2);
    if (boolean === 1) {
      butacas[index] = true;
      console.log(boolean);
    } else {
      butacas[index] = false;
    }
  }
}
//leo las butacas libres del array y las guardo en variables locales, las cuyales retorno a al finaizar el for
function contarButacas() {
  for (let index = 0; index < butacas.length; index++) {
    if (butacas[index] === true) {
      cantidadButacasOcupadas += 1;
    } else {
      cantidadButacasLibres += 1;
    }
  }
}
//llamo las funciones
cantidadButacas = Number(prompt("Ingrese la cantidad de butacas"));
cargarButacasAleatorias();
contarButacas();
console.log(
  "Las butacas libres son: ",
  cantidadButacasLibres,
  " y las Ocupadas: ",
  cantidadButacasOcupadas,
  " la cantidad de butacas del cine son: ",
  butacas.length
);
console.log(butacas);
