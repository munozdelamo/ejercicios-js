
const cantidad = Math.ceil(Math.random()*100)
const notas = [];

for (let index = 0; index < cantidad; index++) {
    notas.push(Math.floor(Math.random()*11)) 
}

const aprobados = notas.filter((x)=> x >=4)

const porcentajeAprobados =  ( Number(aprobados.length) * 100 ) / Number(cantidad);
const porcentajeDesaprobados =   100 - porcentajeAprobados;

let suma = 0;
for (let index = 0; index < cantidad; index++) {
     suma = suma + notas[index];
}
const promedio = Number(suma) / Number(cantidad);

console.log('%c Ejercicio 25:', 'background: #000; color: #fff')
console.log('Cantidad de Alumnos: ',cantidad);
console.log('notas: ',notas);
console.log('a. El porcentaje de alumnos aprobados (nota igual o superior a 4) es: ',porcentajeAprobados);
console.log('b. El porcentaje de alumnos desaprobados (nota inferior a 4) es: ',porcentajeDesaprobados);
console.log('c. El promedio de las notas es: ',promedio);
