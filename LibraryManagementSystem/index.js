// Book Class is represent a library books.

class Book{
    //Initializes a new Book object with title, author, ISBN, and sets isAvailable to true
    constructor(title, author, ISBN){
        this.title=title;
        this.author=author;
        this.ISBN=ISBN;
        this.isAvailable=true; //initially book is available
    }
// Method to display book details
    displayDetails(){
        return `${this.title} by ${this.author} (ISBN: ${this.ISBN}) - ${this.isAvailable ? 'Available' : 'Not Available'}`;
    }
}

// Member class is represent a library members

class Member {
    //Initializes a new Member object 
    constructor(name, memberId) {
      this.name = name;
      this.memberId = memberId;
      this.borrowedBooks = [];
    }
  
    // Method to borrow a book
    borrowBook(book) {
      if (book.isAvailable) {
        this.borrowedBooks.push(book);
        book.isAvailable = false; // Mark the book as not available
        console.log(`${this.name} borrowed "${book.title}"`);
      } else {
        console.log(`Sorry, "${book.title}" is currently not available.`);
      }
    }
  
    // Method to return a book
    returnBook(book) {
      const index = this.borrowedBooks.indexOf(book);
      if (index !== -1) {
        this.borrowedBooks.splice(index, 1);
        book.isAvailable = true; // Mark the book as available
        console.log(`${this.name} returned "${book.title}"`);
      } else {
        console.log(`"${book.title}" is not borrowed by ${this.name}`);
      }
    }

    // Method to display borrowed books
    displayBorrowedBooks() {
      if (this.borrowedBooks.length === 0) {
        console.log(`${this.name} has no borrowed books.`);
      } else {
        console.log(`Books borrowed by ${this.name}:`);
        this.borrowedBooks.forEach((book) => console.log(book.displayDetails()));
      }
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
      this.members = [];
    }
  
    // Method to add a new book to the library
    addBook(book) {
      this.books.push(book);
      console.log(`Book added: ${book.displayDetails()}`);
    }
  
    // Method to register a new member
    registerMember(member) {
      this.members.push(member);
      console.log(`Member registered: ${member.name} (ID: ${member.memberId})`);
    }
  
    // Method to find a book by its ISBN
    findBook(ISBN) {
      return this.books.find((book) => book.ISBN === ISBN);
    }
  
    // Method to find a member by their memberId
    findMember(memberId) {
      return this.members.find((member) => member.memberId === memberId);
    }
  
    // Method to display all books in the library
    displayBooks() {
      console.log(`Books in ${this.name} Library:`);
      this.books.forEach((book) => console.log(book.displayDetails()));
    }
  
    // Method to display all registered members
    displayMembers() {
      console.log(`Members of ${this.name} Library:`);
      this.members.forEach((member) => console.log(`Name: ${member.name}, ID: ${member.memberId}`));
    }
  }

    // Create a new library
    const myLibrary = new Library("City Central Library");

    // Create some books
    const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1234567890");
    const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "0987654321");
    const book3 = new Book("1984", "George Orwell", "1122334455");

    // Add books to the library
    myLibrary.addBook(book1);
    myLibrary.addBook(book2);
    myLibrary.addBook(book3);

    // Register some members
    const member1 = new Member("Alice", "M001");
    const member2 = new Member("Bob", "M002");

    myLibrary.registerMember(member1);
    myLibrary.registerMember(member2);

    // Display all books
    myLibrary.displayBooks();

    // Display all members
    myLibrary.displayMembers();

    // Borrow and return books
    member1.borrowBook(book1); // Alice borrows "The Great Gatsby"
    member1.borrowBook(book2); // Alice borrows "To Kill a Mockingbird"
    member2.borrowBook(book1); // Bob tries to borrow "The Great Gatsby" (not available)

    member1.displayBorrowedBooks(); // Display books borrowed by Alice

    member1.returnBook(book1); // Alice returns "The Great Gatsby"
    member2.borrowBook(book1); // Bob borrows "The Great Gatsby"

    member2.displayBorrowedBooks(); // Display books borrowed by Bob
    myLibrary.displayBooks(); // Display all books in the library
