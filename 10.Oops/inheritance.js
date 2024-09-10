//Inheritance: A class can inherit properties and methods from another class. This allows for code reuse.
    /*Definition: Inheritance is a mechanism 
    where a new class (child class) can inherit properties and methods from an existing class (parent class).*/
    /*Benefit: Inheritance allows for code reuse and the creation of a hierarchical relationship between classes. 
    It enables you to build complex systems with shared behavior while avoiding code duplication.*/

    class Person{
        //constructor to initilize object
        constructor(name,age){
            this.name=name; //property
            this.age=age; 
        }
        //method
        greet()
        {
            console.log(`Hello my name is ${this.name},i am ${this.age} years old`);
        }
    }
    
    class Student extends Person{
        constructor(name,age,grade){
            super(name,age); // Call the parent class constructor
            this.grade=grade; // New property for Student
        }
        // Overriding a method
        greet(){
            console.log(`Hello my name is ${this.name},i am ${this.age} years old and i am in garde ${this.grade}`);
        }
    }
    const student1=new Student("dhanu",20,"10th");
    student1.greet();

    // Another Example
    
    class Animal{
        constructor(name){
            this.name=name;
        }
        speak(){
            console.log(`${this.name} makes a sound`);
        }
    }
    class Dog extends Animal{
        speak(){
            console.log(`${this.name} barks.`);
        }
    }
    const dog1=new Dog("Rex");
    dog1.speak();