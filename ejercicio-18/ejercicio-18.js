/* 
Se le solicita al usuario que ingrese los extremos de un rango numérico y un 
número. Realice un programa para informar si el número está dentro del rango.

Si está en rango, informar si el número es par.

Si no está dentro del rango, informar si es número es impar.

Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números 
enteros
*/

console.log('%c Ejercicio 18:', 'background: #000; color: #fff');
 
const parOImparEnUnRango = ()=>{

 const minimo = Number(prompt("Elija un valor mínimo para el rango:"));
 console.log("El Mínimo del rango es: ",minimo)
 let maximo = Number(prompt("Elija un valor máximo para el rango (de al menos\n 5 números de diferencia con respecto al mínimo):"));
 
 (maximo - minimo < 5 ) ? ((maximo = minimo + 5),console.log("El Máximo del rango es: ",maximo))
 : console.log("El Máximo del rango es: ",maximo)
 
 const numero =  Number(prompt("Escriba un número para verificar: "));
 console.log("El número a verificar es: ",numero)

 if(!validarNumero(minimo) || !validarNumero(maximo) || !validarNumero(numero)){
     return
 }
     (numero >= minimo && numero <= maximo) 
     ? (numero % 2 == 0) && console.log("El Número: ",numero," es PAR.")
     : (numero % 2 == 1) && console.log("El Número: ",numero," es IMPAR.")
}

const validarNumero = (numero)=>{

     if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null ) { 
          console.log("Error: Los datos ingresados deben ser números válidos."); 
          return false;
     }
     return true;
}

parOImparEnUnRango();