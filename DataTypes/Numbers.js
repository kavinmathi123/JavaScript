// number
    let example=7.45;
    console.log(example);  // 7.45
    console.log(typeof example);  // number 

    // parseInt => if we want integer number 

    console.log(parseInt(example))  // display 7 -- parseInt give interger number

    //parseFloat => if we want float number

    console.log(parseFloat(example))  // 7.45

    // toFixed => if we want decimal place

    console.log(example.toFixed(4)) // 4.4500

    // challenge

    let example1=parseInt('hello 23 hi 12');
    console.log(example1) // nan becase first start with string so that consister as a string
    let example2=parseInt(' 23 hi 12');
    console.log(example2) // 23 => number type
    let example3=parseFloat('kabi 12 mk 13')
    console.log(example3) // nan 
    let example4=parseFloat(' 12 mk 13')
    console.log(example4) // 12 => number type
    let example5=45.3456.toFixed(0);
    console.log(example5) // 45  => string type
    let example6=98.233.toFixed(2);
    console.log(example6) // 98.23 => string type

    