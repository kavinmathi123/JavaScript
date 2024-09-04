//Polymorphism: Polymorphism allows methods to do different things based on the object they are acting upon.

    /* Definition: Polymorphism is the ability of different objects to be treated as 
    instances of the same class through a common interface.*/
    /*Benefit: Polymorphism allows methods to be used interchangeably, depending on the object that invokes them.
     This makes your code more flexible and extendable.*/

     class Animal {
        speak() {
            console.log('Animal makes a sound');
        }
    }
    
    class Dog extends Animal {
        speak() {
            console.log('Dog barks');
        }
    }
    
    class Cat extends Animal {
        speak() {
            console.log('Cat meows');
        }
    }
    
    const animals = [new Dog(), new Cat()];
    
    animals.forEach(animal => {
        animal.speak(); // Dog barks, Cat meows
    });
    
    //both Dog and Cat are treated as Animal objects, but each has its own implementation of the speak method.
