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
    alert("Password length must be a minimun 8 characters!");
  } else if (pw == !isNaN) {
    alert("Password must contain one number!");
    console.log(pw);
  } else if (pw == alphabet) {
    alert("Password must contain one letter!");
  } else {
    alert("Password is correct!");
  }
}