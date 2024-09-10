/* Event Object
    When an event occurs, an event object is created. This object contains details about the event,
     such as the type of event, the target element that triggered the event, and any other relevant
      properties. */ 

const button=document.getElementById('scdBtn');
button.addEventListener('click',function(event)
{   
    console.log(event); // Logs the event object
    console.log(event.type); // "click"
    console.log(event.target); // The button element
});  

//event.preventDefault(): Prevents the default action of the event (e.g., stopping a form from submitting).
//event.stopPropagation(): Stops the event from bubbling up to parent elements.