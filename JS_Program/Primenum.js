//If any integer evenly divides it, the number is not prime. 

function PrimeNum(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++)     // Math.sqrt(7)   
    {
        if(num%i===0){
            return false;
        }
    }
    return true;
}
console.log(PrimeNum(15));
