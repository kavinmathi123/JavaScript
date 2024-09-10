//Classes: A class is a blueprint for creating objects. 
    //It encapsulates data (properties) and functions (methods) that operate on the data.

    // Objects: An object is an instance of a class. It has properties and methods defined by the class.

    // define class

    class Person{
        //constructor to initiallize object
        constructor(name,age){
            this.name=name; //property
            this.age=age; // property
        }

        // method
        greet(){
            console.log(`hello my name is ${this.name} and i am ${this.age} years old`);
        }
    }
    // Creating Objects (Instances) of a Person Class
    const person1 = new Person('John', 30);
    const person2 = new Person("Bob", 30);

    // Call the greet method
    person1.greet();
    person2.greet();


    // Another Example

    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    
        area() {
            return this.width * this.height;
        }
    }
    
    const rect1 = new Rectangle(10, 20);
    const rect2 = new Rectangle(5, 15);
    console.log(rect1.area()); // 200
    console.log(rect2.area()); // 75
    