 /* Se le solicita al usuario que ingrese 3 números. Realice un programa para informar 
 si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno. */

console.log('%c Ejercicio 22:', 'background: #000; color: #fff');
 
 const num1 = Number(prompt("Escriba el primer número:"));
 console.log("El Primer número es: ",num1)
 const num2 = Number(prompt("Escriba el segundo número:"));
 console.log("El Segudo número es: ",num2)
 const num3 = Number(prompt("Escriba el tercer número:"));
 console.log("El Tercer número es: ",num3)

 const multiplos = (num1,num2,num3)=>{
     
     esUnNumero(num1,1)
     esUnNumero(num2,2)
     esUnNumero(num3,3)
 
     esMultiplo(num1,1) 
     esMultiplo(num2,2) 
     esMultiplo(num3,3) 
 }

const esUnNumero = (numero,posicion = 1)=>{
     
     let posicionTexto = posicionEnTexto(posicion);

     if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null ) { 
        alert("El " + posicionTexto +" dato ingresado no es un número"); 
        return confirm("¿Desea realizar otra operación?");
    }
}

const esMultiplo = (numero,posicion = 1)=>{

     let posicionTexto = posicionEnTexto(posicion);

     (numero % 3 == 0) 
     ? (numero % 5 == 0) 
     ? console.log("El " + posicionTexto +" número ingresado ", numero ,", es multiplo de 3 y 5")
     : console.log("El " + posicionTexto +" número ingresado ", numero ,", es multiplo de 3")
     : (numero % 5 == 0) 
     ? console.log("El " + posicionTexto +" número ingresado ", numero ,", es multiplo de 5")
     : console.log("El " + posicionTexto +" número ingresado ", numero ,", NO es multiplo de 3 ni de 5")
     
   
}

const posicionEnTexto = (posicion)=>{

     posicion == 1 ? (posicion = "Primer") 
     : posicion == 2 ? (posicion = "Segundo") 
     : posicion == 3 ? (posicion = "Tercer") 
     : posicion == 4 ? (posicion = "Cuarto") 
     : posicion == 5 && (posicion = "Quinto");
     
     return posicion;

}
   
multiplos(num1,num2,num3)