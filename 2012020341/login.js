function form() {
    var email = document.getElementById("loginemail").value;
    var password = document.getElementById("loginpassword").value;

    var emailregex = /\S+@\S+\.\S+/;
    var passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (!emailregex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (!passwordregex.test(password)) {
        alert("Password must contain at least 8 characters, including an uppercase letter, lowercase letter and a number");
        return false;
    }

    return true;
}
