const number = [1,2,3,4,5,6,7,8,9,10, 11, 12,13,14,15];

console.log(number[6]);

for(let i = 0; i < number.length; i++){
    console.log(number[i]);
}

//odd numbers 
const oddNumbers = (array) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            console.log(array[i]);
        }
    }
}

console.log(oddNumbers(number));


const students = [
    {
        prenume: "John",
        nume: "Adam",
        varsta: 24,
        casatorit: false,
    },
    {
        prenume: "John",
        nume: "Adam",
        varsta: 24,
        casatorit: false,
    },
    {
        prenume: "John",
        nume: "Adam",
        varsta: 24,
        casatorit: false,
    },
    {
        prenume: "John",
        nume: "Adam",
        varsta: 24,
        casatorit: false,
    }
]

students.forEach(item => console.log(item.prenume));

const arr3 = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109];
const arr4 = [];
/*
arr3.forEach(item =>{
    arr4.push(item * 2);
});
*/
for(let i = 0; i < arr3.length; i++){
    arr4.push(arr3[i] * 2);
}

console.log(arr4);

const arr5 = [1,2,3,4,5,6,7,8,9,10];
//use map
const arr6 = arr5.map(item => item * 2);

const random = [1,2,3,4,5,6,7,8,9,10];


const random2 = random.filter(item => {
    if (item % 2 !== 0) return item
});

console.log(random2);