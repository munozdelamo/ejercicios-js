/*
	Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que 
    ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de 
    antigüedad en la empresa. Realice un programa para calcular e informar el sueldo 
    mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al 
    15% del sueldo por año de antigüedad.
*/

console.log('%c Ejercicio 13:', 'background: #000; color: #fff')

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

	const sueldoBasico = valorHora * horasPorMes
	
	const	bonoPorAntiguedad = ((sueldoBasico * 15) / 100) * antiguedad;
	console.log("El bono por la cantidad de años de antigûedad es: u$s",bonoPorAntiguedad)

	const sueldoTotal = sueldoBasico + bonoPorAntiguedad;
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
