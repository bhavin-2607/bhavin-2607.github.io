function validateForm() {
    var error = 0;
    var a = document.forms["qform"]["fname"].value;
    document.getElementById('fname_error').innerHTML = '';
    if (a == null || a == "") {
        error++;
        document.getElementById('fname_error').innerHTML = 'Valid Name is required!';
    }

    var b = document.forms["qform"]["email"].value;
    document.getElementById('email_error').innerHTML = '';
    if (b == null || b == "") {
        error++;
        document.getElementById('email_error').innerHTML = 'Valid email is required: demo@mail.xyz';
    }

    var c = document.forms["qform"]["contact"].value;
    document.getElementById('contact_error').innerHTML = '';
    if (c == null || c == "") {
        error++;
        document.getElementById('contact_error').innerHTML = 'Valid mobile number is required: 1234567890';
    }

    var d = document.forms["qform"]["req"].value;
    document.getElementById('req_error').innerHTML = '';
    if (d == null || d == "") {
        error++;
        document.getElementById('req_error').innerHTML = 'Service Name must be filled out';
    }

    var e = document.forms["qform"]["ser"].value;
    document.getElementById('ser_error').innerHTML = '';
    if (e == null || e == "") {
        error++;
        document.getElementById('ser_error').innerHTML = 'Service Type must be filled out';
    }

    if(error>0) {
        return false;
    }
    return true;
}