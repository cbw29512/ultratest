

function checkPassword() {

const pw = document.getElementById("password").value;

if (pw.length < 8) {
  alert("Password is not accepted");
  return false;

} else if (!pw.match(/[a-z]/g) && (/[A-Z]/g)) {
  alert("Password is not accepted");
  return false;
 
} else if (!pw.match(/[0-9]/g)) {
  alert("Password is not accepted");
  return false;

} else {
  alert("Password is accepted");
  return true;
}
}

