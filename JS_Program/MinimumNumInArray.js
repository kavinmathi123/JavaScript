let Arr=[4,6,7,8,9,2];
function MinimumNum(Arr){
    return Math.min(...Arr);  // Use spread operator to pass array elements
}
console.log(MinimumNum(Arr));