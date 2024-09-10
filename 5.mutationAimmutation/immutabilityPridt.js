/* Immutability means that once a value is created, it cannot be changed. Instead, any operations that 
modify data will return a new value or data structure rather than altering the original one.
   primitive types like number, string, boolean, null, undefined, and symbol are immutable.*/ 

   //Primitive Types Are Immutable:

    let a = 5;
    let b = a; // b is now also 5
    a = 10; // Modifying a doesn't affect b
    console.log(a); // Output: 10
    console.log(b); // Output: 5
    
    //Here, changing a does not affect b because numbers are immutable.