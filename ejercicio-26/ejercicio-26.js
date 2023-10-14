

const cantidad = Math.ceil(Math.random()*100)
const numeros = [];

for (let index = 0; index < cantidad; index++) {
    numeros.push(Math.ceil(Math.random()*100)) 
}

let suma = 0;
for (let index = 0; index < numeros.length; index++) {
    suma =  suma + numeros[index];
    
}
console.log('%c Ejercicio 26:', 'background: #000; color: #fff')
console.log('Los números son: ',numeros);
console.log('La sumatoria de los ',numeros.length,'números es: ',suma);