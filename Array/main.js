'use strict';
let i;

const number = [1, 2, 3, ,4]
number.push(5);
number.pop();
number.unshift("a");
number.shift();

//console.log(number);

const space = [1,2,3,4];
console.log(space);

console.log(number[number.length - 1]);

const arr3 = [100, 200 ,300 , 400];
const arr4 = [500, 600, 700, 800];
const arr5 = [...arr3, ...arr4, 900, 1000];

//console.log(Array.isArray(arr5));
//console.log(arr3.concat(arr4));
//console.log(arr5.indexOf(900));
//console.log(arr5.fill(900, 0, 2));
//console.log(arr5.join(' '));
//console.log(arr5.reverse());
//console.log(arr5.splice(0, 2, 55));

const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr7 = arr6.filter((item) => item % 2 === 0);

for (i = 0; i < arr6.length; i++) console.log(arr6[i]);


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerePare = [];

for (i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        numerePare.push(numbers2[i]);
    }
}

console.log(numerePare);