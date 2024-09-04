//Encapsulation: Encapsulation is the concept of bundling data (properties) and methods that operate on the data into a single unit (class).
    /* Benefit: Encapsulation helps protect the internal state of an object from external modification. 
    By controlling access to the internal data, you can prevent unintended interference and reduce bugs.*/

    /* Encapsulation in JavaScript is done by using private properties and methods, which are defined using the # symbol.*/

    class BankAccount {
        constructor(balance) {
            this._balance = balance; // _balance is encapsulated
        }
    
        deposit(amount) {
            this._balance += amount;
        }
    
        getBalance() {
            return this._balance;
        }
    }
    
    const account = new BankAccount(100);
    account.deposit(50);
    console.log(account.getBalance()); // 150

    //Here, the _balance property is encapsulated, and access to it is controlled through methods.

    