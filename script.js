function checkPassword() {
  let usenam = document.getElementById("username").value;
  let pw = document.getElementById("password").value;

  if (usenam == "admin" && pw.length < 13 && !pw.match(/[!@#$%^&*]{3}/)) {
    document.getElementById("message1").textContent="Admin password must be atleast 13 characters long and contain atleast 3 special characrters";
    document.getElementById('myform').reset();
    return false;
  
  } else if (usenam == "admin" && pw.length >= 13 && !pw.match(/[!@#$%^&*]{3}/)) {
    document.getElementById("message2").textContent="Admin password must contain atleast 3 special character";
    document.getElementById('myform').reset();
    return false;
  
  } else if (usenam == "admin" && pw.length < 13 && pw.match(/[!@#$%^&*]{3}/)) {
    document.getElementById("message3").textContent="Admin password must be atleast 13 characters long";
    document.getElementById('myform').reset();
    return false;
    
  } else if (usenam == "admin" && pw.length >= 13 && pw.match(/[!@#$%^&*]{3}/)) {
    alert("Admin password is accepted");
    document.getElementById('myform').reset();
    return false;

  } else if (pw.length < 10 && !pw.match(/[A-Za-z]/g) && pw.match(/[0-9]/g)) {
    document.getElementById("message4").textContent="Password must be atleast 10 characters and must include atleast one letter";
    document.getElementById('myform').reset();
    return false;
  
  } else if (pw.length < 10 && pw.match(/[A-Za-z]/g) && !pw.match(/[0-9]/g)) {
    document.getElementById("message5").textContent="Password must be atleast 10 characters and must include atleast one number";
    document.getElementById('myform').reset();
    return false;

  } else if (pw.length >= 10 && !pw.match(/[0-9]/g) && !pw.match(/[A-Za-z]/g)) {
    document.getElementById("message6").textContent="Password must include atleast one number and one number";
    document.getElementById('myform').reset();
    return false;

  } else if (pw.length >= 10 && !pw.match(/[0-9]/g) && pw.match(/[A-Za-z]/g)) {
    document.getElementById("message6").textContent="Password must include atleast one letter";
    document.getElementById('myform').reset();
    return false;

  } else if (pw.length >= 10 && pw.match(/[0-9]/g) && !pw.match(/[A-Za-z]/g)) {
    document.getElementById("message6").textContent="Password must include atleast one number";
    document.getElementById('myform').reset();
    return false;

  } else if (pw.length < 10) {
    document.getElementById("message7").textContent="Password must be atleast 10 characters";
    document.getElementById('myform').reset();
    return false;

  } else {
    alert("Password is accepted");
    return true;
  }
}

function eraseText() {
  if (document.getElementsByTagName("span").value == "") {
    return true;
  } else {
    document.getElementById("output").value = "";
  }
}
