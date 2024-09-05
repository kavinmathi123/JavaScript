let arr = [3, 4, 6, 7, 2, 9];
let arr2 = [];  // Initialize arr2 as an empty array

function EvenArr(arr) {
    arr.forEach(val => {
        if (val % 2 == 0) {  // Check if the number is even
            arr2.push(val);  // Add the even number to arr2
        }
    });
    return arr2;  // Return the array containing only even numbers
}

console.log(EvenArr(arr));  // Output: [4, 6, 2]

//another method to get even element in array

let numbers=[2,3,4,56,6];

function filterEvenNumbers(numbers) { 

    return numbers.filter(num => num % 2 === 0); 
  
  }
console.log(filterEvenNumbers(numbers))