let MathStudying = {
    abs: Math.abs(5),
    acos: Math.acos(0.5),
    acosh: Math.acosh(2),
    asin: Math.asin(0.7),
    asinh: Math.asinh(1.5),
    atan: Math.atan(0.8),
    atan2: Math.atan2(1, 2),
    atanh: Math.atanh(0.3),
    cbrt: Math.cbrt(27),
    ceil: Math.ceil(3.7),
    cos: Math.cos(Math.PI / 3),
    cosh: Math.cosh(0.4),
    exp: Math.exp(2),
    floor: Math.floor(4.6),
    log: Math.log(10),
    max: Math.max(5, 8, 2, 10),
    min: Math.min(5, 8, 2, 10),
    pow: Math.pow(2, 3),
    random: Math.random(),
    round: Math.round(3.2),
    sin: Math.sin(Math.PI / 4),
    sinh: Math.sinh(0.5),
    sqrt: Math.sqrt(16),
    tan: Math.tan(Math.PI / 4),
    tanh: Math.tanh(0.6),
    trunc: Math.trunc(7.8)
};

console.log(MathStudying);

let StringManipulation = {
    charAt: 'hello'.charAt(2),
    charCodeAt: 'world'.charCodeAt(1),
    concat: 'Hello'.concat(' ', 'World'),
    endsWith: 'OpenAI'.endsWith('AI'),
    fromCharCode: String.fromCharCode(65, 66, 67),
    includes: 'JavaScript'.includes('Script'),
    indexOf: 'JavaScript'.indexOf('a'),
    lastIndexOf: 'JavaScript'.lastIndexOf('a'),
    localeCompare: 'apple'.localeCompare('banana'),
    match: 'The rain in Spain'.match(/ain/g),
    repeat: 'Hello'.repeat(3),
    replace: 'Hello, world'.replace('world', 'there'),
    search: 'Hello, world'.search('world'),
    slice: 'JavaScript'.slice(0, 4),
    split: 'apple,banana,cherry'.split(','),
    startsWith: 'JavaScript'.startsWith('Java'),
    substr: 'JavaScript'.substr(4, 6),
    substring: 'JavaScript'.substring(0, 4),
    toLocaleLowerCase: 'HELLO WORLD'.toLocaleLowerCase(),
    toLocaleUpperCase: 'hello world'.toLocaleUpperCase(),
    toLowerCase: 'Hello World'.toLowerCase(),
    toString: (12345).toString(),
    toUpperCase: 'Hello World'.toUpperCase(),
    trim: '  Hello, World  '.trim(),
    valueOf: 'Hello, World'.valueOf()
};

console.log(StringManipulation);


let NumberFunctions = {
    isFinite: isFinite(5),
    isInteger: Number.isInteger(5),
    isNaN: isNaN("Hello"), // You can replace "Hello" with a value to check for NaN
    isSafeInteger: Number.isSafeInteger(42),
    toExponential: (5).toExponential(),
    toFixed: (3.14159265359).toFixed(2), // You can replace the number with one of your choice
    toPrecision: (123.456789).toPrecision(4), // You can replace the number with one of your choice
    toString: (42).toString(),
    valueOf: (10).valueOf()
};