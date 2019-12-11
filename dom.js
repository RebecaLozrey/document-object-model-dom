// EXAMINE THE DOCUMENT OBJECT
// The root element is the "document" object
// The parent of the "document" object is the "window" object
// The "window" object is provided by the browser


console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title =  123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);


// GETELEMENTBYID
// document.getElementById
// Ids are unique


console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);

// element.textContent method returns the contents of the element
// but ignores any applied style
headerTitle.textContent = 'Hello';
// element.innerText, applies the style and then returns the contents
headerTitle.innerText = 'Goodbye';

console.log(headerTitle.innerText);
// set HTML contents for an element
headerTitle.innerHTML = '<h3>Hello</h3>';
// change the style attribute for an element
header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME
// documento.getElementsByClassName
// Returns a colection of HTML elements with the class

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// The style of an HTML collection CANNOT be set like this
//items.style.backgroundColor = '#f4f4f4';

// To set the style of each element of a collection:
for(var i = 0; i < items.length; i++){
  items[i].style.backgroundColor = '#f4f4f4';
}

//GETELEMENTSBYTAGNAME 
// document.getElementsByTagName
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';


// QUERYSELECTOR
// document.querySelector
// executes a query in the dom using CSS selectors
// document.querySelector returns the first HTML element that matches the query

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// QUERYSELECTORALL
// document.querySelectorAll returns a collection of HTML elements that match the query
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even= document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}

