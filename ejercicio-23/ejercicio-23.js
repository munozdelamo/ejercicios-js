console.log('%c Ejercicio 23:', 'background: #000; color: #fff');
 
 const minimo = Number(prompt("Elija un valor mínimo para el rango:"));
 console.log("El Mínimo del rango es: ",minimo)
 let maximo = Number(prompt("Elija un valor máximo para el rango (de al menos\n 5 números de diferencia con respecto al mínimo):"));
 
 (maximo - minimo < 5 ) ? ((maximo = minimo + 5),console.log("El Máximo del rango es: ",maximo))
 : console.log("El Máximo del rango es: ",maximo)
 
 


 const cantidad = Math.ceil(Math.random()*100)
 console.log("La cantidad de valores desconocidos es: ",cantidad)
const numeros = []

for (let index = 0; index < cantidad; index++) {
   
    let aleatorio = Math.floor(Math.random()*maximo);
     numeros.push(aleatorio);
    
}
console.log("Los valores desconocidos son: ",numeros) 
for (let index = 0; index < numeros.length; index++) {
     (numeros[index] >= minimo && numeros[index] <= maximo) 
     ? (numeros[index] % 2 == 0) && console.log("El Número: ",numeros[index]," es PAR.")
     : (numeros[index] % 2 == 1) && console.log("El Número: ",numeros[index]," es IMPAR.")
    
}


