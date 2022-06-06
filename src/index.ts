//declaro las variables donde guardo los datos y la dimension del array
let cantidadButacas: number = 0;
let butacas: boolean[] = new Array(cantidadButacas);

//creo una funcion que crea 1 y 0 y guardo los valores de forma booleana en el array
function creoFV(butacas: boolean[]) {
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
function butacasLibres(butacas: boolean[]) {
  let libres: number = 0;
  let ocupadas: number = 0;
  for (let index = 0; index < butacas.length; index++) {
    if (butacas[index] === true) {
      libres += 1;
    } else {
      ocupadas += 1;
    }
  }
  console.log(
    "Las butacas libres son: ",
    libres,
    " y las Ocupadas: ",
    ocupadas,
    " la cantidad de butacas del cine son: ",
    butacas.length
  );
}
//llamo las funciones
cantidadButacas = Number(prompt("Ingrese la cantidad de butacas"));
creoFV(butacas);
butacasLibres(butacas);
console.log(butacas);
