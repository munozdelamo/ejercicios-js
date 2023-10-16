/*
	Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le 
	solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los 
	años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro 
	vendido. Realice un programa para calcular e informar el sueldo mensual del 
	empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más
	caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y 
	otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo 
	final, calcular e informar el valor promedio de la hora del empleado
*/

console.log('%c Ejercicio 14:', 'background: #000; color: #fff')

const calcularSueldoTotal = ()=>{
			
	const valorHora = Number(prompt("Escriba el el Valor de la Hora en dolares: "))
	if(!validarNumero(valorHora) || valorHora == 0){
		console.log("Imposible calcular el sueldo total sin el Valor de la Hora.")
		return
	}
	console.log('El Valor de la Hora es : u$s',valorHora)

	const horasPorMes = Number(prompt("Escriba la cantidad de Horas Trabajadas en el Mes: "))
	if(!validarNumero(horasPorMes || horasPorMes == 0)){
		console.log("Imposible calcular el sueldo total sin la cantidad de Horas Trabajadas en el Mes.")
		return
	}
	console.log('La cantidad de Horas Trabajadas en el Mes es : ',horasPorMes,'horas')
	
	const antiguedad = Number(prompt("Escriba la cantidad de Años de antigûedad: "))
	if(!validarNumero(antiguedad)){
		return
	}
	console.log('La cantidad de Años de antigûedad es : ',antiguedad,'años')

	const ventas = Number(prompt("Escriba la cantidad de ventas de seguro realizadas: "))
	if(!validarNumero(ventas)){
		return
	}
	console.log('La cantidad de ventas de seguros es : ',ventas,'seguros')

	const ventaUnitariaMaxima = Number(prompt("Escriba el valor del seguro más caro vendido en dolares: "))
	if(!validarNumero(ventaUnitariaMaxima)){
		return
	}
	console.log('El Valor del Seguro más caro vendido : u$s',ventaUnitariaMaxima)

	const sueldoBasico = valorHora * horasPorMes

	const	bonoPorVentaUnitariaMaxima = (ventaUnitariaMaxima * 50) /100;
	console.log("El bono por el valor del seguro más caro vendido es: u$s",bonoPorVentaUnitariaMaxima)
	const	bonoPorVentas = ((sueldoBasico * 25) / 100) * ventas;				
	console.log("El bono por la cantidad de seguros vendidos es: u$s",bonoPorVentas)
	const	bonoPorAntiguedad = ((sueldoBasico * 15) / 100) * antiguedad;
	console.log("El bono por la cantidad de años de antigûedad es: u$s",bonoPorAntiguedad)

	const sueldoTotal = sueldoBasico + bonoPorVentaUnitariaMaxima + bonoPorVentas + bonoPorAntiguedad;
	console.log("El Sueldo Total es: u$s",sueldoTotal)
}


const validarNumero = (numero)=>{
	
	if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null || numero === "") { 
	 
		console.log('ERROR: El dato ingresado no es un número válido.')
		
		return false
	}
		
	return	true
}

calcularSueldoTotal();
