const array = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

const sumArray = (array) =>array.reduce((acc,cur)=>acc+cur,0);

const primaryColor = [
    {
        color: 'red',
        code: '#f00'
    },
    {
        color: 'green',
        code: '#0f0'
    },
    {
        color: 'blue',
        code: '#00f'
    }
]

const collooourrs = primaryColor.reduce((acc,cur)=>{
    acc[cur.color] = cur.code;
    return acc;
},{});

console.log(collooourrs);



const calcuateValues = (a,b) =>{
    return [a+b, undefined, a*b, a/b];
}
const number1to4 = [1,2,3,4];
const [number1, number2, number3, number4] = number1to4;
const [sum1, sub, mul, div] = calcuateValues(10,5);
console.log(sum1, sub, mul, div);
const firstElement = number1to4[0];

const persoana = {
    name: 'Ion',
    age: 23,
    address: {
        street: 'idk',
        city: 'Bucuresti',
    }
}

const {name: names, age, aksjlkas = 'person'} = persoana;
const {address: {street, city}} = persoana;

//persoana buletin 

const buletin = {
    name:'name',
    age: 23,
    street: 'idk',
    city: 'Bucuresti',
}

const buletinShow = ({name, age}) =>{
    return `${name} ${age}`;
}

console.log(buletinShow(buletin));

//make an array with object and use foreach

const arrayObject = [
    {
        name: 'Ion',
        age: 23,
        address: {
            street: 'idk',
            city: 'Bucuresti',
        }
    },
    {
        name: 'Ion',
        age: 23,
        address: {
            street: 'idk',
            city: 'Bucuresti',
        }
    },
    {
        name: 'Ion',
        age: 23,
        address: {
            street: 'idk',
            city: 'Bucuresti',
        }
    }
]
//show in console street and city using foreach

arrayObject.forEach(({address: {street, city}}) => console.log(`${street} ${city}`));
console.log(arrayObject);
