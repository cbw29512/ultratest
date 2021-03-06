function checkPassword() {
  const alphabet =
    "A, a, B, b, C, c, D, d, E, e, F, f, G, g, H, h, I, i, J, j, K, k, L, l, M, m, N, n, O, o, P, p, Q, q, R, r, S, s, T, t, U, u, V, v, W, w, X, x, Y, y, Z ,z";

  var pw = document.getElementById("password").value;

  // // check for an empty password
  // if (pw == "") {
  //   document.getElementById("message").innerHTML =
  //     "Fill in the password please!";
  //   return False;
  // }

  if (pw.length < 8) {
    console.log(pw);
    alert("Password length must be a minimun 8 characters!");
    
  } else if (pw == !isNaN) {
    console.log(pw);
    alert("Password must contain one number!");
    
  } else if (pw == alphabet) {
    console.log(pw);
    alert("Password must contain one letter!");

  } else {
    console.log(pw);
    alert("Password is correct!");
    
  }
}
