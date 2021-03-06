function checkPassword() {
  const adminpw = document.getElementById("username").value;
  const pw = document.getElementById("password").value;

  if (adminpw == "admin" && pw.length < 13 && !pw.match(/[!@#$%^&*]{3}/)) {
    alert(
      "Admin password must be over 13 characters long and contain 3 special character"
    );
    return false;
  } else if (adminpw == "admin" && !pw.match(/[!@#$%^&*]{3}/)) {
    alert("Admin password must contain 3 special character");
    return false;
  } else if (adminpw == "admin" && pw.length < 13) {
    alert("Admin password must be over 13 characters long");
    return false;
  } else if (pw.length < 10 && !pw.match(/[a-z]/g) && /[A-Z]/g) {
    alert(
      "Password must be over 10 characters and must include atleast one letter"
    );
    return false;
  } else if (pw.length < 10 && !pw.match(/[0-9]/g)) {
    alert(
      "Password must be over 10 characters and must include atleast one number"
    );
    return false;
  } else if (!pw.match(/[a-z]/g) && /[A-Z]/g) {
    alert("Password must include atleast one letter");
    return false;
  } else if (!pw.match(/[0-9]/g)) {
    alert("Password must include atleast one number");
    return false;
  } else if (!pw.match(/[0-9]/g) && !pw.match(/[a-z]/g) && /[A-Z]/g) {
    alert("Password must include atleast one number and one number");
    return false;
  } else if (pw.length < 10) {
    alert("Password must be over 10 characters");
    return false;
  } else {
    alert("Password is accepted");
    return true;
  }
}
