function form() {
  var name = document.getElementById("regname").value;
  var email = document.getElementById("regemail").value;
  var mobile = document.getElementById("regmobile").value;
  var password = document.getElementById("regpassword").value;
  var conpassword = document.getElementById("regconpassword").value;

  var nameregex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var emailregex = /\S+@\S+\.\S+/;
  var mobileregex = /^\d{10}$/;
  var passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (!nameregex.test(name)) {
    document.getElementById("sname").innerHTML =
      "Please enter a valid name";
    return false;
  }

  if (!emailregex.test(email)) {
    document.getElementById("semail").innerHTML =
      "Please enter a valid email address";
    return false;
  }

  if (!mobileregex.test(mobile)) {
    document.getElementById("smobile").innerHTML =
      "Please enter a valid 10 digit phone number";
    return false;
  }

  if (!passwordregex.test(password)) {
    document.getElementById("spassword").innerHTML =
      "Password must contain at least 8 characters, including an uppercase letter, lowercase letter and a number";
    return false;
  }

  if (password != conpassword) {
    document.getElementById("sconfirmpassword").innerHTML =
      "Passwords do not match";
    return false;
  }

  return true;
}