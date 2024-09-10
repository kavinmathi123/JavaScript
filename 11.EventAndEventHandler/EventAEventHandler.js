/* Events and event handling are fundamental concepts in JavaScript, particularly for creating interactive
 web applications. An event is an action or occurrence that happens in the browser, such as a user 
 clicking a button, typing in a text box, or loading a webpage. 
 Event handling involves writing code that listens for these events and responds to them appropriately. */

    /* An event in JavaScript can be any of the following:
        User actions: Clicking a button, pressing a key, moving the mouse, etc.
        Browser actions: Page load, resize, scroll, etc.
        Form events: Submitting a form, focusing or blurring an input field, etc.
        Document events: DOM content loaded, ready state changed, etc. */ 

    /* Some common event types include:
        Mouse Events: click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove
        Keyboard Events: keydown, keyup, keypress
        Form Events: submit, focus, blur, change, input
        Window Events: load, resize, scroll, unload
        Document Events: DOMContentLoaded, readystatechange */ 


        //addEventListener()

            /* addEventListener() takes two arguments: the event type (click) and a callback function 
            that executes when the event occurs.
            The callback function is often written as an anonymous function but can also be a named function. */ 

        const button=document.querySelector('button');
        button.addEventListener('click',function (){
            alert("clicked")
        });

        
