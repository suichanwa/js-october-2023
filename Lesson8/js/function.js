function reverseString(inputString) {
  // Convertim șirul de caractere într-un vector de caractere
  const charArray = inputString.split('');
  
  // Inversăm vectorul
  const reversedArray = charArray.reverse();
  
  // Unim vectorul inversat înapoi într-un șir de caractere
  const reversedString = reversedArray.join('');
  
  return reversedString;
}

const reversed = reverseString('test');
console.log(reversed); // Output: "tset"


function getCodeStringFromText(inputText) {
  let codeString = '';
  
  for (let i = 0; i < inputText.length; i++) {
    // Obținem valoarea Unicode a caracterului la poziția curentă
    const charCode = inputText.charCodeAt(i);
    
    // Adăugăm valoarea Unicode la șirul rezultat, însoțită de un spațiu, dacă nu suntem la sfârșit
    codeString += charCode + (i < inputText.length - 1 ? ' ' : '');
  }
  
  return codeString;
}

const codeString = getCodeStringFromText('hello');
console.log(codeString); // Output: "104 101 108 108 111"

function ghicițiNumărul(numărGhicit) {
  // Generăm un număr random între 1 și 10
  const numărGenerat = Math.floor(Math.random() * 10) + 1;

  if (numărGhicit >= 1 && numărGhicit <= 10) {
    if (numărGhicit === numărGenerat) {
      return "Ați câștigat!";
    } else {
      return `Nu ați ghicit numărul. Este ${numărGenerat}, dar numărul ${numărGhicit} a fost selectat.`;
    }
  } else {
    return "Numărul introdus nu este între 1 și 10.";
  }
}

const numărGhicit = 5; // Puteți înlocui 5 cu oricare alt număr pe care doriți să-l ghiciți
const rezultat = ghicițiNumărul(numărGhicit);

function cicluDeN(n) {
  if (n >= 0 && n <= 9) {
    let ciclu = "";
    for (let i = 0; i < 10; i++) {
      ciclu += n + " ";
    }
    return ciclu.trim(); // Eliminăm spațiul din dreapta finalului
  } else {
    return "Numărul introdus nu este între 0 și 9.";
  }
}

const cicluRezultat = cicluDeN(3); // Puteți înlocui 3 cu oricare alt număr cu care doriți să începeți ciclul
console.log(cicluRezultat);


function celMaiMicMultipluComun(număr1, număr2) {
  // Calculăm produsul celor două numere
  const produs = număr1 * număr2;
  
  // Folosim algoritmul lui Euclid pentru a găsi cel mai mare divizor comun
  while (număr2 !== 0) {
    const temp = număr2;
    număr2 = număr1 % număr2;
    număr1 = temp;
  }
  
  // Cel mai mare divizor comun este stocat acum în numărul număr1
  // Cel mai mic multiplu comun (LCM) este produsul împărțit la cel mai mare divizor comun
  const LCM = produs / număr1;
  
  return LCM;
}

function zodiac(numeZodiac) {
  const zodiacuri = {
    "Berbec": "21 martie - 19 aprilie",
    "Taur": "20 aprilie - 20 mai",
    "Gemeni": "21 mai - 20 iunie",
    "Rac": "21 iunie - 22 iulie",
    "Leu": "23 iulie - 22 august",
    "Fecioară": "23 august - 22 septembrie",
    "Balanță": "23 septembrie - 22 octombrie",
    "Scorpion": "23 octombrie - 21 noiembrie",
    "Săgetător": "22 noiembrie - 21 decembrie",
    "Capricorn": "22 decembrie - 19 ianuarie",
    "Vărsător": "20 ianuarie - 18 februarie",
    "Pești": "19 februarie - 20 martie"
  };

  const luni = zodiacuri[numeZodiac];

  if (luni) {
    return luni;
  } else {
    return "Zodiacul introdus nu este valid.";
  }
}

const zodiacCautat = "Taur"; // Puteți înlocui cu oricare alt zodiac
const rezultatZodiac = zodiac(zodiacCautat);
console.log(rezultatZodiac);


function calculareAni(anNastere) {
  const anCurent = new Date().getFullYear();
  const ani = anCurent - anNastere;

  return ani;
}

const anNastere = 1990; // Puteți înlocui cu anul de naștere al persoanei
const varsta = calculareAni(anNastere);
console.log(`Persoana are ${varsta} ani.`);

let a = 5; // Puteți înlocui cu oricare altă valoare pentru a testa

let test;

if (a > 0) {
  test = function() {
    console.log("!");
  };
} else {
  test = function() {
    console.log("!!");
  };
}

test(); // Apelează funcția corespunzătoare valorii lui "a"

function inlocuireLitera(text, litera, inlocuire) {
  const regex = new RegExp(litera, 'g');
  const textInlocuit = text.replace(regex, inlocuire);
  return textInlocuit;
}

const textOriginal = "Acesta este un text de exemplu.";
const literaDeInlocuit = "e";
const literaInlocuire = "x";
const textInlocuit = inlocuireLitera(textOriginal, literaDeInlocuit, literaInlocuire);
console.log(textInlocuit);

