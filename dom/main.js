console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.all[10].childNodes);

//make a function that take two parameters and check first one are parent of second one or not
const isParent = (parent, child) => parent.contains(child);

const links = document.links;
for (let link of links) console.log(link.href);
const images = document.images;

const p = document.querySelectorAll("p")[4]; 
console.log(p.textContent);

const info = (node) => {
    console.log(node.nodeName);
    console.log(node.nodeType);
    console.log(node.nodeValue);
}

const getTextFromUl = (ul) => {
    const lis = ul.querySelectorAll("li");
    for (let li of lis) console.log(li.textContent);
}

//without using innetHTML aduagati in lista cateva li cu classa new-item si textul item + numbarul li
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.className = "new-item";
li.textContent = "item 5";
ul.appendChild(li);
 
for (let link of links) link.innerHTML = `<strong>${link.textContent}</strong>`;

const newimg = document.createElement("img");
newimg.setAttribute("src", "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");

//find mark element on page and add text "green" to it
const mark = document.querySelector("mark");
mark.textContent = "green";
//reverse the list 
const lis = ul.querySelectorAll("li");
for (let i = lis.length - 1; i >= 0; i--) ul.appendChild(lis[i]);



