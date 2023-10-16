 /*  
     Se le solicita al usuario que ingrese un número. Realice un programa para informar 
     si el número es cero, par o impar
 */

console.log('%c Ejercicio 15:', 'background: #000; color: #fff');
 
 const num = Number(prompt("Escriba un número:"));
 console.log("El número ingresado es: ",num)
 
 const ceroParOImpar = (num)=>{
     
     if(!esUnNumero(num)){
        return
     }
     esCeroParOImpar(num) 
     
 }

const esUnNumero = (numero)=>{
     
     if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null ) { 
        alert("El dato ingresado no es un número válido"); 
        return false
    }
    return true
}

const esCeroParOImpar = (numero)=>{
    numero == 0 ? console.log("El número ingresado es 0")  
    : numero % 2 == 0
     ? console.log("El número ingresado es PAR")
     : console.log("El número ingresado es IMPAR")
  
}

   
ceroParOImpar(num)