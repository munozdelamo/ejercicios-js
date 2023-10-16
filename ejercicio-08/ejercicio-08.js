/*
	Realice el algoritmo para calcular e informar el perímetro y el área del círculo. Se 
	considerará para este ejercicio que el valor de PI será 3.1416
*/

console.log('%c Ejercicio 08:', 'background: #000; color: #fff')

const perimetroYArea = (diametro)=>{
			
	 diametro = Number(diametro)
	if(!validarNumero(diametro)){
		console.log("Imposible calcular el perimetro y el área del círculo sin el diámetro.")
		return
	}
	console.log('El diámetro del círculo es : ',diametro)
	
	const perímetro = 3.1416 * diametro;
	const radio = diametro / 2;
	console.log("El perimetro del círculo es: ",perímetro)
	const area = 3.1416 * (radio * radio);
	console.log("El Área del circulo es: ",area)
}


const validarNumero = (numero)=>{
	
	if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null || numero === "") { 
	 
		console.log('ERROR: El dato ingresado no es un número válido.')
		
		return false
	}
		
	return	true
}

perimetroYArea(15);
