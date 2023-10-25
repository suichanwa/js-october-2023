'use strict';

const grandpa = (a) => {
    console.log(a);
    const secondFunc = (b) => {
        console.log(b);
        const nextFunc = (c) => {
            console.log(c);
        }
        return nextFunc;
    }
    return secondFunc;
}

//run the secondFunct
//grandpa(1)(2)(3);

const first = (cbf) => {
    setTimeout(() => {
        console.log('Hey there');
        cbf(second);
    }, 3000);
}

const second = () => {
    console.log('The End');
}

first(second);


//make an object person with stuffs and make a function to get username and password
//make a function to get the username and password and return the object

const person = {
    username: 'John',
    password: '1234',
    age: 25,
}

person.username = 'John Doe';
console.log(person['test']);

//modify the object
const modify = (obj, username, password) => {
    obj.username = username;
    obj.password = password;
    return obj;
}

const newPerson = modify(person, 'Jane', '5678');

//add a new property to the object
person.age = 25;
person['age'] = 25;

person.shit = 'shit';

//console.log(person.shit)

//go throw object 
for(let a in person){
    console.log(a);
    console.log(person[a]);
}

const objs = {
    name: 'test'
}

const func1 = (objs, proprietry) => {
    return console.log(proprietry);
}

let bitch = {
    name: "john",
    ismarried: true
}

const checkMarriage = (obj, propertys) => {
    if(bitch.ismarried === true) console.log("yeah") ;
}

checkMarriage(bitch, true)