/* ------------------------------------ HTML ------------------------------------ */

/* Predicción 1: ¿Qué indicará console.log cuando se llame a esta función? */
function myBirthYearFunc() {
  console.log('Nací en ' + 1980);
}

// Nací en 1980

/* Predicción 2: si necesitáramos enviar un año de nacimiento hacia la función, le diríamos a la
función "oye, te enviaremos una variable llamada EntradaAñoNacimiento". Lo hacemos
agregando el nombre de la variable entre paréntesis. Mira a continuación un ejemplo.
Entonces, si la variable EntradaAñoNacimiento es 1980 (también conocida como var
EntradaAñoNacimiento = 1980), y se llama a esta función, ¿qué indicará console.log? */

var EntradaAñoNacimiento = 1980;
function myBirthYearFunc(EntradaAñoNacimiento) {
  console.log('Nací en ' + EntradaAñoNacimiento);
}
// Nací en 1980

/* Predicción 3: Intentémoslo otra vez. Si var num1 = 10 y var num2 = 20, ¿qué indicaría console.log? */
const num1 = 10;
const num2 = 20;
function add(num1, num2) {
  console.log('¡Sumando números!');
  console.log('num1 is: ' + num1);
  console.log('num2 is: ' + num2);
  var sum = num1 + num2;
  console.log(sum);
}

// ¡Sumando números!
// num1 is 10
// num2 is 20
// 30

/* -------------------- Predecir arreglos y condicionales -------------------- */
/* Fragmento de código 1 */
/* Diagrama T:
  auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]
*/

function muestraInformaciónContacto() {
  const auntContactInfo = [
    'Paula',
    'Smith',
    'Calle Principal 1234',
    'St. Louis',
    'MO',
    12345,
  ];
  console.log(auntContactInfo);
}

// ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]

/* Fragmento de código 2 */
/* Diagrama T:
  produce = ['manzanas', 'naranjas']
  frozen = ['brócoli', 'helado']
  frozen = ['brócoli', 'helado', 'croqueta de papa']
*/

function muestraListaDeCompras() {
  var produce = ['manzanas', 'naranjas'];
  var frozen = ['brócoli', 'helado'];
  frozen.push('croqueta de papa');
  console.log(frozen);
}

// ['brócoli', 'helado', 'croqueta de papa']

/* Fragmento de código 3 */
/* Diagrama T:
  movieLibrary = ['Bambi', 'E.T.', 'Toy Story']
  movieLibrary = ['Bambi', 'E.T.', 'Toy Story', 'Zoro']
  movieLibrary[1] = ['E.T.']
  movieLibrary = ['Bambi', 'E.T.', 'Toy Story', 'Zoro']
*/

var movieLibrary = ['Bambi', 'E.T.', 'Toy Story'];
movieLibrary.push('Zoro');
movieLibrary[1] = 'Beetlejuice';
console.log(movieLibrary);

// ['Bambi', 'Beetlejuice', 'Toy Story', 'Zoro']
