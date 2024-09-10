/* The Response object in JavaScript represents the entire HTTP response that is returned when using
 the fetch() API to make a network request.
 This object contains various pieces of information about the HTTP response, including the status, headers, 
 body, and several utility methods to handle the response data.*/ 

//  Properties of the Response Object

/* 1. status:

    Type: number
    Description: The HTTP status code of the response
    (e.g., 200 for success, 404 for not found, 500 for server error).*/  

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response.status); // 200
    })

/* 2.statusText:

    Type: string
    Description: The status message corresponding to the status code 
    (e.g., "OK" for 200, "Not Found" for 404).*/ 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response.statusText); //OK
    })

/* 3.ok:

    Type: boolean
    Description: A boolean that indicates whether the response was successful 
    (i.e., the status code is in the range 200-299). */ 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response.ok); // ture 
    })

/* 4.url:

    Type: string
    Description: The URL of the response. This is useful when the request is redirected */ 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response.url); // The final URL of the response
    })

/* 5.redirected:

    Type: boolean
    Description: A boolean that indicates whether the response was redirected 
    (i.e., if the request was redirected to a different URL).*/ 

    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response.redirected); // false
    })

/* 6.type:

    Type: string
    Description: Indicates the type of response. 
    Possible values are "basic", "cors", "error", "opaque", or "opaqueredirect". */ 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response.type); // basic
    })

/* 7.headers:

    Type: Headers object
    Description: An object containing all the HTTP headers associated with the response.*/ 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response.headers.get('Content-Type'));  // application.json ; charset=utf-8
    })

/* 8.body:

    Type: ReadableStream
    Description: A readable stream of the body content.
    This property is generally used for more advanced streaming scenarios. */ 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response.body);  // ReadableStream { locked: false, state: 'readable', supportsBYOB: false }
    })

/* 9.bodyUsed:

    Type: boolean
    Description: A boolean that indicates whether the body has been read. If it has been read, 
    the value will be true; otherwise, false.*/ 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response.bodyUsed);  //false
    })


    // Methods of the Response Object

    /* 1.response.json():

    Returns: Promise
    Description: Parses the response body as JSON and returns a promise that resolves 
    with the JavaScript object or array.*/ 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        return response.json();
    }).then(data=>{
        console.log(data)
    });

    /* 2.response.text():

    Returns: Promise
    Description: Reads the response body as text and returns a promise that resolves with a string. */
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        return response.text();
    }).then(data=>{
        console.log(data)
    });
    
    /* 3.response.blob():

    Returns: Promise
    Description: Reads the response body as a Blob object, often used for binary data like images or files.*/ 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        return response.blob();
    }).then(data=>{
        console.log(data)
    });

    /* 4.response.arrayBuffer():

    Returns: Promise
    Description: Reads the response body as an ArrayBuffer, useful for working with binary data at a lower level. */
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        return response.arrayBuffer();
    }).then(data=>{
        console.log(data)
    });

    /* response.formData():

    Returns: Promise
    Description: Reads the response body as FormData, which is useful for handling form submissions. */ 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        return response.formData();
    }).then(data=>{
        console.log(data)
    });