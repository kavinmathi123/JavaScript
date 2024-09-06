let num=1234;

let reverse=function (num){
    let reversed=0;
    while(num !==0){   // given num must be greated then 0 
        let rem=num%10;     // first we find last ele
        reversed=(reversed*10)+rem;  // then store last ele to fisrt ele
        num=parseInt(num/10); // 
    }
    return reversed;
}
console.log(reverse(num))