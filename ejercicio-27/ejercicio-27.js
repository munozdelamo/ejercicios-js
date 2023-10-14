// Como resultado de una encuesta se recogen los los siguientes datos:
// Sexo (H: hombre, M: Mujer), edad (en años) y altura (en centimetros).
// Realice un programa  para calcular e informar:
// a. El procentaje de mujeres mayores a 25 años.
// b. El El promedio de edad de las mujeres.
// c. El promedio de altura de las mujeres.
// d. El promedio de altura de los hombres.
// e. La menor edad ingresada.
// f. La mayor altura ingresada.	

let muestra = [ {"Sexo": "M", "Edad":17, "Altura": 165},
				{"Sexo": "H", "Edad":26, "Altura": 170},
				{"Sexo": "H", "Edad":30, "Altura": 167},
				{"Sexo": "H", "Edad":38, "Altura": 163},
				{"Sexo": "M", "Edad":32, "Altura": 170},
				{"Sexo": "H", "Edad":46, "Altura": 173},
				{"Sexo": "M", "Edad":16, "Altura": 168},
				{"Sexo": "H", "Edad":22, "Altura": 181},
				{"Sexo": "H", "Edad":51, "Altura": 177},
				{"Sexo": "M", "Edad":50, "Altura": 162},
				{"Sexo": "M", "Edad":22, "Altura": 165},
				{"Sexo": "M", "Edad":30, "Altura": 165},
				{"Sexo": "M", "Edad":17, "Altura": 155},
				{"Sexo": "H", "Edad":21, "Altura": 182},
				{"Sexo": "H", "Edad":22, "Altura": 179},
				{"Sexo": "H", "Edad":29, "Altura": 178},
				{"Sexo": "M", "Edad":18, "Altura": 159},
				{"Sexo": "M", "Edad":25, "Altura": 160}
				]

const informe = (muestra) => {
	
	const porcentajeMujeresMayores25 = porcentaje(muestra,"M","mayor",25,"Edad");
	console.log(" a. El procentaje de mujeres mayores a 25 años es : ", porcentajeMujeresMayores25,"%" );
		
	const promedioEdadMujeres = promedio(muestra,"Edad","M");
	console.log(" b. El promedio de edad de las mujeres es: ", promedioEdadMujeres);
	
	const promedioAlturaMujeres = promedio(muestra,"Altura","M");
	console.log(" c. El promedio de altura de las mujeres es: ", promedioAlturaMujeres);
	
	const promedioAlturaHombres = promedio(muestra,"Altura","H");
	console.log(" d. El promedio de altura de los hombres es: ", promedioAlturaHombres);
	
	const menorEdadIngresada = valorMayorOMenor(muestra,"Edad","menor");
	console.log(" e. La menor edad ingresada es: ", menorEdadIngresada);
	
	const  mayorAlturaIngresada = valorMayorOMenor(muestra,"Altura","mayor");
	console.log(" f. La mayor altura ingresada es: ", mayorAlturaIngresada);
}

const porcentaje = (array,sexo = "H",mayorOMenor = null,valorPropiedad = null,propiedad = null)=>{
	
	const sexoComprobado = comprobarMayusculasSexo(sexo);
	const operador = mayorOMenor != null && comprobarMayusculasOperadores(mayorOMenor);

	propiedad == "altura" ? (propiedad = "Altura") 
	: propiedad == "edad" && (propiedad = "Edad"); 
	
	let total =  array.filter((x) => x["Sexo"]== sexoComprobado).length;
	let cantidad;
	(mayorOMenor === null || valorPropiedad === null ||  propiedad === null) 
	?	( cantidad = array.filter((x) =>x["Sexo"] == sexoComprobado).length, total =  array.length) 
	:	operador == 0 
	? ( cantidad = array.filter((x) =>x["Sexo"] == sexoComprobado && x[propiedad] < Number(valorPropiedad)).length)
	: ( cantidad = array.filter((x) =>x["Sexo"] == sexoComprobado && x[propiedad] > Number(valorPropiedad)).length)
		
	return (cantidad * 100) / total;
} 

const valorMayorOMenor = (array,propiedad,mayorOMenor = "mayor")=>{
	let  valorBuscado = 0;
	const operador = comprobarMayusculasOperadores(mayorOMenor);

	for (let index = 0; index < array.length; index++) {
		
		Number(valorBuscado) == 0 
		?	(  valorBuscado = Number(array[index][propiedad]) )
		:  operador == 0 ? Number( valorBuscado) > Number(array[index][propiedad] ) 
		&&  (  valorBuscado = Number(array[index][propiedad]) )
		: Number( valorBuscado) < Number(array[index][propiedad] )
		&&  (  valorBuscado = Number(array[index][propiedad]) );
	}

	return valorBuscado;
	
}

const promedio = (array,propiedad,sexo = "ambos")=>{

	const sexoComprobado = comprobarMayusculasSexo(sexo);

	propiedad == "altura" ? (propiedad = "Altura") 
	: propiedad == "edad" && (propiedad = "Edad"); 

	let suma = 0;

	let total =  Number(array.filter((x) => x["Sexo"]== sexoComprobado).length);
	sexoComprobado == "ambos"	&& (total =  Number(array.length));
	
	for (let index = 0; index < array.length; index++) {
		sexoComprobado == "ambos" 
		? (suma = Number(suma) + Number(array[index][propiedad])) 
		: array[index]["Sexo"] == sexoComprobado 
		&&	(suma = Number(suma) + Number(array[index][propiedad]));
		 
	}
	
	 return  suma / total; 

}

const comprobarMayusculasSexo = (sexo)=>{
	(sexo == "H" || sexo == "h" || sexo == "hombre")
	 ?	(sexo = "H")
	 : 	(sexo == "M" || sexo == "m" || sexo == "mujer") 
	 ?	(sexo = "M") 
	 : 	sexo = "ambos";
	 return sexo;
}

const comprobarMayusculasOperadores = (mayorOMenor)=>{

	let operador = 1;
	( mayorOMenor == "minimo" 
	  || mayorOMenor == "Minimo"
	  || mayorOMenor == "min" 
	  || mayorOMenor == "Min" 
	  || mayorOMenor == "menor" 
	  || mayorOMenor == "Menor"
	  || mayorOMenor == "<") && (operador = 0);

	return operador;
}


console.log('%c Ejercicio 27:', 'background: #000; color: #fff')
console.log('Los datos de la Encuesta son: ',muestra)
informe(muestra);
