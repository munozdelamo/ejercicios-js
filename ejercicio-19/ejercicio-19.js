/* 
Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice 
un programa para calcular e informar la operación solicitada entre ambos números
 */

console.log('%c Ejercicio 19:', 'background: #000; color: #fff');

const calculadora = ()=>{
    let operacion = 0;
    
    const numero1 = Number(prompt("Ingresá el primer número: "));
    
    let operador = prompt("Ingresá un operador (  +,   -,   *,   /  ) ");
    
    const numero2 = Number(prompt("Ingresá el segundo número: "));
    
    
    if(!validarNumero(numero1) || !validarNumero(numero2)){
        return
    }

      operador == "+" ? (operacion = "suma", resultado = numero1 + numero2 ) 
    : operador == "-" ? (operacion = "resta", resultado = numero1 - numero2) 
    : operador == "*" ? (operacion = "multiplicación", resultado = numero1 * numero2)
    : operador == "/" ? (operacion = "división", resultado = numero1 / numero2)   
    : (console.log("Error: No te hagas el vivo. Seleccioná un operador válido: \n(  +,   -,   *,   /  )"),operador = false);
    
    if(!operador){
        return   
    }
    
    /* alert("La operación es : "+ numero1 +" " + operador + " " + numero2 + " = " + operacion) */
    console.log("La operación es ",operacion," : ",numero1," ",operador," ",numero2," = ",resultado);

    /* return confirm("¿Desea realizar otra operación?"); */
}

const validarNumero = (numero)=>{

    if (typeof(numero) !== "number" || Number.isNaN(numero) || numero === null ) { 
        console.log("Error: Los operandos ingresados deben ser números válidos."); 
        return false;
    }
 return true;
}

calculadora();





