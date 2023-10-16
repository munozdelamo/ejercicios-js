/* 
Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si 
el valor ingresado es una vocal.
*/

console.log('%c Ejercicio 17:', 'background: #000; color: #fff');
 
const esVocal = ()=>{

 const letra = prompt("Escriba una sola letra letra :");
 console.log("La letra elegida es: ",letra)
  
if (!validarCadena(letra)) {
     return
}

 let esVocal =   letra == "a"? true
               : letra == "e"? true
               : letra == "i"? true
               : letra == "o"? true
               : letra == "u"? true
               : false;

               esVocal? console.log("La letra ",letra," es una vocal. =)")
               : console.log("La letra ",letra," NO es una vocal. =(")
}

const validarCadena = (cadena)=>{

     if (typeof(cadena) !== "string" || !Number.isNaN(Number(cadena)) || cadena === null || cadena === "" || cadena.length > 1){ 
          console.log("Error: Debe ingresar una sola letra válida."); 
          return false;
     }
     return true;

}

esVocal();