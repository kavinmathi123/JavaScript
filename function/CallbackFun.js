/* A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed.
 Callbacks are a way to ensure that a certain code doesn't execute until another code has already finished execution.  */


 // basic 
 function printMessage1() {
    console.log("Hello, World!");
  }
  
  printMessage1();

  //callback function

  //We have a function greet that takes two parameters: a name (a string) and callback (a function).
  //We pass printMessage as the callback to greet. As a result, printMessage is executed after the greeting.

  function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // Calling the callback function
  }
  
  function printMessage() {
    console.log("This is a callback function.");
  }
  
  greet("Alice", printMessage); // pass name and function


  //anther example

  function FetchData(callback){
    console.log("Data Fetched");

    setTimeout(()=>{
        console.log("Data fetched successfully");
        callback();
    },2000)
  }

  function processFetchedData() {
    console.log("Processing the fetched data.");
  }

  FetchData(processFetchedData);


  
  