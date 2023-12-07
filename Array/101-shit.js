// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and
// assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns
// the boolean value true
// To complete Exercise #0, uncomment the following line of JS
const doingJSRightNow = true;
console.log(doingJSRightNow);

//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign
// it the boolean value of false
const onMarsRightNow = false;

// Exercise 2
// Create a variable named fruits and assign it an array of strings
// containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
const fruits = ['mango', 'banana', 'guava', 'kiwi', 'strawberry'];

//  Exercise 3
//  Create a variable named vegetables and assign it an array of fruits
//  containing the following vegetable names as strings:
//  eggplant, broccoli, carrot, cauliflower, and zucchini
const vegetables = ['eggplant', 'broccoli', 'carrot', 'cauliflower', 'zucchini'];

// Exercise 4
// Create a variable named numbers and assign it an array of
// numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
const numbers = [1,2,3,4,5,6,7,8,9,10];

// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to
// an array rather than recreating the array.
fruits.push('tomato');

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.
vegetables.push('tomato');

// Exercise 7
// Given the array of numbers defined below, reverse the array of
// numbers that you created above.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.reverse();

// Exercise 8
// Sort the vegetables in alphabetical order. Recommend
// finding a way to sort the array with a built-in method
vegetables.sort();

// Exercise 9
// Write the code necessary to sort the fruits in reverse
// alphabetical order
fruits.sort().reverse();

// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.
const fruitsAndVeggies = fruits.concat(vegetables);

// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
const addOne = (number) => number + 1;

// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
const isPositive = (number) => number > 0;

// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
const isNegative = (number) => number < 0;

// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if
// that number is odd.
const isOdd = (number) => number % 2 !== 0;

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that
// number is even.
const isEven = (number) => number % 2 === 0;

// Exercise 16
// Write a function definition named identity that takes in any input and returns that input.
// Don't overthink this one!
const identity = (input) => input;

// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or
// false if the value is both greater than zero and odd
const isPositiveOdd = (number) => number > 0 && number % 2 !== 0;

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value
// is both greater than zero and even
const isPositiveEven = (number) => number > 0 && number % 2 === 0;

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is
// both less than zero and odd.
const isNegativeOdd = (number) => number < 0 && number % 2 !== 0;

// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value
// is both less than zero and even.
const isNegativeEven = (number) => number < 0 && number % 2 === 0;

// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.
const halfNumber = (number) => number / 2;

// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
const doubleNumber = (number) => number * 2;

// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.
const tripleNumber = (number) => number * 3;

// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with
// the sign reversed.
const reverseSign = (number) => number * -1;

// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the
// provided number
const absoluteValue = (number) => Math.abs(number);

// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number
// is evenly divisible by 3.
const isMultipleOfThree = (number) => number % 3 === 0;

// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number
// is evenly divisible by 5.
const isMultipleOfFive = (number) => number % 5 === 0;

// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the
// number is evenly divisible by both 3 and 5.
const isMultipleOfBothThreeAndFive = (number) => number % 3 === 0 && number % 5 === 0;

// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.
const square = (number) => number * number;

// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.
const add = (number1, number2) => number1 + number2;

// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.
const cube = (number) => number * number * number;

// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number
const squareRoot = (number) => Math.sqrt(number);

// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.
const subtract = (number1, number2) => number1 - number2;

// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.
const multiply = (number1, number2) => number1 * number2;

// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.
const divide = (number1, number2) => number1 / number2;

// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.
const quotient = (number1, number2) => Math.floor(number1 / number2);

// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
const remainder = (number1, number2) => number1 % number2;

// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers,
// squares each number, then returns the sum of both squares.
const sumOfSquares = (number1, number2) => (number1 * number1) + (number2 * number2);

// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number,
// multiplies it by two, adds 3 and returns the result.
const timesTwoPlusThree = (number) => (number * 2) + 3;

// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and
// returns the product.
const areaOfRectangle = (number1, number2) => number1 * number2;

// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a
// circle's radius and returns the area of the circle
const areaOfCircle = (radius) => Math.PI * (radius * radius);

// Exercise 42
// Write a function definition named circumference that takes in a number
// representing a circle's radius and returns the circumference.
const circumference = (radius) => 2 * Math.PI * radius;

// Exercise 43
// Write a function definition named isVowel that takes in value and
// returns true if the value is a, e, i, o, u in upper or lower case.
const vowels = ['a', 'e', 'i', 'o', 'u'];
const isVowel = (letter) => vowels.includes(letter.toLowerCase());

// Exercise 44
// Write a function definition named hasVowels that takes in
// value and returns true if the string contains any vowels.
const hasVowels = (string) => string.split('').some(isVowel);

// Exercise 45
// Write a function definition named countVowels that
// takes in value and returns the count of the nubmer of vowels in a sequence.
const countVowels = (string) => string.split('').filter(isVowel).length;

// Exercise 46
// Write a function definition named removeVowels that takes in string and
// returns the string without any vowels
const removeVowels = (string) => [];

// Exercise 47
// Write a function definition named startsWithVowel that takes in string and
// true if the string starts with a vowel
const startsWithVowel = (string) => isVowel(string[0]);

// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
const endsWithVowel = (string) => isVowel(string[string.length - 1]);

// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
const startsAndEndsWithVowel = (string) => isVowel(string[0]) && isVowel(string[string.length - 1]);

// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.
const first = (sequence) => sequence[0];

// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.
const second = (sequence) => sequence[1];

// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.
const third = (sequence) => sequence[2];

// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.
const forth = (sequence) => sequence[3];

// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.
const last = (sequence) => sequence[sequence.length - 1];

// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.
const secondToLast = (sequence) => sequence[sequence.length - 2];

// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.
const thirdToLast = (sequence) => sequence[sequence.length - 3];

// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array
const firstAndSecond = (sequence) => [sequence[0], sequence[1]];

// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array
const firstAndLast = (sequence) => [sequence[0], sequence[sequence.length - 1]];

// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.
const firstToLast = (sequence) => sequence.concat(sequence.shift());

// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.
const sumAll = (sequence) => array.reduce((a, b) => a + b, 0);

//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value
const mean = (sequence) => sequence.reduce((a, b) => a + b, 0) / sequence.length;

// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value
//Had to look this one up... difficult.
const median = require('median');

// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus theminimum.
const maxMinusMin = (array) => Math.max(...array) - Math.min(...array);

// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together
const productOfAll = (sequence) => sequence.reduce((a, b) => a * b, 1);

// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.
const getHighestNumber = (sequence) => Math.max(...sequence);

// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.
const getSmallestNumber = (sequence) => Math.min(...sequence);

// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.
const onlyOddNumbers = (sequence) => sequence.filter((number) => number % 2 !== 0);

// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.
const onlyEvenNumbers = (sequence) => sequence.filter((number) => number % 2 === 0);

// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.
const onlyPositiveNumbers = (sequence) => sequence.filter((number) => number > 0);

// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.
const onlyNegativeNumbers = (sequence) => sequence.filter((number) => number < 0);

// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence
const hasEvens = (sequence) => sequence.some((number) => number % 2 === 0);

// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers
const countEvens = (sequence) => sequence.filter((number) => number % 2 === 0).length;

// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence
const hasOdds = (sequence) => sequence.some((number) => number % 2 !== 0);

// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence
const countOdds = (sequence) => sequence.filter((number) => number % 2 !== 0).length;

// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers
const countNegatives = (sequence) => sequence.filter((number) => number < 0).length;

// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers
const countPositives = (sequence) => sequence.filter((number) => number > 0).length;

// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence
const onlyPositiveEvens = (sequence) => sequence.filter((number) => number > 0 && number % 2 === 0);

// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence
const onlyPositiveOdds = (sequence) => sequence.filter((number) => number > 0 && number % 2 !== 0);

// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence
const onlyNegativeEvens = (sequence) => sequence.filter((number) => number < 0 && number % 2 === 0);

// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence
const onlyNegativeOdds = (sequence) => sequence.filter((number) => number < 0 && number % 2 !== 0);

// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.
const shortestString = (array) => array.sort((a, b) => a.length - b.length)[0];

// Exercise 82
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.
const longestString = (array) => array.sort((a, b) => b.length - a.length)[0];

// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns an with only the unique values from that array.
const getUniqueValues = (array) => array.filter((value, index) => array.indexOf(value) === index);

// Exercise 84
// Write a function definition named elementsTimesTwo that takes in an array of numbers and returns an array with each value multiplied by 2.
const elementsTimesTwo = (array) => array.map((number) => number * 2);

// Exercise 85
// Write a function named flatten that takes in an array of arrays. Return the flattened array.
const flatten = (array) => array.flat();

// Exercise 86
// Write a function definition named addOneToArray that adds one to every number in an array
const addOneToArray = (array) => array.map((number) => number + 1);

// Working with JS Objects
// The following objects
const tukeyPaper = {
    "title": "The Future of Data Analysis",
    "author": "John W. Tukey",
    "link": "https://projecteuclid.org/euclid.aoms/1177704711",
    "year_published": 1962
}

const thomasPaper = {
    "title": "A mathematical model of glutathione metabolism",
    "author": "Rachel Thomas",
    "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    "year_published": 2008
}

// Exercise 87
// Write a function named getPaperTitle that takes in a object and returns the title property
const getPaperTitle = thomasPaper.title && tukeyPaper.title;

// Exercise 88
// Write a function named getYearPublished that takes in an objects and returns the value behind the "year_published" key.
const getYearPublished = thomasPaper.year_published && tukeyPaper.year_published;

// this code defines a JS object with information about a book.
const book = {
    "title": "Genetic Algorithms and Machine Learning for Programmers",
    "price": 36.99,
    "author": "Frances Buontempo"
}

// Exercise 89
// Write a function named getPrice that takes in a object and returns the price
const getPrice = (Object) => Object.price;

// Exercise 90
// Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author's name
const getBookAuthor = (Object) => Object.author;

// The next exercises work with a arrays of objects.
// You'll see arrays of objects over and over again with data in a program.
// Here is our arrays of objects.
const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
]


// Exercise 91
// Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.
const getNumberOfBooks = (array) => array.length;

// Exercise 92
// Write a function named totalOfBookPrices that takes in a array of objects and returns the sum total of all the book prices added together
const totalOfBookPrices = (array) => array.reduce((a, b) => a + b.price, 0);

// Exercise 93
// Write a function named getAverageBookPrice that takes in a array of objects and returns the average book price.
const getAverageBookPrice = (array) => array.reduce((a, b) => a + b.price, 0) / array.length;

// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object's price in the array
const highestPriceBook = (array) => array.sort((a, b) => b.price - a.price)[0];

// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array
const lowestPriceBook = (array) => array.sort((a, b) => a.price - b.price)[0];

// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shoppingCart object.
const getTaxRate = (shoppingCart) => shoppingCart.taxRate;

// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.
const numberOfItemTypes = (shoppingCart) => Object.keys(shoppingCart.items).length;

// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type
const totalNumberOfItems = (shoppingCart) => Object.values(shoppingCart.items).reduce((a, b) => a + b, 0);

// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
//use mediana function
const getAverageItemPrice = (shoppingCart) => median(Object.values(shoppingCart.items));

// Exercise 100
// Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's price.
// Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity
const average = require('average');
const getAverageSpentPerItem = (shoppingCart) => average(Object.values(shoppingCart.items).map((quantity) => quantity * shoppingCart.items.price));

// Exercise 101
// Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible.
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"
const mostSpentOnItem = (shoppingCart) => Object.keys(shoppingCart.items).reduce((a, b) => shoppingCart.items[a] > shoppingCart.items[b] ? a : b );