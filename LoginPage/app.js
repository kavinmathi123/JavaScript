const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const userVal=username.value.trim();
    const emailVal=email.value.trim();
    const passedVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();

    if(userVal===''){
        setError(username,'UserName is required')
    }
    else
    {
        setSuccess(username)
    }

    if(emailVal===''){
        setError(email,'Email is required')
    }
    else
    {
        setSuccess(email)
    }
    if(passedVal===''){
        setError(password,'password is required')
    }
    else if(passedVal.length<8){
        setError(password,'Password must be atleast 8 characters long')
    }
    else
    {
        setSuccess(password)
    }
    if(cpasswordVal===''){
        setError(cpassword,'confirm password is required')
    }
    else if(cpasswordVal !==passedVal){
        setError(cpassword,'Password does not match');
    }
    else
    {
        setSuccess(cpassword)
    }
}

//element-password -- msg--required

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText='';  // already have error we want to remove so ues ''
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error')
}
