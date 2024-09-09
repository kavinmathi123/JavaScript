/* electing Elements
To manipulate the DOM, you first need to select the elements you want to work with. 
There are several methods for selecting elements:

document.getElementById(): Selects an element by its unique ID.
document.getElementsByClassName(): Selects all elements with a given class.
document.getElementsByTagName(): Selects all elements with a given tag name.
document.querySelector(): Selects the first element that matches a given CSS selector.
document.querySelectorAll(): Selects all elements that match a given CSS selector. */ 

//Selecting element

const elementById = document.getElementById('myElement'); // Select by ID
const elementsByClass = document.getElementsByClassName('myClass'); // Select by class name
const elementsByTag = document.getElementsByTagName('p'); // Select by tag name
const firstElementBySelector = document.querySelector('.myClass'); // Select first element that matches the selector
const allElementsBySelector = document.querySelectorAll('.myClass'); // Select all elements that match the selector
