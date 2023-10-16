/*
	Realice el algoritmo que arme y muestre el mensaje "Bienvenido", seguido del 
	nombre y apellido del usuario.
*/

console.log('%c Ejercicio 07:', 'background: #000; color: #fff')

const mensajeBienvenida = (nombre, apellido)=>{
			
	if(!validarCadena(nombre)){
		console.log("Imposible mostrar el mensaje de Bienvenida sin un Nombre.")
		return 
	}
	
	if(!validarCadena(apellido)){
		console.log("Imposible mostrar el mensaje de Bienvenida sin un Apellido.")
		return 
	}
	
	console.log("Benvenido",nombre,apellido)
}


const validarCadena = (cadena)=>{

	if (typeof(cadena) !== "string" || !Number.isNaN(Number(cadena)) || cadena === null || cadena === ""){ 
		 console.log("Error: El dato ingresado no es una cadena válida."); 
		 return false;
	}
	return true;

}

mensajeBienvenida("Francisco","Biasuso");
