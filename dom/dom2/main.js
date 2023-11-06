const body = document.body;
const div = document.createElement('h2');
div.textContent = 'Hello, DOM!';
div.style.color = 'red';
body.append(div);

const a = document.querySelector('.a');
const p = document.createElement('p');
p.textContent = 'I am red!';
p.classList.add('red');
a.after(p);

const array = ['fruit', 'vegetables', 'sugars', 'bread', 'fruit', 'vegetables', 'sugars', 'bread', 'thingies', 'thingies'];
const ul = document.createElement('ol');
array.forEach(item => {
  const li = document.createElement('ol');
  li.textContent = item;
  ul.append(li);
});
body.append(ul);

const ol = document.querySelector('ol');

for(let i = 0; i < ol.children.length; i++){
    if(i % 2 === 0){
        ol.children[i].style.color = 'red';
    } else{
        ol.children[i].style.color = 'blue';
    }
}

const coloredBackgorund = document.querySelectorAll('ol').forEach(item => {
    item.style.backgroundColor = 'lightgray';
});

const li = document.querySelectorAll('li');

