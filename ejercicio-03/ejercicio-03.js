/*
	Realice el algoritmo para calcular e informar el perímetro del triángulo
*/

console.log('%c Ejercicio 03:', 'background: #000; color: #fff')

const perimetroYAreaCuadrado = (ladoA,ladoB,base,altura)=>{
			
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

	base = Number(base)
	if(!validarNumero(base)){
		console.log("Imposible calcular el perimetro y el área del triángulo sin la base.")
		return
	}
	console.log('La Base del triángulo mide : ',base)

	altura = Number(altura)
	if(!validarNumero(altura)){
		console.log("Imposible calcular el perimetro y el área del triángulo sin la altura.")
		return
	}
	console.log('La Altura del triángulo es : ',altura)

	const perímetro = ladoA + ladoB + base;
	console.log("El perimetro del triángulo es: ",perímetro)
	const area = (base * altura) / 2;
	console.log("El Área del triángulo es: ",area)
}


const validarNumero = (numero)=>{
	
	if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null || numero === "") { 
	 
		console.log('ERROR: El dato ingresado no es un número válido.')
		
		return false
	}
		
	return	true
}

perimetroYAreaCuadrado(15,10,45,12);
