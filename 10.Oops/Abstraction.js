//Abstraction: Abstraction means hiding complex implementation details and showing only the necessary features of an object.
    /* Definition: Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object.*/
    /* Benefit: Abstraction reduces complexity by allowing the programmer to focus on interactions
     at a higher level without worrying about the details.*/

    class Car {
        startEngine() {
            console.log('Engine started');
        }

        drive() {
            this.startEngine();
            console.log('Car is driving');
        }
    }

    const myCar = new Car();
    myCar.drive(); // Engine started, Car is driving
    /*Here, the user of the Car class doesn't need to know how the startEngine method works internally; 
    they only need to know how to drive the car.*/
