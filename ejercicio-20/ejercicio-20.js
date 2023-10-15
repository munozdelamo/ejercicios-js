/*Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el 
algoritmo para informar si el triángulo es equilátero, isósceles o escaleno
*/

console.log('%c Ejercicio 20:', 'background: #000; color: #fff')

const cadenasVaciasACero = (cadena)=>{

	cadena = (cadena === "") ? 0
			: cadena === null ? 0
			: Number.isNaN(Number(cadena)) ? 0	
			: cadena; 

	return cadena;
}

const ladoA = cadenasVaciasACero(prompt("Escriba la medida del lado \"a\" del triángulo: "))
 console.log("El lado \"a\" mide : ",ladoA,"cm")
 const ladoB = cadenasVaciasACero(prompt("Escriba la medida del lado \"b\" del triángulo: "))
 console.log("El lado \"b\" mide : ",ladoB,"cm")
 const ladoC = cadenasVaciasACero(prompt("Escriba la medida del lado \"c\" del triángulo: "))
 console.log("El lado \"c\" mide : ",ladoC,"cm")

const  nombreTriangulo = (ladoA,ladoB,ladoC)=>{

	if(ladoA == 0 || ladoB == 0 || ladoC == 0){
		console.log("Los lados del triángulo no pueden medir \"0\"")
		return
	}

	let nombre = (ladoA == ladoB && ladoA == ladoC) ? "Equilátero"  
				: (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) ? "Isósceles" 
				: "Escaleno";

				console.log("El triángulo formado es: ",nombre)

}

nombreTriangulo(ladoA,ladoB,ladoC);