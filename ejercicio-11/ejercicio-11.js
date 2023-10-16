/*
	Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e 
    informar la suma y el promedio.
*/

console.log('%c Ejercicio 11:', 'background: #000; color: #fff')

const calcularSueldoTotal = ()=>{
			
	const num1 = obtenerNumero(1);
	if(!num1 && num1!==0){
		return
	}
	
	const num2 = obtenerNumero(2);
	if(!num2 && num2!==0){
		return
	}

	const num3 = obtenerNumero(3);
	if(!num3 && num3!==0){
		return
	}

	const num4 = obtenerNumero(4);
	if(!num4 && num4!==0){
		return
	}

	const suma = num1+num2+num3+num4;
	console.log("La suma de los cuatro número es: ",suma)
	const promedio = suma / 4;
	console.log("El promedio de los cuatro número es: ",promedio)
}


const validarNumero = (numero)=>{
	
	if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null || numero === "") { 
	 
		console.log('ERROR: El dato ingresado no es un número válido.')
		
		return false
	}
		
	return	true
}

const obtenerNumero=(posicion)=>{

	posicion == 1 ? (posicion = "Primer"):
	posicion == 2 ? (posicion = "Segundo"):
	posicion == 3 ? (posicion = "Tercero"):
	posicion == 4 && (posicion = "Cuarto");
	
	const num = Number(prompt("Escriba el "+posicion+" número: "))
	if(!validarNumero(num)){
		console.log("Imposible calcular la suma o el promedio.")
		return false
	}
	console.log('El ',posicion,' número es : ',num)
	return num;
}




calcularSueldoTotal();
