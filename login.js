// validation code for inputs

var email =document.forms['form']['Email'];
var password = document.forms['form']['password'];

var email_error =document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addventlistener('textinput',email_verify);
password.addventlistener('textinput',pass_verify);

function validation(){
    if(email.value.length<9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;

    }
    if(password.value.length<9) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;

    }
}
function email_verify(){
    if(email.value.length >=8){
        email.style.border= "1px solid silver";
        email_error.style.display="block";
        return true;
    }
}
function pass_verify(){
    if(password.value.length >=5){
        password.style.border= "1px solid silver";
        pass_error.style.display="block";
        return true;
    }
}
