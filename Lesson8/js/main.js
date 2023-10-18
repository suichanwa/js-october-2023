const randomString = (length) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
}

let MathStudying = {
    abs: Math.abs(Math.random() * 10),
    acos: Math.acos(Math.random()),
    acosh: Math.acosh(Math.random() * 10),
    asin: Math.asin(Math.random()),
    asinh: Math.asinh(Math.random() * 10),
    atan: Math.atan(Math.random()),
    atan2: Math.atan2(Math.random(), Math.random()),
    atanh: Math.atanh(Math.random()),
    cbrt: Math.cbrt(Math.random() * 10),
    ceil: Math.ceil(Math.random() * 10),
    cos: Math.cos(Math.random() * Math.PI),
    cosh: Math.cosh(Math.random()),
    exp: Math.exp(Math.random()),
    floor: Math.floor(Math.random() * 10),
    log: Math.log(Math.random() * 10),
    max: Math.max(Math.random(), Math.random(), Math.random(), Math.random()),
    min: Math.min(Math.random(), Math.random(), Math.random(), Math.random()),
    pow: Math.pow(Math.random(), Math.random()),
    random: Math.random(),
    round: Math.round(Math.random() * 10),
    sin: Math.sin(Math.random() * Math.PI),
    sinh: Math.sinh(Math.random()),
    sqrt: Math.sqrt(Math.random() * 10),
    tan: Math.tan(Math.random() * Math.PI),
    tanh: Math.tanh(Math.random()),
    trunc: Math.trunc(Math.random() * 10),
};


console.log(MathStudying);

let StringManipulation = {
    charAt: randomString(5).charAt(2),
    charCodeAt: randomString(7).charCodeAt(1),
    concat: randomString(5).concat(' ', randomString(5)),
    endsWith: randomString(7).endsWith(randomString(3)),
    fromCharCode: String.fromCharCode(Math.floor(Math.random() * 26) + 65, Math.floor(Math.random() * 26) + 65, Math.floor(Math.random() * 26) + 65),
    includes: randomString(10).includes(randomString(3)),
    indexOf: randomString(10).indexOf(randomString(3)),
    lastIndexOf: randomString(10).lastIndexOf(randomString(3)),
    localeCompare: randomString(5).localeCompare(randomString(6)),
    match: randomString(20).match(/ain/g),
    repeat: randomString(5).repeat(3),
    replace: randomString(15).replace(randomString(5), randomString(5)),
    search: randomString(15).search(randomString(5)),
    slice: randomString(10).slice(0, 4),
    split: randomString(15).split(randomString(5)),
    startsWith: randomString(10).startsWith(randomString(3)),
    substr: randomString(10).substr(4, 6),
    substring: randomString(10).substring(0, 4),
    toLocaleLowerCase: randomString(10).toLocaleLowerCase(),
    toLocaleUpperCase: randomString(10).toLocaleUpperCase(),
    toLowerCase: randomString(10).toLowerCase(),
    toString: randomString(5).toString(),
    toUpperCase: randomString(10).toUpperCase(),
    trim: `  ${randomString(5)}, ${randomString(5)}  `.trim(),
    valueOf: randomString(15).valueOf(),
};


console.log(StringManipulation);


let NumberFunctions = {
    isFinite: isFinite(Math.random() * 10),
    isInteger: Number.isInteger(Math.random() * 10),
    isNaN: isNaN(randomString(5)),
    isSafeInteger: Number.isSafeInteger(Math.random() * 10),
    toExponential: (Math.random() * 10).toExponential(),
    toFixed: (Math.random() * 10).toFixed(2),
    toPrecision: (Math.random() * 10).toPrecision(4),
    toString: (Math.random() * 10).toString(),
    valueOf: (Math.random() * 10).valueOf(),
};

console.log(NumberFunctions);