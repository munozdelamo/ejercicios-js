/*
	Realice el algoritmo para calcular e informar el perímetro y el área del cuadrado
*/

console.log('%c Ejercicio 04:', 'background: #000; color: #fff')

const perimetroYAreaCuadrado = (lado)=>{
			
	lado = Number(lado)
	if(!validarNumero(lado)){
		console.log("Imposible calcular el perimetro y el área del cuadrado sin sus lados.")
		return
	}
	console.log('Los lados del cuadrado miden : ',lado)

	const perímetro = lado * 4;
	console.log("El perimetro del cuadrado es: ",perímetro)
	const area = lado * lado;
	console.log("El Área del cuadrado es: ",area)
}


const validarNumero = (numero)=>{
	
	if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null || numero === "") { 
	 
		console.log('ERROR: El dato ingresado no es un número válido.')
		
		return false
	}
		
	return	true
}

perimetroYAreaCuadrado(15);
