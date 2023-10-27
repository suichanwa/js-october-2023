var num1 = parseFloat(prompt("Introduceți primul număr:"));
var num2 = parseFloat(prompt("Introduceți al doilea număr:"));
var num3 = parseFloat(prompt("Introduceți al treilea număr:"));

if (num1 >= num2 && num1 >= num3) {
    console.log("Numărul maxim este: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Numărul maxim este: " + num2);
} else console.log("Numărul maxim este: " + num3);


var phoneNumber = prompt("Introduceți numărul de telefon:");
var phonePattern = /^\d{10}$/; // Verifică dacă numărul are exact 10 cifre
if (phonePattern.test(phoneNumber)) {
    console.log("Mulțumim pentru numărul de telefon.");
} else {
    console.error("Eroare: Numărul de telefon nu este corect.");
}

// Solicită utilizatorului să introducă un text
var text = prompt("Introduceți un text:");

// Verifică textul pentru cuvinte interzise folosind expresii regulate
var forbiddenWords = /(oaie|prost|animala|idiot)/i; // Cuvintele interzise
if (forbiddenWords.test(text)) {
    console.error("Eroare: Textul conține cuvinte interzise.");
} else {
    console.log("Textul este acceptat.");
}

var lang = "Ro"; // Poți schimba valoarea lui "lang" aici

if (lang === "Ro") {
    console.log("Bine ați venit în limba română.");
} else if (lang === "En") {
    console.log("Welcome from English lang.");
} else if (lang === "Ru") {
    console.log("привет на русском");
} else {
    console.log("Nu există așa limbă.");
}

var minute = 30; // Poți schimba valoarea lui "minute" aici

if (minute >= 0 && minute <= 14) {
    console.log("Valoarea se încadrează în primul sfert de oră.");
} else if (minute >= 15 && minute <= 29) {
    console.log("Valoarea se încadrează în al doilea sfert de oră.");
} else if (minute >= 30 && minute <= 44) {
    console.log("Valoarea se încadrează în al treilea sfert de oră.");
} else if (minute >= 45 && minute <= 59) {
    console.log("Valoarea se încadrează în al patrulea sfert de oră.");
} else {
    console.log("Valoarea nu este validă.");
}

var număr = 6; // Poți schimba valoarea lui "număr" aici

if (număr > 3 && număr < 15) {
    console.log("Afirmare corectă.");
} else if (număr === 6) {
    console.log("Adevărat după tip și valoare.");
} else {
    console.error("Eroare");
}

var test = true; // Schimbă valoarea variabilei "test" după nevoie

var result = test ? "Adevărat" : "Fals";
console.log(result);

var month = "iunie"; // Schimbă valoarea lui "month" aici

switch (month) {
    case "ianuarie":
    case "februarie":
    case "decembrie":
        console.log("Anotimpul este iarna.");
        break;
    case "martie":
    case "aprilie":
    case "mai":
        console.log("Anotimpul este primăvara.");
        break;
    case "iunie":
    case "iulie":
    case "august":
        console.log("Anotimpul este vară.");
        break;
    case "septembrie":
    case "octombrie":
    case "noiembrie":
        console.log("Anotimpul este toamna.");
        break;
    default:
        console.log("Nu există așa lună în calendar.");
}

var numar = '12345'; // Schimbă valoarea lui "numar" aici

if (numar.charAt(0) === '1' || numar.charAt(0) === '2' || numar.charAt(0) === '3') {
    console.log("Primul caracter este 1, 2 sau 3.");
} else {
    console.log("Primul caracter nu este 1, 2 sau 3.");
}

var numar = 5; // Schimbă valoarea lui "numar" aici

if (numar > 10) {
    numar += 100;
} else {
    numar += 30;
}

console.log("Rezultatul este: " + numar);


var numar = 7; // Schimbă valoarea lui "numar" aici

if (numar % 2 === 0) {
    numar *= 2;
} else {
    numar *= 3;
}

console.log("Rezultatul este: " + numar);

var numar = 45; // Schimbă valoarea lui "numar" aici

if (numar >= 50) {
    console.log("Pătratul numărului este: " + (numar * numar));
} else if (numar > 10 && numar < 30) {
    console.log("Zero");
} else {
    console.log("Eroare");
}

var numar1 = 20; // Schimbă valoarea lui "numar1" aici
var numar2 = 35; // Schimbă valoarea lui "numar2" aici

if (numar1 > numar2) {
    console.log("Cel mai mare număr este: " + numar1);
} else {
    console.log("Cel mai mare număr este: " + numar2);
}


var anotimp = prompt("Introduceți un anotimp (ex: vara, iarna, ...):");

switch (anotimp) {
    case "iarna":
        console.log("În acest anotimp, iarna, sunt următoarele luni: ianuarie, februarie, ...");
        break;
    case "vara":
        console.log("În acest anotimp, vara, sunt următoarele luni: iunie, iulie, august.");
        break;
    case "primavara":
        console.log("În acest anotimp, primăvara, sunt următoarele luni: martie, aprilie, mai.");
        break;
    case "toamna":
        console.log("În acest anotimp, toamna, sunt următoarele luni: septembrie, octombrie, noiembrie.");
        break;
    default:
        console.log("Nu există așa anotimp.");
}

var text = 'abc'; // Schimbă valoarea lui "text" aici

if (text === 'abc') {
    text = 'www';
} else {
    text = 'zzz';
}

console.log("Valoarea lui 'text' este: " + text);

var num = '5'; // Schimbă valoarea lui "num" aici

if (!isNaN(num)) {
    num = Number(num);
    console.log("Variabila 'num' este " + num);
} else {
    console.log("Aceasta nu este cifra.");
}


var a = 70; // Schimbă valoarea lui "a" aici
var b = 40; // Schimbă valoarea lui "b" aici
var suma = a + b;

switch (true) {
    case suma < 50:
        console.log("Este mai mică de 50.");
        break;
    case suma < 100:
        console.log("Este mai mică de 100.");
        break;
    case suma < 200:
        console.log("Este mai mică de 200.");
        break;
    case suma < 300:
        console.log("Este mai mică de 300.");
        break;
    default:
        console.log("Rezultatul este foarte mare.");
}

var age = prompt("Aveți 18 ani? (Da sau Nu)");

if (age.toLowerCase() === "da") {
    console.log("Aveți vârsta permisă.");
} else {
    console.log("Sunteți prea mic.");
}

function testQuestion(question, correctAnswer) {
    var answer = prompt(question);

    if (answer === correctAnswer) {
        console.log("Răspuns corect!");
        return true;
    } else {
        alert("Ne pare rău, ați greșit.");
        return false;
    }
}

var questions = [
    ["De cine a fost scrisă amintiri din copilărie?", "Ion Creangă"],
    ["Câte ore are o zi?", "24"],
    ["Președintele Republicii Moldova?", "Maia Sandu"],
    ["Care este răspunsul unui adevărat președinte la întrebarea 'de ce?'", "Pentru că trebuie."]
];

var score = 0;

for (var i = 0; i < questions.length; i++) {
    var result = testQuestion(questions[i][0], questions[i][1]);
    if (result) {
        score++;
    } else {
        i--; // Revinem la aceeași întrebare în caz de răspuns greșit
    }
}

console.log("Scorul dumneavoastră este: " + score + " din " + questions.length);

var numar = 7; // Înlocuiește valoarea cu numărul pe care dorești să-l verifici

if (numar % 2 === 0) {
    console.log(numar + " este un număr par.");
} else {
    console.log(numar + " este un număr impar.");
}

var m = -5; // Înlocuiește valoarea lui "m" cu numărul pe care dorești să-l clasifici

if (m > 0) {
    console.log("Valoarea lui este 1.");
} else if (m === 0) {
    console.log("Valoarea lui este 0.");
} else {
    console.log("Valoarea lui este -1.");
}

var inaltime = 175; // Înlocuiește valoarea lui "inaltime" cu înălțimea persoanei

if (inaltime < 150) {
    console.log("Persoană de înălțime scurtă.");
} else if (inaltime < 170) {
    console.log("Persoană de înălțime medie.");
} else {
    console.log("Persoană de înălțime înaltă.");
}

var litera = 'a'; // Înlocuiește valoarea lui "litera" cu litera pe care dorești să o verifici

// Verificăm dacă litera este o vocală sau o consoană
if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(litera)) {
    console.log(litera + " este o vocală.");
} else if (/^[a-zA-Z]$/.test(litera)) {
    console.log(litera + " este o consoană.");
} else {
    console.log("Aceasta nu este o literă.");
}

var caracter = prompt("Introduceți un caracter:");

if (/^[a-zA-Z]$/.test(caracter)) {
    console.log("Caracterul este din alfabet: " + caracter);
} else {
    console.log("Eroare: Nu este un caracter din alfabet.");
}

var numar1 = 5; // Înlocuiește cu primul număr
var numar2 = 5; // Înlocuiește cu al doilea număr
var numar3 = 5; // Înlocuiește cu al treilea număr

if (numar1 === numar2 && numar2 === numar3) {
    console.log("Toate numerele sunt egale.");
} else if (numar1 !== numar2 && numar2 !== numar3 && numar1 !== numar3) {
    console.log("Toate numerele sunt diferite.");
} else {
    console.log("Doar unul sau două sunt egale sau diferite.");
}

var userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
    console.log("You are old enough to drive.");
} else {
    var yearsToWait = 18 - userAge;
    console.log("You are left with " + yearsToWait + " years to drive.");
}

var myAge = parseInt(prompt("Enter your age:"));
var yourAge = parseInt(prompt("Enter the other person's age:"));

if (myAge > yourAge) {
    console.log("I am older than you.");
} else if (myAge < yourAge) {
    console.log("You are older than me.");
} else {
    console.log("We are the same age.");
}

var a = 4;
var b = 3;

if (a > b) {
    console.log("a is greater than b.");
} else {
    console.log("a is less than b.");
}

var number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}

var userInput = prompt("Enter a month:");

if (userInput) {
    var month = userInput.toLowerCase();

    if (month === "september" || month === "october" || month === "november") {
        console.log("The season is Autumn.");
    } else if (month === "december" || month === "january" || month === "february") {
        console.log("The season is Winter.");
    } else if (month === "march" || month === "april" || month === "may") {
        console.log("The season is Spring.");
    } else if (month === "june" || month === "july" || month === "august"){
        console.log("The season is Summer.");
    } else {
        console.log("Invalid input. Please enter a valid month.");
    }
} else {
    console.log("No input provided. Please enter a month.");
}

var userInput = prompt("What is the day today?").toLowerCase();

if (userInput === "saturday" || userInput === "sunday") {
    console.log(userInput + " is a weekend.");
} else if (userInput === "monday" || userInput === "tuesday" || userInput === "wednesday" || userInput === "thursday" || userInput === "friday") {
    console.log(userInput + " is a working day.");
} else {
    console.log("Invalid input. Please enter a valid day of the week.");
}

var userInput = prompt("Enter a month:").toLowerCase();

switch (userInput) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(userInput + " has 31 days.");
        break;
    case "february":
        console.log(userInput + " has 28 or 29 days, depending on whether it's a leap year.");
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(userInput + " has 30 days.");
        break;
    default:
        console.log("Invalid input. Please enter a valid month.");
}

