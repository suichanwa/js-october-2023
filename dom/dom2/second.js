const array = ['fruit', 'vegetables', 'sugars', 'bread', 'fruit', 'vegetables', 'sugars', 'bread', 'thingies', 'thingies'];

//show all elements on page
function showAll() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const item = document.createElement('li');
        item.innerHTML = array[i];
        list.appendChild(item);
    }
}

showAll();