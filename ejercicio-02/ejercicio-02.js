/*
	Realice un algoritmo que muestre el promedio de 3 notas
*/

console.log('%c Ejercicio 02:', 'background: #000; color: #fff')

const perimetroYAreaCuadrado = (nota1,nota2,nota3)=>{
			
	nota1 = Number(nota1)
	if(!validarNumero(nota1)){
		console.log("Imposible calcular el promedio sin la nota 1.")
		return
	}
	console.log('La nota 1 es : ',nota1)

	nota2 = Number(nota2)
	if(!validarNumero(nota2)){
		console.log("Imposible calcular el promedio sin la nota 2.")
		return
	}
	console.log('La nota 2 es : ',nota2)

	nota3 = Number(nota3)
	if(!validarNumero(nota3)){
		console.log("Imposible calcular el promedio sin la nota 3.")
		return
	}
	console.log('La nota 3 es : ',nota3)

	
	const suma = nota1 + nota2 + nota3;
	console.log("La suma de las 3 notas es: ",suma)
	const promedio = suma / 3
	console.log("El promedio de las 3 notas es : ",promedio)
}


const validarNumero = (numero)=>{
	
	if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null || numero === "") { 
	 
		console.log('ERROR: El dato ingresado no es un número válido.')
		
		return false
	}
		
	return	true
}

perimetroYAreaCuadrado(7,10,2);
