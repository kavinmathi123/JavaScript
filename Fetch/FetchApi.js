// Data fetching in JavaScript involves retrieving data from a server or another source and 
//using it in a web application. This is commonly done using APIs (Application Programming Interfaces) 
//that provide endpoints to get or post data.

//fetch() API
    //The fetch() API is a modern and more powerful alternative to the older XMLHttpRequest.
    // It is built into most modern browsers and uses promises, making it easier to work with 
    //asynchronous code.

    // Fetching data using the fetch() API
    fetch('https://jsonplaceholder.typicode.com/posts') // The URL of the API endpoint
    .then(response=>{
        if(!response.ok){
            throw new Error("Network response was not ok "+response.statusText);
            
        }
        return response.json(); // Parsing the JSON from the response
    })
    .then(data=>{
        console.log(data); // Handling the data from the response
    })
    .catch(error=>{
        console.error('There was a problem with the fetch operation:', error);
    });
