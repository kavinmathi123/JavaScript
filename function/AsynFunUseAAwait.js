/* Async/Await: A syntactic sugar built on top of Promises, allowing asynchronous code to be written in a synchronous style. 
This makes the code easier to read and write.*/

function fetchData() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully!");
    }, 2000);
    });
}

async function getData() {
    console.log("Start");
    
    try {
    const data = await fetchData(); // Waits for the promise to resolve
    console.log(data);
    } catch (error) {
    console.error(error);
    }
    
    console.log("End");
}

getData();
