// Ejercicio 1: Funcion que determine si un año es bisiesto
function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
      return true; 
    } else {
      return false; 
    }
  }

console.log("¿Es bisiesto? " + esBisiesto(2025));

//Ejercicio 2: Funcion que convierta Celsius a Fahrenheit
function celsiusAFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

console.log("La temperatura de celcius a Fahrenheit es de " + celsiusAFahrenheit(18) + "°F");

//Ejercicios 3: Funcion que devuelva el mayor de dos números
function mayorDeDos(n1, n2){
    if(n1 > n2){
        return n1;
    }else{
        return n2;
    }
}

console.log("El número mayor es: " + mayorDeDos(12, 10));

//Ejercicio 4: Funcion que convierta una cantidad de minutos en una cadena que indique cuentas horas y minutos corresponden
function convertirMinutos(minutos){
    let horas = (minutos - (minutos % 60)) / 60;
    let minutosRestantes = minutos % 60;
    return horas + " horas y " + minutosRestantes + " minutos";        
}

console.log("La cantidad de minutos corresponde a: " + convertirMinutos(125));

//Ejercicio 5: Función que determine si un número esta dentro de un rando dado (incluyendo limites)
function estaEnRango(numero, inicio, fin){
    if(numero >= inicio && numero <= fin){
        return true;
    }else{
        return false;
    }   
}

console.log("¿El número está dentro del rango? " + estaEnRango(0, 1, 10));

//Ejercicio 6: Función que calcule el precio final despues de aplciar un porcentaje de descuento a un precio inicial
function calcularPrecioFinal(precioInicial, descuento){
    let precioDescuento = (descuento * precioInicial) / 100;
    let precioFinal = precioInicial - precioDescuento;
    return precioFinal;
}

console.log("El precio final es de $" + calcularPrecioFinal(100, 20));

//Ejercicio 7: Función que determine si una persona puede votar seguún su edad
function puedeVotar(edad){
    if(edad >= 18){
        return true;
    }else{
        return false;
    }
}

console.log("¿Puede votar? " + puedeVotar(19)); 

//Ejercicio 8: Función que calculo el área de un triángulo dados su base y altura
function calcularAreaTriangulo(base, altura){
    let area = (base * altura) / 2;
    return area;
}

console.log("El área del triángulo es de " + calcularAreaTriangulo(10, 5) + " cm²");