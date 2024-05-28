
var nameerror = document.getElementById('uname');
var doberror = document.getElementById('dateob');
var emailerror = document.getElementById('mails');
var phoneerror = document.getElementById('number');
var passworderror = document.getElementById('passw');
var confirmerror = document.getElementById('conpassw');
var submiterror = document.getElementById('sub');



function nameValidation() {
    var name = document.getElementById('username').value;
    if (name.length == 0) {
        nameerror.innerHTML = "*enter username";
        return false;
    }
    if (name.length <= 2) {
        nameerror.innerHTML = "*enter atleast 3 characters";
        return false;
    }
    if (!name.match(/^[A-Za-z]*$/)) {
        nameerror.innerHTML = '*use alphabets only';
        return false;
    }
    else {
        nameerror.innerHTML = "";
        return true;
    }

}
function dobValidation() {
    var date = document.getElementById('dob').value;
    if (date=="") {
        doberror.innerHTML = "*enter DOB";
        return false;
    }
    else {
        doberror.innerHTML = "";
        return true;
    }
}
function phoneValidation() {
    var contact = document.getElementById('phone').value;
    if (contact.length == 0) {
        phoneerror.innerHTML = "*enter contact number";
        return false;
    }
    if (contact.length != 10) {
        phoneerror.innerHTML = "*enter 10 digits contact number";
        return false;
    }
    if (!contact.match(/^[0-9]{10}$/)) {
        phoneerror.innerHTML = '*enter valid contact number';
        return false;
    }
    else {
        phoneerror.innerHTML = "";
        return true;
    }
}
function emailValidation() {
    var mail = document.getElementById('email').value;
    if (mail.length == 0) {
        emailerror.innerHTML = "*enter email";
        return false;
    }
    if (!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)) {
        emailerror.innerHTML = '*enter valid email';
        return false;
    }
    else {
        emailerror.innerHTML = "";
        return true;
    }
}
function passwordValidation() {
    var pass = document.getElementById('password').value;
    if (pass.length == 0) {
        passworderror.innerHTML = "*enter password";
        return false;
    }
    if (pass.length < 8) {
        passworderror.innerHTML = "write atleast 8 characters";
        return false;
    }
    else {
        passworderror.innerHTML = "";
        return true;
    }
}
function confirmValidation(confirmPassword) {
    
    var pass = document.getElementById('password').value
    var conpass = confirmPassword;
    if (conpass.length == 0) {
        confirmerror.innerHTML = "*enter password";
        return false;
    }
    if (conpass!=pass) {
        confirmerror.innerHTML = "*password doesn't match";
        return false;
    }
    else {
        confirmerror.innerHTML = "";
        return true;
    }

}

function validateForm()
{
    if(!nameValidation() || !dobValidation() || !emailValidation() || !phoneValidation() || !passwordValidation() || !confirmValidation() )
        {
           submiterror.style.display = 'block';
           submiterror.innerHTML = "*fill each field correctly";
           setTimeout(function(){submiterror.style.display = 'none';}, 3000);
           return false;
        }
}

   


