const display=document.getElementById('display');

function appendToDisplay(input){
    display.value +=input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
    display.value=eval(display.value);
    // use eval function that is take expression like (1+3+5) evalute and give the result it is a own built in calculator
    }
    catch(error){
    display.value="Error";
    }

}