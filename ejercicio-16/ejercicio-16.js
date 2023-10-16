 /*  
     Se le solicita al usuario que ingrese un número. Realice un programa para informar 
     si el número es múltiplo de 3
 */

console.log('%c Ejercicio 16:', 'background: #000; color: #fff');
 
 const num1 = Number(prompt("Escriba un número:"));
 console.log("El número ingresado es: ",num1)
 
 const multiplos = (num1)=>{
     
     if(!esUnNumero(num1))
     {return}
     esMultiplo(num1) 
     
 }

const esUnNumero = (numero)=>{
     
     if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null ) { 
        alert("El dato ingresado no es un número válido"); 
        return false
    }

    return true
}

const esMultiplo = (numero)=>{
     (numero % 3 == 0) 
     ? console.log("El  número ingresado es multiplo de 3")
     : console.log("El  número ingresado NO es multiplo de 3")
     
   
}

   
multiplos(num1)