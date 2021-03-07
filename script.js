function checkPassword() {
  let usenam = document.getElementById("username").value;
  let pw = document.getElementById("password").value;

  if (usenam == "admin" && pw.length < 13 && !pw.match(/[!@#$%^&*]{3}/)) {
    document.getElementById("message3").textContent="Admin password must be atleast 13 characters long and contain atleast 3 special characrters";
    document.getElementById('myform').reset();
    console.log('false');
    return false;
    
  
  } else if (usenam == "admin" && pw.length >= 13 && !pw.match(/[!@#$%^&*]{3}/)) {
    document.getElementById("message4").textContent="Admin password must contain atleast 3 special character";
    document.getElementById('myform').reset();
    console.log('false');
    return false;
    
  
  } else if (usenam == "admin" && pw.length < 13 && pw.match(/[!@#$%^&*]{3}/)) {
    document.getElementById("message5").textContent="Admin password must be atleast 13 characters long";
    document.getElementById('myform').reset();
    console.log('false');
    return false;
    
    
  } else if (usenam == "admin" && pw.length >= 13 && pw.match(/[!@#$%^&*]{3}/)) {
    document.getElementById("message1").textContent="Admin password is accepted";
    document.getElementById('myform').reset();
    console.log('true');
    return true;
    

  } else if (pw.length < 10 && pw.match(/[A-Za-z]/g) && pw.match(/[0-9]/g)) {
    document.getElementById("message11").textContent="Password must be atleast 10 characters";
    document.getElementById('myform').reset();
    console.log('false');
    return false;
    

  } else if (pw.length < 10 && !pw.match(/[A-Za-z]/g) && pw.match(/[0-9]/g)) {
    document.getElementById("message6").textContent="Password must be atleast 10 characters and must include atleast one letter";
    document.getElementById('myform').reset();
    console.log('false');
    return false;
    
  
  } else if (pw.length < 10 && pw.match(/[A-Za-z]/g) && !pw.match(/[0-9]/g)) {
    document.getElementById("message7").textContent="Password must be atleast 10 characters and must include atleast one number";
    document.getElementById('myform').reset();
    console.log('false');
    return false;
    

  } else if (pw.length >= 10 && !pw.match(/[0-9]/g) && !pw.match(/[A-Za-z]/g)) {
    document.getElementById("message8").textContent="Password must include atleast one number and one number";
    document.getElementById('myform').reset();
    console.log('false');
    return false;
    

  } else if (pw.length >= 10 && !pw.match(/[0-9]/g) && pw.match(/[A-Za-z]/g)) {
    document.getElementById("message9").textContent="Password must include atleast one letter";
    document.getElementById('myform').reset();
    console.log('false');
    return false;
    

  } else if (pw.length >= 10 && pw.match(/[0-9]/g) && !pw.match(/[A-Za-z]/g)) {
    document.getElementById("message10").textContent="Password must include atleast one number";
    document.getElementById('myform').reset();
    console.log('false');
    return false;
    

  } else {
    document.getElementById("message2").textContent="Password is accepted";
    document.getElementById('myform').reset();
    console.log('true');
    return true;

  }
}

function clearAll()
{
    var ele= document.getElementsByClassName("warnings");
    for(var i=0;i<ele.length;i++)
    {
      ele[i].innerHTML='';
    }
}

