/* Promises: Objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. 
Promises improve code readability by providing .then() and .catch() methods to handle success and errors. */

function FetchData(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log("data fetch successfully")
        },2000)
    });
}

console.log("Start");

FetchData()
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error)
    });

console.log("End");

//Start
//End
//wait for 2 second and print data fetch successfully.