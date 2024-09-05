// Frist we want to convert string to array use Split() method and reverse array using reverse method() and then convert array to string using join() method
function Palindrome(str){
    let arr= str.split('').reverse().join('');
    return str===arr;
}
console.log(Palindrome("malayalam"))