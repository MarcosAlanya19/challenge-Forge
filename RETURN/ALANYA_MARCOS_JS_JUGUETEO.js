/* ----------------------------- JavaScript ----------------------------- */

/* Paso 1: crea la siguiente variable
una variable llamada alturaNiño que es un número. Dale cualquier número entero positivo que
quieras. */
/* Paso 2: crea una función llamada muestraSiElNiñoPuedeSubirALaMontañaRusa. */
/* Paso 3: dentro de la función, crea la siguiente condicional
Si el alturaNiño es mayor a 52, el console.log debe decir "¡Súbete, chico!". Si no, console.log debe
mostrar "Lo siento, chico. Tal vez el próximo año”.
*/

const alturaNiño = 55;

function muestraSiElNiñoPuedeSubirALaMontañaRusa(alturaNiñoPuedeSiElNiñoPuedeSubir) {
  if (alturaNiñoPuedeSiElNiñoPuedeSubir > 52) return console.log('¡Súbete, chico!');

  return console.log('Lo siento, chico.Tal vez el próximo año');
}

muestraSiElNiñoPuedeSubirALaMontañaRusa(alturaNiño);

/* ----------------------------- Depuracion ----------------------------- */
/* Aún no has aprendido sobre el término "return", pero básicamente devuelve lo que está a su
derecha.
Usando lo que sabes sobre las funciones, variables, console.log y ahora return, arregla el siguiente
código. */

/* function greeting(){
return "Hola, mundo";
}
var word = greeting();
console.log(); */

function greeting() {
  return 'Hola, mundo';
}
var word = greeting();

console.log(word);
