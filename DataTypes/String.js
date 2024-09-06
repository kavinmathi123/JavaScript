 //String  
      /* Purpose: Represents text or characters.
         Syntax: Strings are defined using single ('), double ("), or backticks (`) for template literals. */

      /* Common Methods: .length, .toUpperCase(), .toLowerCase(), .indexOf(), .includes(), .slice(), 
      .substring(), .replace(), .split() */

    //concat 

    let firstName="kavin";
    let lastName="mathi";
    console.log(`${firstName} ${lastName}`);

    // use Propertice
    console.log(`${firstName} ${lastName}`.length); // length 11

    // trim method

    console.log(`${firstName} ${lastName}`.length); // length 16
    console.log(`${firstName} ${lastName}`.trim().length); // avoid extra space
    
    // toUpperCase() and toLowerCase

    console.log(`${firstName} ${lastName}`.toUpperCase());
    console.log(`${firstName} ${lastName}`.toLowerCase());

    //split 

    console.log(`${firstName} ${lastName}`.split(" "));  // String convert to array string
    console.log(`${firstName} ${lastName}`.split(""));

    //indexOf
   
    let index=firstName.indexOf('a')
    console.log(index);

    //includes

    let includes=firstName.includes('a');  // return boolean value
    console.log(includes);

   //slice => returns selected string elements as a new string

   let slice= firstName.slice(0,2);  // 0 is starting position and 3 is number of element skip last element 
   console.log(slice); // display ka

   //substing

      //1.string.substring(startIndex, endIndex)

   let name1="Dhanusri"
   let subStr=name1.substring(0,4);
   console.log(subStr);

      // 2.Omitting endIndex

   let text = "JavaScript";
   let result = text.substring(4);
   console.log(result);  // "Script"

         //Swapping Indices

   let text1 = "JavaScript";
   let result1 = text1.substring(5, 0);  // swap start 0 and end 5
   console.log(result1);  // "JavaS"
      
         //startIndex Equals endIndex

   let text2 = "JavaScript";
   let result2 = text2.substring(3, 3);
   console.log(result2);  // ""  When startIndex and endIndex are the same, substring() returns an empty string

         // Handling Negative Indices

   let text3 = "JavaScript";
   let result3 = text3.substring(-3, 4);//Negative indices are treated as 0, so substring(-3, 4) is equivalent to substring(0, 4).
   console.log(result3);  // "Java" 
         

    // challenge

    let fullName=`${firstName} ${lastName}`
    console.log(fullName)