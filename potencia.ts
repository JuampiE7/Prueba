import * as readlinesync from "readline-sync";

let numero1 : number = readlinesync.questionInt("Ingrese el numero base de la potencia ");
let numero2 : number = readlinesync.questionInt("Ingrese el exponente de la potencia (que sea mayor o igual a 0) ");
//let potencia : number = 1;
let resultadoFuncion : number = 0;

  function potencia (numero1:number, numero2:number): number {
   let resultado : number = -1;
    if (numero2 >= 0) {
       resultado = (numero1 ** numero2);
    }
    return resultado;
}

resultadoFuncion = potencia (numero1,numero2);
if(numero2 >= 0) {
    console.log("El resultado de la potencia es ", resultadoFuncion)
    } else {
    console.log("ERROR")
} 

/* let i : number;
for(i=0; i<numero2; i++) {
    potencia = potencia * numero1
}
console.log("El resultado de la potencia es "+ potencia); */