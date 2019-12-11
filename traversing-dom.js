
// TRAVERSING THE DOM
// Insert before or after a HTML element
// NODE: block of text .... inner text .... outer text.... line break

// query the dom by css selector
var itemList = document.querySelector('#items');

//parentNode
// Finding the parentNode most of the time is the same
// as fingidn the parentElement
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// The parentElement contains the targeted element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// childNodes are elements or peaces of text contained inside
// is better to use children, to get only the contained elements
console.log(itemList.childNodes);

// children
// Use children to get a collection of elements contained inside
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
// FirstChild will get the first NODE
// Better to use FirstElementChild, to get the first ELEMENT
console.log(itemList.firstChild);

// firstElementChild
// firstElementChild, will return the first element inside
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// lastChild will return the last NODE inside
console.log(itemList.lastChild);

// lastElementChild
// lastElementChild will return the last element inside
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibiling
// nextSibling wil return the next NODE or adyacent NODE
console.log(itemList.nextSibling);

// nextElementSibiling
// nextElementSibling wil return the next element or adyacent element
console.log(itemList.nextElementSibling);

// previousSibling
// get the previous adyacent NODE
console.log(itemList.previousSibling);

// previousElementSibling
// get the previus adyacent ELEMENT
console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement
// createElement method will create al element of the specified type
// Create a div
var newDiv =  document.createElement('div');

// className
// className method will add a class to the element
newDiv.className= 'hello';

// id property allows you to add an id to an element
// Add id
newDiv.id = 'hello1';

// setAttribute
// setAttribute will let you set  any specified attribute
// Add attr
newDiv.setAttribute('title', 'Hello Div');

// createTextNode
// Creates a block of text
// "textNodes" can be inserted in the DOM

var newDivText = document.createTextNode('Hello World');

// appendChild
// appendChild to append a Child means adding a new element inside
// to the bottom of the list of elements

newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

// insertBefore
// insert a new element before an element
container.insertBefore(newDiv, h1);