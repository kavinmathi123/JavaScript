/* Mutation refers to changing or modifying the original data structure or object.
   data types like objects and arrays are mutable, meaning you can change their contents without
    changing their identity (i.e., the memory reference remains the same). */ 

    //Mutating an Object:

    const person = { name: 'Alice', age: 25 };
    person.age = 26; // Mutates the object
    console.log(person); // Output: { name: 'Alice', age: 26 }

    // Here, the age property of the person object is directly modified.

    //Mutating an Array:

    const numbers = [1, 2, 3];
    numbers.push(4); // Mutates the array
    console.log(numbers); // Output: [1, 2, 3, 4]

//The push method adds a new element to the array, altering the original array.

    //Creating Immutable Objects Using Libraries: You can create immutable objects using libraries like Immutable.js or by leveraging JavaScript's built-in methods like Object.freeze():

    const person = Object.freeze({ name: 'Alice', age: 25 });
    person.age = 26; // This will have no effect as the object is frozen
    console.log(person); // Output: { name: 'Alice', age: 25 }

    //Object.freeze() makes the object immutable, so any attempt to modify it will not have an effect.

    //Creating a New Array or Object Instead of Mutating: Instead of mutating an existing array or object, you create a new one with updated values:


    const numbers1 = [1, 2, 3];
    const newNumbers = [...numbers1, 4]; // Creates a new array
    console.log(newNumbers); // Output: [1, 2, 3, 4]
    console.log(numbers); // Output: [1, 2, 3] (original array is unchanged)


