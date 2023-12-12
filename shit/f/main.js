const list = document.querySelectorAll('.list>li');

const btn = document.querySelector('.square');
const btn2 = document.querySelector('.btn');
btn.onclick = () => btn.style.backgroundColor = 'red'

btn.onmouseenter = () => 
    btn.style.backgroundColor = 'black';
    btn2.style.backgroundColor = 'red';

btn.onmouseleave = () => 
    btn.style.backgroundColor = 'green'; 
    btn2.style.backgroundColor = 'black';

const butt = document.querySelector('.butt');
//butt.onclick = () => console.log("clicked twice");
//butt.onclick = () => console.log('first');

butt.addEventListener('click', (ev) => {
    console.log(ev);
    ev.target.textContent = "tedjfadjkf";
});



const addNewEelementInList = () => {
    const newElement = document.createElement('li');
    newElement.textContent = 'new element';
    document.querySelector('.list').appendChild(newElement);
}

const rgb = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 155);
    const b = Math.floor(Math.random() * 155);
    return `rgb(${r}, ${g}, ${b})`;
}

const makeanSquare = () => {
    const newElement = document.createElement('div');
    newElement.classList.add('rainbow');
    newElement.style.width = '100px';
    newElement.style.height = '100px';
    newElement.style.borderRadius = '50%';
    newElement.style.backgroundColor = 'red';
    newElement.style.display = 'inline-block';

    newElement.onmouseover = () => newElement.style.backgroundColor = rgb();
    document.querySelector('.list').appendChild(newElement);
}

list.forEach((item, index) => {
    item.addEventListener('click', (ev) => {
        if(index % 2 === 0) {
            ev.target.style.backgroundColor = 'red';
            addNewEelementInList();
        }
        else ev.target.style.backgroundColor = 'green';
        addNewEelementInList();
    })
})

const makeNewbtn = document.querySelector('.newbtn');
makeNewbtn.addEventListener('click', () => {
    addNewEelementInList();
});

const square = document.querySelector('.rainbow');

const newSquare = document.querySelector('.secondbtn');
newSquare.addEventListener('click', () => {
    const isCreated = false;

    if(isCreated === false){
        makeanSquare();
        isCreated = true;
    } else {
        square.remove();
        isCreated = false;
    }
});

parent = document.body;
const makeELement = (elm, classa = ' ', parent) => { 
    const newElement = document.createElement(elm);
    newElement.classList.add(classa);
    parent.appendChild(newElement);
    return newElement;
}

const btt = makeELement('button', 'btn', parent);
console.log(btt);
