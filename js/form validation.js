function validateForm() {
    var error = 0;
    var a = document.forms["form1"]["fname"].value;
    document.getElementById('fname_error').innerHTML = '';
    if (a == null || a == "") {
        error++;
        document.getElementById('fname_error').innerHTML = 'Valid Name is required!';
    }

    var b = document.forms["form1"]["email"].value;
    document.getElementById('email_error').innerHTML = '';
    if (b == null || b == "") {
        error++;
        document.getElementById('email_error').innerHTML = 'Valid email is required: demo@mail.xyz';
    }

    var c = document.forms["form1"]["contact"].value;
    document.getElementById('contact_error').innerHTML = '';
    if (c == null || c == "") {
        error++;
        document.getElementById('contact_error').innerHTML = 'Valid mobile number is required: 1234567890';
    }

    var d = document.forms["form1"]["ticket"].value;
    document.getElementById('ticket_error').innerHTML = '';
    if (d == null || d == "") {
        error++;
        document.getElementById('ticket_error').innerHTML = 'Valid Ticket ID is required!';
    }

    if(error>0) {
        return false;
    }
    return true;
}