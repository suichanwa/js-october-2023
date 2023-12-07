const array = [3, 4, 1, 2, 7];
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const array3 = [1, 2, 3];
const array4 = ['js', 'css', 'html'];
const array5 = [1, 2, 3,4, 5];
const array6 = [1, 2, 3,4, 5];
const array7 = [1, 2, 3,4, 5];

const combinedArray = array1.concat(array2);
array1.push(1, 2, 3);
const reversedArray3 = array3.reverse();
array3.push(4, 5, 6);
array3.unshift(6, 5, 4);
array4.shift();
array4.pop(2);
array5.slice(0, 2);
array5.splice(3, 4);
array6.splice(1, 2);

console.log(array7.splice(1, 3));
console.log(array7.splice());
const spliceIndex = 3; // Poziția de unde vrem să începem să adăugăm elementele
array7.splice(spliceIndex, 0, 'a', 'b', 'c');

array.sort((a, b) => a - b);
console.log(array);

const array8 = [];

for(let a = 0; a < 10; a++){
    array8.push(a);
}

for(let a = 1; a < 10; a++){
    array8.push(a);
}

const arraynothing = [];

for (let i = 0; i < 10; i++) {
  const randomFraction = parseFloat((Math.random()).toFixed(2));
  array.push(randomFraction);
}

console.log(arraynothing);

for(let i = 0; i < 10; i++){
    const randomnumber = Math.floor(Math.random() * 10);
    arraynothing.push(randomnumber);
}

console.log(arraynothing);

const array9 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for(let i = 0; i < array9.length; i++){
    if(array9[i] >= 0 && array9[i] <= 10){
        console.log(array9[i]);
    }
}

function confirmAge(age) {
  if (age >= 18) {
    //alert("Felicitări, v-ați înregistrat cu succes!");
  } else {
    //alert("Ne pare rău, dar fără părinți nu vă puteți înregistra.");
  }
}

const varstaUtilizator = 20; 
confirmAge(varstaUtilizator);

//use function min 
const min = (a, b) => (a < b) ? a : b;
const pow = (x, n) => x ** n;

console.log(min(2, 5));
console.log(pow(2, 3));

const array10 = [1, 2, 3, 5, 8, 9, 10];
const newArray = array10.map(number => ({
  digit: number,
  odd: number % 2 !== 0
}));

console.log(JSON.stringify(newArray, null, 2));

const containZero = [12, 4, 50, 1, 0, 18, 40];
let containeZiro = false;

for(let i = 0; i < containZero.length; i++){
    if(containZero[i] === 0){
        containeZiro = true;
    }
}

console.log(containeZiro);

const arrWords = ['yes', 'hello', 'no', 'easycode', 'what'];

const checkArraywordslength = (array) => {
  if(array.length >= 3){
    return true;
  }
}

//[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
//{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
//{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
const letter = [
  {char:"a",index:12},
  {char:"w",index:8},
  {char:"Y",index:10},
  {char:"p",index:3},
  {char:"p",index:2},
  {char:"N",index:6},
  {char:" ",index:5},
  {char:"y",index:4},
  {char:"r",index:13},
  {char:"H",index:0},
  {char:"e",index:11},
  {char:"a",index:1},
  {char:" ",index:9},
  {char:"!",index:14},
  {char:"e",index:7}
];

const showLetterInOrder = (array) => {
  const newArray = array.sort((a, b) => a.index - b.index);

  let string = '';
  newArray.forEach(element => {
    string += element.char;
  });
  return string;
}


console.log(newArray)
const intulshit = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
]

console.log(intulshit.sort((a, b) => a.info.cores - b.info.cores));

const minToMax = [ [14, 45], [1],  ['a', 'c', 'd'] ] [ [1], [14, 45], ['a', 'c', 'd'] ];
const minToMaxJson = JSON.stringify(minToMax);

//console.log(minToMaxJson);

