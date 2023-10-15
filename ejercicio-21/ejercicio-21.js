/* Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al 
usuario que ingrese la categoría a la que pertenece que define el sueldo básico 
mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las 
horas extras. Se sabe que: 

-Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500 más.
-Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000 más.

Realice un programa para calcular e informar el sueldo mensual del empleado, indicando si su sueldo supera o no los u$s 4000.
*/

console.log('%c Ejercicio 21:', 'background: #000; color: #fff')

const cadenasVaciasACero = (cadena)=>{

	cadena = (cadena === "") ? 0
			: cadena === null ? 0
			: Number.isNaN(Number(cadena)) ? 0	
			: cadena; 

	return cadena;
}

const categoria = cadenasVaciasACero(prompt("Escriba el número de la Categoría a la que pertenece:"))
console.log('El empleado es de Categoría : ',categoria)
let horasExtras = cadenasVaciasACero(prompt("Escriba el número de Horas Extras que trabajó:"))

console.log("El empleado realizó ",horasExtras," horas extras.")

const calcularSueldoTotal = (categoria,horasExtras)=>{
			
	if(!validarCategoria(categoria)){
		return
	}

	let sueldoBasico = basicoPorCategoria(categoria)

	if(validarHorasExtras(horasExtras)){
		return
	}


	const datosCategoria = baseDatosCategorias();
	
	for (let index = 0; index < datosCategoria.length; index++) {
		/* if(Number(categoria) == datosCategoria[index]["categoria"]){
			if(Number(horasExtras) > datosCategoria[index]["horasExtras"] && datosCategoria[index]["horasExtras"] !== null){

				sueldoBasico += datosCategoria[index]["bono"]
				console.log("El empleado recibió un bono de u$s ",datosCategoria[index]["bono"]," por las horas extras.")
			} else{
				
				console.log("El empleado no recibió bono por las horas extras.");
				
			}
		} */
		Number(categoria) == datosCategoria[index]["categoria"] 
		? (Number(horasExtras) > datosCategoria[index]["horasExtras"] && datosCategoria[index]["horasExtras"] !== null) 
		? (sueldoBasico += datosCategoria[index]["bono"], console.log("El empleado recibió un bono de u$s ",datosCategoria[index]["bono"]," por las horas extras."))
		: console.log("El empleado no recibió bono por las horas extras.")
		:"";

	}
	


	sueldoBasico > 4000 
	? console.log("El empleado tiene un sueldo total de ",sueldoBasico, " superando los u$s 4000") : console.log("El empleado tiene un sueldo total de ",sueldoBasico, " y no supera los u$s 4000") 
}

const basicoPorCategoria = (categoria = 1)=>{

	let sueldoBasico = 0;

	const datosCategoria = baseDatosCategorias();
	
	for (let index = 0; index < datosCategoria.length; index++) {
		
		if(Number(categoria) == datosCategoria[index]["categoria"]){

			sueldoBasico = datosCategoria[index]["sueldo"]
			console.log("El empleado tiene un sueldo básico de u$s ",sueldoBasico)
		}
		
	}
		
	return sueldoBasico;
}

const validarCategoria = (categoria)=>{
	
	if (typeof(Number(categoria)) !== "number" || Number.isNaN(Number(categoria)) || categoria === null) { 
	 
		console.log('Lo sentimos, no tenemos información sobre la Categoría "',categoria,'".')
		console.log('Asegurese de escribir bien su Categoría, de lo contrario lo más probable es que le hayan mentido y lo tengan en negro. Denuncielos ante la AFIP.')
		
		return 
	}
	const datosCategoria = baseDatosCategorias();
		
	for (let index = 0; index < datosCategoria.length; index++) {
			
		if(Number(categoria) == datosCategoria[index]["categoria"]){

			return true

		}
	}
	
	return	(false,console.log('Lo sentimos, no tenemos información sobre la Categoría "',categoria,'".'),console.log('Asegurese de escribir bien su Categoría, de lo contrario lo más probable es que le hayan mentido y lo tengan en negro. Denuncielos ante la AFIP.'));  
						
}

const	baseDatosCategorias = ()=>{

	 /* let categorias = [1,2,3]; */

	 let categorias = [ 
						{"categoria":1, "sueldo":2000, "horasExtras":20, "bono":500},
	 				    {"categoria":2, "sueldo":3000, "horasExtras":null, "bono":null},
						{"categoria":3, "sueldo":4000,"horasExtras":30, "bono":1000},
					  ]; 

	 return categorias;
}

const validarHorasExtras = (horasExtras)=>{
	if (typeof(Number(horasExtras)) !== "number" || Number.isNaN(Number(horasExtras)) || horasExtras === null ) { 
	 
		console.log("Las horas extras ingresadas no son válidas: ",horasExtras)
		
		
		return
	}
}


calcularSueldoTotal(categoria,horasExtras)

