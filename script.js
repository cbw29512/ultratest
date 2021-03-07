function checkPassword() {
  let adminpw = document.getElementById("username").value;
  let pw = document.getElementById("password").value;

  if (adminpw == "admin" && pw.length < 13 && !pw.match(/[!@#$%^&*]{3}/)) {
    document.getElementById("message1").textContent="Admin password must be over 13 characters long and contain atleast 3 special characrters";
    document.getElementById('myform').reset();
    return false;
  
  } else if (adminpw == "admin" && !pw.match(/[!@#$%^&*]{3}/)) {
    document.getElementById("message2").textContent="Admin password must contain 3 special character";
    document.getElementById('myform').reset();
    return false;
  
  } else if (adminpw == "admin" && pw.length < 13) {
    document.getElementById("message3").textContent="Admin password must be over 13 characters long";
    document.getElementById('myform').reset();
    return false;
  
  } else if (pw.length < 10 && !pw.match(/[a-z]/g) && /[A-Z]/g) {
    document.getElementById("message4").textContent="Password must be over 10 characters and must include atleast one letter";
    document.getElementById('myform').reset();
    return false;
  
  } else if (pw.length < 10 && !pw.match(/[0-9]/g)) {
    document.getElementById("message5").textContent="Password must be over 10 characters and must include atleast one number";
    document.getElementById('myform').reset();
    return false;
  
  } else if (!pw.match(/[a-z]/g) && /[A-Z]/g) {
    document.getElementById("message6").textContent="Admin password must contain 3 special character";
    document.getElementById('myform').reset();
    return false;

  } else if (!pw.match(/[0-9]/g)) {
    document.getElementById("message7").textContent="Password must include atleast one number";
    document.getElementById('myform').reset();
    return false;

  } else if (!pw.match(/[0-9]/g) && !pw.match(/[a-z]/g) && /[A-Z]/g) {
    document.getElementById("message8").textContent="Password must include atleast one number and one number";
    document.getElementById('myform').reset();
    return false;

  } else if (pw.length < 10) {
    document.getElementById("message9").textContent="Password must be over 10 characters";
    document.getElementById('myform').reset();
    return false;

  } else {
    alert("Password is accepted");
    return true;
  }
}
