// 5!=5*4*3*2*1=>120 

function factorial(number) { 

    if (number === 0 || number === 1) { 
  
      return 1; 
  
    } else { 
  
        return number * factorial(number-1); 
  
    } 
  
  } 
console.log(factorial(5));