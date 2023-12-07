let string = 'some test string';

const primulCaracter = string[0];
const ultimulCaracter = string[string.length - 1];

// Faceți primul și ultimul caracter în majuscule.
const primulMajuscula = primulCaracter.toUpperCase();
const ultimulMajuscula = ultimulCaracter.toUpperCase();

// Căutați poziția cuvântului „string” în șir.
const pozitieString = string.indexOf('string');

// Găsiți poziția celui de-al doilea spațiu.
const primaPozitieSpatiu = string.indexOf(' ');
const aDouaPozitieSpatiu = string.indexOf(' ', primaPozitieSpatiu + 1);

// Obțineți un șir de la al cincilea caracter cu o lungime de 4 caractere.
const substring1 = string.substr(4, 4);

// Obțineți un șir de caractere de la 5 la 9.
const substring2 = string.slice(5, 9);

// Obțineți un nou șir eliminând ultimele 6 caractere.
const nouString = string.slice(0, -6);

// Din variabilele a = 20 și b = 16, obțineți un șir care conține textul „2016”.
const a = 20;
const b = 16;
const textDinVariabile = `${a}${b}`;

console.log('Primul caracter:', primulCaracter);
console.log('Ultimul caracter:', ultimulCaracter);
console.log('Primul caracter în majuscule:', primulMajuscula);
console.log('Ultimul caracter în majuscule:', ultimulMajuscula);
console.log('Pozitia cuvantului "string":', pozitieString);
console.log('Pozitia celui de-al doilea spatiu:', aDouaPozitieSpatiu);
console.log('Substring de la al 5-lea caracter cu o lungime de 4 caractere:', substring1);
console.log('Substring de la 5 la 9:', substring2);
console.log('Noul șir eliminând ultimele 6 caractere:', nouString);
console.log('Textul din variabile a și b:', textDinVariabile);
