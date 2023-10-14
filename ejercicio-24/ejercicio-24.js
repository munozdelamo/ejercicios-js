console.log('%c Ejercicio 24:', 'background: #000; color: #fff');

const calculadora = ()=>{
    let operacion = 0;
    
    const num1 = prompt("Ingresá el primer número: ");
    const numero1 = Number(num1); 
    if (typeof(numero1) !== "number" || Number.isNaN(numero1) || numero1 === null ) { 
        alert("El primer dato ingresado no es un número"); 
        return confirm("¿Desea realizar otra operación?");
    }

    let operador = prompt("Ingresa un operador (  +,   -,   *,   /  ) ");

    const num2 = prompt("Ingresá el segundo número: ");
    const numero2 = Number(num2);
    if (typeof(numero2) !== "number" || Number.isNaN(numero2) || numero2 === null) {  
        alert("El segundo dato ingresado no es un número"); 
        return confirm("¿Desea realizar otra operación?");
    }

    operador == "+" ? (operacion = numero1 + numero2 ) 
    : operador == "-" ? (operacion = numero1 - numero2) 
    : operador == "*" ? (operacion = numero1 * numero2)
    : operador == "/" ? (operacion = numero1 / numero2)   
    : (alert("No te hagas el vivo. Seleccioná un operador válido: \n(  +,   -,   *,   /  )"),operador = false);
    
    if(!operador){
        return confirm("¿Desea realizar otra operación?");    
    }
    
    alert("La operación es : "+ numero1 +" " + operador + " " + numero2 + " = " + operacion)
    console.log("La operación es : ",numero1," ",operador," ",numero2," = ",operacion);

    return confirm("¿Desea realizar otra operación?");
}

while(calculadora());





