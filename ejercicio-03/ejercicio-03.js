/*
	Realice el algoritmo para calcular e informar el perímetro del triángulo
*/

console.log('%c Ejercicio 03:', 'background: #000; color: #fff')

const perimetroTriangulo = (ladoA,ladoB,ladoC)=>{
			
	ladoA = Number(ladoA)
	if(!validarNumero(ladoA)){
		console.log("Imposible calcular el perimetro y el área del triángulo sin el Lado A.")
		return
	}
	console.log('El lado A del triángulo mide : ',ladoA)

	ladoB = Number(ladoB)
	if(!validarNumero(ladoB)){
		console.log("Imposible calcular el perimetro y el área del triángulo sin el lado B.")
		return
	}
	console.log('El lado B del triángulo mide : ',ladoB)

	ladoC = Number(ladoC)
	if(!validarNumero(ladoC)){
		console.log("Imposible calcular el perimetro y el área del triángulo sin el lado C.")
		return
	}
	console.log('El lado C del triángulo mide : ',ladoC)

	const perímetro = ladoA + ladoB + ladoC;
	console.log("El perimetro del triángulo es: ",perímetro)
	
}


const validarNumero = (numero)=>{
	
	if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null || numero === "") { 
	 
		console.log('ERROR: El dato ingresado no es un número válido.')
		
		return false
	}
		
	return	true
}

perimetroTriangulo(15,10,45);
