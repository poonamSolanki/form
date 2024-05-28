var nameerror = document.getElementById('uname');
var passworderror = document.getElementById('passw');
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
function validateForm()
{
    if(!nameValidation() || !passwordValidation() )
        {
           submiterror.style.display = 'block';
           submiterror.innerHTML = "*fill each field correctly";
           setTimeout(function(){submiterror.style.display = 'none';}, 3000);
           return false;
        }
}