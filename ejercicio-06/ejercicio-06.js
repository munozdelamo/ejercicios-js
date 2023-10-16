/*
	Realice el algoritmo para calcular e informar el resto de la división entera entre los 
	valores
*/

console.log('%c Ejercicio 06:', 'background: #000; color: #fff')

const calcularResto = (num1,num2)=>{
			
	num1 = Number(num1)
	if(!validarNumero(num1)){
		console.log("Imposible calcular el el Resto de la División sin el Primer número.")
		return
	}
	console.log('El Primer número es : ',num1)

	num2 = Number(num2)
	if(!validarNumero(num2)){
		console.log("Imposible calcular el el Resto de la División sin el Segundo número.")
		return
	}
	console.log('El Segundo número es : ',num2)

	const resto = num1 % num2;
	console.log("El Resto de la división de los dos números es: ",resto);
}

const validarNumero = (numero)=>{
	
	if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null || numero === "") { 
	 
		console.log('ERROR: El dato ingresado no es un número válido.')
		
		return false
	}
		
	return	true
}


calcularResto(15,3);
