/*
	Realice un algoritmo que muestre el nombre y apellido de un usuario.
*/

console.log('%c Ejercicio 01:', 'background: #000; color: #fff')

const nombreCompleto = (nombre, apellido)=>{
			
	if(!validarCadena(nombre)){
		console.log("Imposible mostrar el mensaje de Bienvenida sin un Nombre.")
		return 
	}
	

	
	if(!validarCadena(apellido)){
		console.log("Imposible mostrar el mensaje de Bienvenida sin un Apellido.")
		return 
	}
	
	console.log("El nombre completo es :",nombre,apellido)
}


const validarCadena = (cadena)=>{

	if (typeof(cadena) !== "string" || !Number.isNaN(Number(cadena)) || cadena === null || cadena === ""){ 
		 console.log("Error: El dato ingresado no es una cadena válida."); 
		 return false;
	}
	return true;

}

nombreCompleto("Francisco","Biasuso");
