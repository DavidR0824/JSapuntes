var miNombre = "Nora";

function mostrarMinombre() {
  var miNombre = "Gino";
  console.log(miNombre)
}

mostrarMinombre()
console.log(miNombre)


var a;
var b;

a = 5;
b = 5;

// operador de igualdad esctricta

console.log(a == b); // true
console.log(a === b); // true

b = 8;

console.log(a == b); // false
console.log(a === b); // false

b = "5";

console.log(a == b); // true
console.log(a === b); // false


a = "JavaScript";
b = "JavaScript";

// operador de desigualdad

console.log(9 != 6) // true
console.log(9 != 6) // false

console.log("JavaScript" != "JavaScript") // false
console.log({1, 2, 3, 4} != {1, 2, 3, 4}) // true se ven igual los valores pero son diferentes para la maquina


// operador de desigualdad estricta

console.log(1 != "1"); // false aca el operador de desigualdad convierte los elementos en un valor comun antes de compararlos
console.log(1 !== "1"); // true aca el operador de desigualdad NO convierte los elementos en un valor comun antes de compararlos


// operador "mayor que"

console.log(6 > 5);
console.log(3 > 10);

console.log( "B" > "A"); // true en el alfabeto la letra mas tardia en el orden es la mayor 
console.log( "ACB" > "ABC"); // true  las dos primeras letras son mayores

console.log("AB" > "A");  // true

console.log("Mundo" > "Hola") //  True . la primera letra lo define ya que M esta despues de la H en el orden alfabetico eso determina que es mayor que H
console.log ("M" > "H") // true

// operador "mayor igual que"

>=

console.log(5 > 5); //false
console.log(5 >= 5); // true

// operador "menor que"

console.log(5 < 6); //true
console.log(10 < 6); // false

console.log( "B" < "A"); // false 
console.log( "ABC" < "ACB"); // true

var a;
var b;

console.log(a < b); //true
console.log(b < a); // false

// operador "menor igual que"

console.log(5 < 5); //false
console.log(5 <= 5); // true

// operador logico "and"

var a = 8;

// (a > 5) && (a < 10) --> true &&
console.log ((a > 5) && (a < 10));

var a = 8;

// (a > 3) && (a < 10) --> false  && true --> false - es falso ya que segun la regla si una es falsa todas lo son
console.log ((a > 5) && (a < 10));



// operador OR  -  la expresion es verdadera si alguno de los operando es verdadero o ambos son verdaderos


// operador NOT

var a  = 8;

// !(a > 5) -- > !true --> false
console.log (!(a > 5))

// !(a < 5) -- > !false --> true
console.log (!(a < 5))


//  sentencias condicionales - nos da mas control sobre que es lo que va a ocurrrir en el programa

// () - es la condicion y tiene que serverdadera

 var = 5;

if (x > 2) {
      console.log("la considicon es verdadera")
}

// esto es verdadero ya que x es mayor que dos entonces el codigo se ejecuta

var = 5;

if (x < 2) {
      console.log("la considicon es verdadera")
}

// esto es falso ya que x no es menor que 2 entonces el codigo no se ejecuta el el programa ejecuta la sieguientes lineas ,es decir se salta esta linea

 
var estacion = "invierno";

if (estacion == "invierno") {
  console.log("¡si! me encanta el invierno")
}

// respuesta - ¡si! me encanta el invierno

var estacion = "invierno";

if (estacion == "verano") {
  console.log("¡si! me encanta el invierno")
}

// respuesta - no se ejecuta y el programa sigue a la siguiente linea

// ** Clausula "else"

if (false) {
  console.log("la condicion es verdadera")
} else {
  console.log("la condicion es falsa")
}


var x = 5

if ( x > 10) {
  console.log("esto es correcto");
} else {
  console.log("esto es incorrecto");
}

 // ** Clausula "else if"

 function clasificarValor(valor) {
  if(valor % 2 == 0) {
  console.log("divisible entre 2.");
 } else if (valor % 3 == 0) {
  console.log("divisible entre 3.");
 } else{
  console.log("no es divisible entre las opciones");
 }
}

//clasificarValor (2) - divisible entre 2.
//clasificarValor (15) - divisible entre 3.
//clasificarValor (7) - no es divisible entre las opciones


// condicionales : orden logico

function clasificarValor(valor){

if (valor < 5) {
  console.log("menor que 5");
} else if ( valor < 10 ) {
  console.log("menor que 10");
} else {
  console.log("Mayor o igual a 10");
}

}

clasificarValor(2) - menor que 5
clasificarValor(7) - menor que 10
clasificarValor(12)- Mayor o igual a 10


// encadenar sentencias else if

function interpretarIMC(IndiceDeMasaCorporal) {
  if(IndiceDeMasaCorporal < 18.5) {
    console.log("bajo peso");
  }
 else if(IndiceDeMasaCorporal <= 24.9) {
  console.log("Normal");
} else if (IndiceDeMasaCorporal <= 29.9){
  console.log("sobrepeso");
} else {
  console.log("obeso");
}
}


interpretarIMC(18.4)  - bajo
interpretarIMC(24.9) - Normal
interpretarIMC(29) -  sobrepeso
interpretarIMC(30) -obeso