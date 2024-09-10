
    // Array
    let arr=[1,2,3,4,5]
    console.log(arr);
    console.log(arr.length) // length is start from 1  
    console.log(arr[2]) // index is start from 0
    console.log(arr[7]) // undefined

    // Push is add new element of the array

    arr.push(4);
    console.log(arr);

    //pop is remove last element in the array

    arr.pop();
    console.log(arr);

    //shift is remove the first element of the array

    arr.shift();
    console.log(arr)
    
    //unshift is add new element in the first

    arr.unshift(5);
    console.log(arr)

    // overwrite the element 

    arr[0]=1;
    console.log(arr);

    // iterate the value use forEach

    arr.forEach((val)=>console.log(val));


    // challenge
        // in this case we passing with reference 
    let arr1=['kavi',0,true];
    let arr2=arr1; // arr2 is referring to arr1 
    arr2.push(5);   // so we push ele add new ele in arr1
    console.log(arr1); //[ 'kavi', 0, true, 5 ]
    console.log(arr2); //[ 'kavi', 0, true, 5 ]

    // use spread operator to create new array

    let arr3=['mathi',3,false];
    let arr4=[...arr3]; // create brand new array
    arr4.push(6);
    console.log(arr3); //[ 'mathi', 3, false]
    console.log(arr4); //[ 'mathi', 3, false, 6 ]

    // use map method to create new array

    let arr5=[true,4];
    let arr6=arr5.map((element)=>{
        return element;
    })
    arr6.push(8);
    console.log(arr5);
    console.log(arr6);
