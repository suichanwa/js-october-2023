'use strict'

function buletin(name, surname, number){
    console.log(`Name: ${name}, Surname: ${surname}, Number: ${number}`);
}

function calc(x,y,operation){
    switch(operation){
        case '+':
            return x+y;
        case '-':
            return x-y;
        case '*':
            return x*y;
        case '/':
            return x/y;
        default:
            console.log('Error');
    }
}


const delailsAboutdog = (name, rasa, color, age) => {
    return {
        name,
        rasa,
        color,
        age
    }
}

console.log(delailsAboutdog('Rex', 'Buldog', 'Black', 5));

const arrowed = (x,y,z) => {
    return x+y+z;
}

const plus = (x,y) => x+y;

let a = 5;
const hello = (a = 23) => console.log(a);

const mile = (x) => x*1.6;

console.log(mile(5));

//function return area of triangle 
const triangle = (a,b,c) => {
    let p = (a+b+c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

//Contor vocal - Câte vocale există?
// / *
// Folosind funcția VowelCounter de mai jos, faceți
// următoarele:
//    1. Primiți un string ca parametru
//    2. Numărați și returnați numărul de vocale din
//    stringul respectiv.
//    Ar trebui să se ia atât  vocale cu majuscule, cât
//    și de vocale minuscule.
//    SUGESTIE - poate fi necesar să studiați Array
//    SUGESTIE - încercați să căutați metoda .includes ()*/
//use charcode letters to find vowels without converting it to string


const VowelCounter = (str) => {
    const vowels = [65, 69, 73, 79, 85, 97, 101, 105, 111, 117];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str.charCodeAt(i))) {
            count++;
        }
    }

    return count;
}

        

console.log(VowelCounter('fuck bitches'));

/* Creați variabile ( principala, rata dobânzii
și ani cu valorile 200000, 0,05 și respectiv 30).
Creați o altă variabila numită nume și dați-i valoarea propriului nume.*/

const 