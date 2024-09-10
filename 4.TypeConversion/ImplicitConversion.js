/* Implicit conversion occurs when JavaScript automatically converts a value from one type to another, 
usually when operators are applied to values of different types. This can often lead to unexpected 
results if not handled properly.*/

    /* Common Scenarios of Implicit Conversion
String Coercion: When using the + operator with a string.
Numeric Coercion: When using arithmetic operators like -, *, /.
Boolean Coercion: When using logical operators like &&, ||, !, or in conditional statements (if, while).*/

    //String conversion
    let result1 = '5' + 2;  // "52" (number 2 is converted to string "2")
    let result2 = 'Hello' + true;  // "Hellotrue" (boolean true is converted to string "true")

    console.log(result1);  // "52"
    console.log(result2);  // "Hellotrue"

    //Numberic Conversion

    let result3 = '5' - 2;  // 3 (string "5" is converted to number 5)
    let result4 = '5' * 2;  // 10 (string "5" is converted to number 5)
    let result5 = '5' / 2;  // 2.5 (string "5" is converted to number 5)

    console.log(result3);  // 3
    console.log(result4);  // 10
    console.log(result5);  // 2.5

    //Boolean Conversion

    console.log(Boolean(0));  // false
    console.log(Boolean(''));  // false
    console.log(Boolean([]));  // true
    console.log(Boolean({}));  // true
    console.log(Boolean(null));  // false
    console.log(Boolean(undefined));  // false

    // Examples with logical operators
    let result6 = 'hello' || 42;  // "hello" (first truthy value)
    let result7 = '' && 42;  // "" (first falsy value)

    console.log(result6);  // "hello"
    console.log(result7);  // ""

    //Comparison conversion

    console.log(5 == '5');  // true (string "5" is converted to number 5)
    console.log(5 === '5');  // false (strict comparison, no conversion)
    console.log(null == undefined);  // true (both are considered "empty" values)



