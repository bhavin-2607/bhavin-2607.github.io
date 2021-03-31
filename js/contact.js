function validateForm() {
    var error = 0;
    var a = document.forms["form2"]["fname"].value;
    document.getElementById('fname_error').innerHTML = '';
    if (a == null || a == "") {
        error++;
        document.getElementById('fname_error').innerHTML = 'Valid Name is required!';
    }

    var b = document.forms["form2"]["email"].value;
    document.getElementById('email_error').innerHTML = '';
    if (b == null || b == "") {
        error++;
        document.getElementById('email_error').innerHTML = 'Valid email is required: demo@mail.xyz';
    }

    var c = document.forms["form2"]["contact"].value;
    document.getElementById('contact_error').innerHTML = '';
    if (c == null || c == "") {
        error++;
        document.getElementById('contact_error').innerHTML = 'Valid mobile number is required: 1234567890';
    }

    if(error>0) {
        return false;
    }
    return true;
}