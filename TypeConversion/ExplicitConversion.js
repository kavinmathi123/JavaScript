/* Explicit conversion is when you manually convert a value from one data type to another using JavaScript's
 built-in functions or operators. This approach is clear and avoids unexpected results */
    
    /* Common Methods for Explicit Conversion
    To String: Convert a value to a string using String(), .toString(), or string concatenation (+ with an empty string).
    To Number: Convert a value to a number using Number(), parseInt(), parseFloat(), + unary operator.
    To Boolean: Convert a value to a boolean using Boolean().*/

    // Convert String

    let num = 123;
    let str1 = String(num);  // "123"
    let str2 = num.toString();  // "123"
    let str3 = num + '';  // "123" (string concatenation)

    console.log(typeof str1);  // "string"
    console.log(typeof str2);  // "string"
    console.log(typeof str3);  // "string"

    //Covert to number

    let str = "123";
    let num1 = Number(str);  // 123
    let num2 = parseInt(str);  // 123
    let num3 = parseFloat(str);  // 123
    let num4 = +str;  // 123 (unary plus)

    console.log(typeof num1);  // "number"
    console.log(typeof num2);  // "number"
    console.log(typeof num3);  // "number"
    console.log(typeof num4);  // "number"

    //Convert to Boolean

    let bool = "hello";
    let bool1 = Boolean(bool);  // true
    let bool2 = !!bool;  // true (double negation)

    console.log(typeof bool1);  // "boolean"
    console.log(typeof bool2);  // "boolean"

    //Converting an object to a string:

    let obj = { name: "Alice" };
    let objStr = JSON.stringify(obj);  // '{"name":"Alice"}'
    console.log(typeof objStr)

    // Converting aa array to string
    let arr = [1, 2, 3];
    let arrStr = arr.toString();  // "1,2,3"

