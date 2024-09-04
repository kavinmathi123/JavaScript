// object  has properties and things that they can do ..object have key and value pari
// properti is key and then value is value..
let example1={
    firstName:'kavin',
    lastName:'mathi',
    address:{
        city:'cbe',
        state:'tamilnadu'
    },
    age:23,
    bike:['honda','swift','xuv']
};
console.log(example1);  // entire object
console.log(example1.firstName) // particular name
console.log(example1.address) // address object
console.log(example1.address.city) // particular city name
console.log(example1.bike);
console.log(example1.bike[2]);
example1.age=30; //  overwrite the age 
console.log(example1.age);

console.log(Object.keys(example1)); // display entire keys
console.log(Object.values(example1)); //display entire values

// exists on the object 

console.log(example1.hasOwnProperty('firstName'));

// Challenge

let example2={
    firstName:'kavi',
    age:23,
    city:'cbe'
}
let example3=example2; //reference is passed
example3.age=22;
console.log(example2); //{ firstName: 'kavi', age: 22, city: 'cbe' }
console.log(example3); //{ firstName: 'kavi', age: 22, city: 'cbe' }

// we want to create new object so use Object property and assign method to create new object

let example4=Object.assign({},example2);  //assign method have to property one is empty object another one is assign object
example4.lastName='mathi';
console.log(example2); //{ firstName: 'kavi', age: 22, city: 'cbe' }
console.log(example4);  //{ firstName: 'kavi', age: 22, city: 'cbe',lastName:'mathi }