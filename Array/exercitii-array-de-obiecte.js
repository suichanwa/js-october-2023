// Pentru a ne ajuta să folosim exercitii cu probleme
// din lumea reală, vom simula un dealer de mașini second-hand
// care are în inventar 50 de mașini.

// Distribuitorul de mașini are toate stocurile lor găzduite în
// Pseudo array-ul de mai jos. Derulați în jos
// pentru a afla cum puteți ajuta dealerul auto.
let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
    { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
    { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
    { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
    { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
    { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
    { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
    { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
    { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
    { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 },
    { id: 15, car_make: "Dodge", car_model: "Intrepid", car_year: 2000 },
    { id: 16, car_make: "Mitsubishi", car_model: "Montero Sport", car_year: 2001 },
    { id: 17, car_make: "Buick", car_model: "Skylark", car_year: 1987 },
    { id: 18, car_make: "Geo", car_model: "Prizm", car_year: 1995 },
    { id: 19, car_make: "Oldsmobile", car_model: "Bravada", car_year: 1994 },
    { id: 20, car_make: "Mazda", car_model: "Familia", car_year: 1985 },
    { id: 21, car_make: "Chevrolet", car_model: "Express 1500", car_year: 2003 },
    { id: 22, car_make: "Jeep", car_model: "Wrangler", car_year: 1997 },
    { id: 23, car_make: "Eagle", car_model: "Talon", car_year: 1992 },
    { id: 24, car_make: "Toyota", car_model: "MR2", car_year: 2003 },
    { id: 25, car_make: "BMW", car_model: "525", car_year: 2005 },
    { id: 26, car_make: "Cadillac", car_model: "Escalade", car_year: 2005 },
    { id: 27, car_make: "Infiniti", car_model: "Q", car_year: 2000 },
    { id: 28, car_make: "Suzuki", car_model: "Aerio", car_year: 2005 },
    { id: 29, car_make: "Mercury", car_model: "Topaz", car_year: 1993 },
    { id: 30, car_make: "BMW", car_model: "6 Series", car_year: 2010 },
    { id: 31, car_make: "Pontiac", car_model: "GTO", car_year: 1964 },
    { id: 32, car_make: "Dodge", car_model: "Ram Van 3500", car_year: 1999 },
    { id: 33, car_make: "Jeep", car_model: "Wrangler", car_year: 2011 },
    { id: 34, car_make: "Ford", car_model: "Escort", car_year: 1991 },
    { id: 35, car_make: "Chrysler", car_model: "300M", car_year: 2000 },
    { id: 36, car_make: "Volvo", car_model: "XC70", car_year: 2003 },
    { id: 37, car_make: "Oldsmobile", car_model: "LSS", car_year: 1997 },
    { id: 38, car_make: "Toyota", car_model: "Camry", car_year: 1992 },
    { id: 39, car_make: "Ford", car_model: "Econoline E250", car_year: 1998 },
    { id: 40, car_make: "Lotus", car_model: "Evora", car_year: 2012 },
    { id: 41, car_make: "Ford", car_model: "Mustang", car_year: 1965 },
    { id: 42, car_make: "GMC", car_model: "Yukon", car_year: 1996 },
    { id: 43, car_make: "Mercedes-Benz", car_model: "R-Class", car_year: 2009 },
    { id: 44, car_make: "Audi", car_model: "Q7", car_year: 2012 },
    { id: 45, car_make: "Audi", car_model: "TT", car_year: 2008 },
    { id: 46, car_make: "Oldsmobile", car_model: "Ciera", car_year: 1995 },
    { id: 47, car_make: "Volkswagen", car_model: "Jetta", car_year: 2007 },
    { id: 48, car_make: "Dodge", car_model: "Magnum", car_year: 2008 },
    { id: 49, car_make: "Chrysler", car_model: "Sebring", car_year: 1996 },
    { id: 50, car_make: "Lincoln", car_model: "Town Car", car_year: 1999 }
];

// Exemplu 1 for loop:

// const arr = ['a', 'b', 'c', 'd'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// 'a' 'b' 'c' 'd'

// Exemplu 2 for loop:

// const arr = [12, 13, 14, 15];
// const evens = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) { evens.push(arr[i]); }
// }
// console.log(evens);
// [12, 14]

// ==== Exercitiu 1 ====
// Dealerul nu își poate aminti informațiile pentru o mașină cu un
// ID de 33 pe lotul său. Ajutați-l pe dealer să afle ce mașină
// are un ID de 33 înregistrând anul, marca și modelul mașinii
// în jurnalul de consolă furnizat mai jos:
const id = 33;

const findYearMarkModel = () => {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            console.log(`Car 33 is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`);
        }
    }
}


// ==== Exercitiul 2 ====
// Dealerul are nevoie de informațiile privind ultima
// mașină din inventar. Care este marca și modelul ultimei
// mașini din inventar?
// Conectați marca și modelul în consolă.let lastCar = 0;
console.log();

// ==== Challenge 3 ====
// Echipa de marketing dorește ca modelele de mașini să fie listate
// alfabetic pe site. Sortează toate numele modelelor de mașini
// în ordine alfabetică și înregistrează rezultatele în consolă
const carModelsSorted = inventory.map(car => car.car_model).sort();
console.log(carModelsSorted);


// ==== Challenge 4 ====
// Echipa de contabilitate are nevoie de toți anii de la fiecare
// mașină de pe lot. Creați un nou array din datele dealerului
// care  conține doar anii de mașină și înregistrați rezultatul
// în consolă.
let carYears = [];
console.log();

// ==== Challenge 5 ====
// Managerul lotului de mașini trebuie să afle câte mașini sunt mai
// vechi decât anul 2000. Folosind array-ul carYears pe care tocmai
// ați creat-o, aflați câte mașini au fost făcute înainte de
// anul 2000, completând array-ul vechi de mașini și înregistrând
// lungimea acestuia.
let oldCars = [];
console.log();

// ==== Challenge 6 ====
// Un cumpărător este interesat să vadă în inventar doar mașinile
// BMW și Audi. Returnează o matrice care conține doar mașini
// BMW și Audi. Odată ce ați completat array-ul BMWAndAudi,
// utilizați JSON.stringify () pentru a afișa rezultatele array-ului
// în consolă.
let BMWAndAudi = [];

const findBMWAndAudis = () => map(car => {
    if (car.car_make === 'BMW' || car.car_make === 'Audi') {
        BMWAndAudi.push(car);
    }
});

console.log(JSON.stringify(BMWAndAudi));

// Un centru comunitar local organizează o strângere de
// fonduri de 5k pentru distracție și a invitat 50 de
// întreprinderi mici să facă o mică donație în numele lor
// pentru câteva actualizări ale instalațiilor lor. Fiecare
// companie a desemnat un reprezentant pentru a participa la
// eveniment, împreună cu o mică donație.

// Da-ti scroll până în partea de jos a listei pentru a utiliza
// câteva metode avansate de array pentru a ajuta directorul
// evenimentului să adune câteva informații de la companii
const runners = [
    { id: 1, first_name: "Charmain", last_name: "Seiler", email: "cseiler0@wired.com", shirt_size: "2XL", company_name: "Divanoodle", donation: 75 },
    { id: 2, first_name: "Whitaker", last_name: "Ierland", email: "wierland1@angelfire.com", shirt_size: "2XL", company_name: "Wordtune", donation: 148 },
    { id: 3, first_name: "Julieta", last_name: "McCloid", email: "jmccloid2@yahoo.com", shirt_size: "S", company_name: "Riffpedia", donation: 171 },
    { id: 4, first_name: "Martynne", last_name: "Paye", email: "mpaye3@sciencedaily.com", shirt_size: "XL", company_name: "Wordware", donation: 288 },
    { id: 5, first_name: "Gussy", last_name: "Raraty", email: "graraty4@ucoz.ru", shirt_size: "L", company_name: "Oozz", donation: 291 },
    { id: 6, first_name: "Yule", last_name: "Tommasetti", email: "ytommasetti5@state.gov", shirt_size: "S", company_name: "Yodo", donation: 27 },
    { id: 7, first_name: "Kathie", last_name: "Majury", email: "kmajury6@guardian.co.uk", shirt_size: "3XL", company_name: "Zoomcast", donation: 261 },
    { id: 8, first_name: "Tanner", last_name: "Branton", email: "tbranton7@tmall.com", shirt_size: "2XL", company_name: "Realmix", donation: 28 },
    { id: 9, first_name: "Sarina", last_name: "Lasham", email: "slasham8@toplist.cz", shirt_size: "XL", company_name: "Gigashots", donation: 110 },
    { id: 10, first_name: "Bertie", last_name: "Lonergan", email: "blonergan9@issuu.com", shirt_size: "3XL", company_name: "Skinte", donation: 62 },
    { id: 11, first_name: "Trevor", last_name: "Studd", email: "tstudda@networkadvertising.org", shirt_size: "S", company_name: "Cogidoo", donation: 76 },
    { id: 12, first_name: "Malachi", last_name: "Okeshott", email: "mokeshottb@chron.com", shirt_size: "M", company_name: "DabZ", donation: 91 },
    { id: 13, first_name: "Berget", last_name: "Logsdail", email: "blogsdailc@wix.com", shirt_size: "M", company_name: "Mymm", donation: 9 },
    { id: 14, first_name: "Loise", last_name: "Rivlin", email: "lrivlind@behance.net", shirt_size: "2XL", company_name: "Linktype", donation: 204 },
    { id: 15, first_name: "Christan", last_name: "Kendall", email: "ckendalle@example.com", shirt_size: "XS", company_name: "Skinix", donation: 252 },
    { id: 16, first_name: "Kayla", last_name: "Whitwam", email: "kwhitwamf@deliciousdays.com", shirt_size: "2XL", company_name: "Oyope", donation: 147 },
    { id: 17, first_name: "Heddie", last_name: "Heningam", email: "hheningamg@tripadvisor.com", shirt_size: "L", company_name: "Skinix", donation: 172 },
    { id: 18, first_name: "Mace", last_name: "Ballinger", email: "mballingerh@a8.net", shirt_size: "S", company_name: "Nlounge", donation: 266 },
    { id: 19, first_name: "Nola", last_name: "Abberley", email: "nabberleyi@jalbum.net", shirt_size: "XL", company_name: "Photospace", donation: 148 },
    { id: 20, first_name: "Nadine", last_name: "Tresler", email: "ntreslerj@marketwatch.com", shirt_size: "3XL", company_name: "Wikido", donation: 292 },
    { id: 21, first_name: "Ulrikaumeko", last_name: "Vuittet", email: "uvuittetk@gov.uk", shirt_size: "S", company_name: "Skinte", donation: 102 },
    { id: 22, first_name: "Saunder", last_name: "Spennock", email: "sspennockl@icq.com", shirt_size: "3XL", company_name: "Kwimbee", donation: 213 },
    { id: 23, first_name: "Carmel", last_name: "Woffinden", email: "cwoffindenm@wikispaces.com", shirt_size: "S", company_name: "Rooxo", donation: 137 },
    { id: 24, first_name: "Marielle", last_name: "Kimmel", email: "mkimmeln@jimdo.com", shirt_size: "M", company_name: "Livetube", donation: 96 },
    { id: 25, first_name: "Brucie", last_name: "Burris", email: "bburriso@slate.com", shirt_size: "2XL", company_name: "Wordtune", donation: 128 },
    { id: 26, first_name: "Juan", last_name: "Berzon", email: "jberzonp@soup.io", shirt_size: "3XL", company_name: "Einti", donation: 234 },
    { id: 27, first_name: "Sacha", last_name: "Olsen", email: "solsenq@reverbnation.com", shirt_size: "2XL", company_name: "Viva", donation: 190 },
    { id: 28, first_name: "Jamey", last_name: "O'Nolan", email: "jonolanr@samsung.com", shirt_size: "XL", company_name: "Skinix", donation: 31 },
    { id: 29, first_name: "Morrie", last_name: "Rainard", email: "mrainards@yale.edu", shirt_size: "XS", company_name: "Podcat", donation: 52 },
    { id: 30, first_name: "Fidel", last_name: "Roskelly", email: "froskellyt@ibm.com", shirt_size: "XS", company_name: "Avavee", donation: 5 },
    { id: 31, first_name: "Toni", last_name: "MacSweeney", email: "tmacsweeneyu@parallels.com", shirt_size: "M", company_name: "Jaloo", donation: 82 },
    { id: 32, first_name: "Jessey", last_name: "Walhedd", email: "jwalheddv@slashdot.org", shirt_size: "L", company_name: "Trilia", donation: 5 },
    { id: 33, first_name: "Karola", last_name: "Piper", email: "kpiperw@ucsd.edu", shirt_size: "3XL", company_name: "Yombu", donation: 110 },
    { id: 34, first_name: "Marley", last_name: "Mitchenson", email: "mmitchensonx@webeden.co.uk", shirt_size: "M", company_name: "Zoonoodle", donation: 97 },
    { id: 35, first_name: "Marrilee", last_name: "Thrasher", email: "mthrashery@opensource.org", shirt_size: "XL", company_name: "Bluejam", donation: 17 },
    { id: 36, first_name: "Tye", last_name: "Manie", email: "tmaniez@netscape.com", shirt_size: "L", company_name: "Kanoodle", donation: 30 },
    { id: 37, first_name: "Charleen", last_name: "Sheering", email: "csheering10@mit.edu", shirt_size: "3XL", company_name: "Jatri", donation: 262 },
    { id: 38, first_name: "Valma", last_name: "Eynaud", email: "veynaud11@archive.org", shirt_size: "XS", company_name: "Jaxbean", donation: 212 },
    { id: 39, first_name: "Dollie", last_name: "McDarmid", email: "dmcdarmid12@tinyurl.com", shirt_size: "S", company_name: "Kayveo", donation: 74 },
    { id: 40, first_name: "Minna", last_name: "Hymas", email: "mhymas13@cornell.edu", shirt_size: "XS", company_name: "Vimbo", donation: 101 },
    { id: 41, first_name: "Jsandye", last_name: "Frend", email: "jfrend14@ca.gov", shirt_size: "XS", company_name: "Latz", donation: 156 },
    { id: 42, first_name: "Yevette", last_name: "Hacket", email: "yhacket15@wp.com", shirt_size: "XL", company_name: "Lazzy", donation: 291 },
    { id: 43, first_name: "Hank", last_name: "Zebedee", email: "hzebedee16@ezinearticles.com", shirt_size: "L", company_name: "Gigashots", donation: 241 },
    { id: 44, first_name: "Jodie", last_name: "Stawell", email: "jstawell17@yale.edu", shirt_size: "S", company_name: "Jaxspan", donation: 262 },
    { id: 45, first_name: "Falito", last_name: "Karsh", email: "fkarsh18@pcworld.com", shirt_size: "S", company_name: "Mycat", donation: 239 },
    { id: 46, first_name: "Reginauld", last_name: "Purselowe", email: "rpurselowe19@thetimes.co.uk", shirt_size: "L", company_name: "Jabbersphere", donation: 11 },
    { id: 47, first_name: "Vida", last_name: "Tydd", email: "vtydd1a@dropbox.com", shirt_size: "S", company_name: "Quaxo", donation: 55 },
    { id: 48, first_name: "Anderea", last_name: "MacGiolla Pheadair", email: "amacgiollapheadair1b@xing.com", shirt_size: "2XL", company_name: "Kwimbee", donation: 214 },
    { id: 49, first_name: "Bel", last_name: "Alway", email: "balway1c@ow.ly", shirt_size: "S", company_name: "Voolia", donation: 107 },
    { id: 50, first_name: "Shell", last_name: "Baine", email: "sbaine1d@intel.com", shirt_size: "M", company_name: "Gabtype", donation: 171 },
];

// ==== Challenge 1 ====
// Directorul evenimentului are nevoie atât de numele
// și de prenumele fiecăruia
// alergător pentru salopetele de alergat. Combinați atât primul,
// cât și ultimul
// numește și competează o nouă array numită `fullNames`.
// Aceast array va conține doar string-uri.
const fullNames = [];

runners.forEach(runner => {
    const fullName = `${runner.first_name} ${runner.last_name}`;
    fullNames.push(fullName);
});



// ==== Challenge 2: Use .map() ====
// Directorul evenimentului trebuie să aibă toate prenumele alergătorilor
// // cu majuscule.
// // adaugati intr-un array numit `firstNamesAllCaps`.
// // Aceast array va conține doar stringuri.

// ==== Challenge 3: Use .filter() ====
// Cămășile mari nu vor fi disponibile pentru
// eveniment din cauza unei probleme de comandă.
// Avem nevoie de o versiune filtrată a gamei de
// alergători, care să conțină doar acei
// alergători cu cămăși de dimensiuni mari,
// astfel încât să poată alege o dimensiune
// diferită. Aceasta va fi o serie de obiecte.
let runnersLargeSizeShirt = [];
console.log(runnersLargeSizeShirt);

// ==== Challenge 4: Use .reduce() ====
// Donațiile trebuie contabilizate și raportate
// în scopuri fiscale. Adăugați toate donațiile
// și salvați totalul într-o variabilă
// ticketPriceTotal.
let ticketPriceTotal = 0;
console.log(ticketPriceTotal);

// ==== Challenge 5: Be Creative ====
// Acum că ați folosit .forEach (), .map (),
// .filter () și .reduce (). Vreau să vă gândiți
// la potențialele probleme pe care le-ați putea
// rezolva, având în vedere setul de date și
// tema . Încercați să creați și apoi
// să rezolvați 3 probleme unice folosind una
// sau mai multe dintre metodele array-ului
// enumerate mai sus.
// Problema 1
//

// Problema 2

// Problema 3
// ==========================================================
var employees = [
    {
        name: "Jane Smith",
        title: "Web Developer II",
        skillLevels: {
            javascript: 7,
            python: 4,
            sql: 6
        }
    },
    {
        name: "Frank Castle",
        title: "Web Developer I",
        skillLevels: {
            javascript: 4,
            python: 4,
            sql: 3
        }
    },
    {
        name: "Steve Rogers",
        title: "Database Admin",
        skillLevels: {
            javascript: 7,
            python: 4,
            sql: 9
        }
    },
    {
        name: "Chuck Taylor",
        title: "Web Developer III",
        skillLevels: {
            javascript: 8,
            python: 7,
            sql: 8
        }
    },
    {
        name: "Thor Odinson",
        title: "Web Intern",
        skillLevels: {
            javascript: 4,
            python: 3,
            sql: 6
        }
    }
]

// We need you to write a script that will print someone's JavaScript ability level.
// Please write a line that will print the JavaScript level for employee Chuck Taylor.
// You will need both Array and Object syntax.



var myKey = 'width';

var geometry = {
    length: 20,
    width: 30,
    height: 10,
    weight: 100
};

// There is an object above and a variable holding a key name. Use that variable
// to access and print the "width" value inside the object. Add another line that uses the
// same style access syntax to print the length as well but uses a string literal
// instead of a variable holding a string.

// ====================================================

var foodPairings = {
    burgers: 'beer',
    fish: 'white wine',
    beef: 'red wine',
    strawberries: 'cream'
};

// We have an Object that contains food pairings so that our sommelier can make
// educated recommendations. What we need is an Array that only holds all the foods.
// Using functions in the Object object, write a script that will print out all
// foods in the object.
