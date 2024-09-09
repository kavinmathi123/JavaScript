/* Event propagation describes how events flow through the DOM tree. It has three phases:

Capturing Phase: The event starts from the root and travels down to the target element.
Target Phase: The event reaches the target element.
Bubbling Phase: The event bubbles up from the target element back to the root.
By default, event listeners in JavaScript listen for events in the bubbling phase,
 but you can set them to listen during the capturing phase by passing a 
 third argument to addEventListener():*/

const button=document.querySelector('button');
function handler(){
    console.log("HEllo");
}
button.addEventListener('click', handler, true); // Capturing phase
button.addEventListener('click', handler, false); // Bubbling phase (default)  