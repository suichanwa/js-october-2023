const color = document.getElementById('red');
const color2 = document.getElementById('blue');
const color3 = document.getElementById('green');

const Color = {
    red: "red",
    blue: "blue",
    green: "green"
};

const storedColor = localStorage.getItem('selectedColor');
if (storedColor) {
    document.body.style.backgroundColor = storedColor;
}

localStorage.setItem('changeColor', JSON.stringify(Color));

const changeColor = JSON.parse(localStorage.getItem('changeColor'));

color.addEventListener('click', () => {
    document.body.style.backgroundColor = changeColor.red;
    localStorage.setItem('selectedColor', changeColor.red);
});

color2.addEventListener('click', () => {
    document.body.style.backgroundColor = changeColor.blue;
    localStorage.setItem('selectedColor', changeColor.blue);
});

color3.addEventListener('click', () => {
    document.body.style.backgroundColor = changeColor.green;
    localStorage.setItem('selectedColor', changeColor.green);
});
