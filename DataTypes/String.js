 //String 
    //concat 

    let firstName="kavin";
    let lastName="mathi";
    console.log(`${firstName} ${lastName}`);

    // use Propertice
    console.log(`${firstName} ${lastName}`.length); // length 11

    // trim method

    console.log(`     ${firstName} ${lastName}`.length); // length 16
    console.log(`     ${firstName} ${lastName}`.trim().length); // avoid extra space
    
    // toUpperCase() and toLowerCase

    console.log(`${firstName} ${lastName}`.toUpperCase());
    console.log(`${firstName} ${lastName}`.toLowerCase());

    //split 

    console.log(`${firstName} ${lastName}`.split(" "));  // String convert to array string
    console.log(`${firstName} ${lastName}`.split(""));

    // changle 

    let fullName=`${firstName} ${lastName}`
    console.log(fullName)