/*
	Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un 
    programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido 
    del usuario.
*/

console.log('%c Ejercicio 09:', 'background: #000; color: #fff')

const mensajeBienvenida = ()=>{
			
	const nombre = prompt("Escriba su Nombre: ")
	if(!validarCadena(nombre)){
		console.log("Imposible mostrar el mensaje de Bienvenida sin un Nombre.")
		return 
	}
	
	const apellido = prompt("Escriba su Apellido: ")
	if(!validarCadena(apellido)){
		console.log("Imposible mostrar el mensaje de Bienvenida sin un Apellido.")
		return 
	}
	
	console.log("Benvenido/a ",nombre," ",apellido)
}


const validarCadena = (cadena)=>{

	if (typeof(cadena) !== "string" || !Number.isNaN(Number(cadena)) || cadena === null || cadena === ""){ 
		 console.log("Error: El dato ingresado no es una cadena válida."); 
		 return false;
	}
	return true;

}

mensajeBienvenida();
