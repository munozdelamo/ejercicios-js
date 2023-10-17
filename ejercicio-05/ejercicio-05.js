/*
	Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo
*/

console.log('%c Ejercicio 05:', 'background: #000; color: #fff')

const perimetroYArea = (ancho, alto)=>{
			
	ancho = Number(ancho)
	if(!validarNumero(ancho)){
		console.log("Imposible calcular el perimetro y el área del rectángulo sin el ancho.")
		return
	}
	console.log('El ancho del rectángulo es : ',ancho)

	alto = Number(alto)
	if(!validarNumero(alto)){
		console.log("Imposible calcular el perimetro y el área del rectángulo sin el alto.")
		return
	}
	console.log('El alto del rectángulo es : ',alto)
	
	const perímetro = (2 * ancho) + (2 * alto);
	console.log("El perimetro del rectángulo es: ",perímetro)
	const area = ancho * alto;
	console.log("El Área del rectángulo es: ",area)
}


const validarNumero = (numero)=>{
	
	if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null || numero === "") { 
	 
		console.log('ERROR: El dato ingresado no es un número válido.')
		
		return false
	}
		
	return	true
}

perimetroYArea(15,10);
