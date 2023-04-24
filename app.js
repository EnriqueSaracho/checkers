let btn = true;
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

function showNavbar() {
  if (btn) {
    document.getElementById("secondaryNav").style.top = 0;
  } else {
    document.getElementById("secondaryNav").style.top = "-91.5vh";
  }
  btn = !btn;
}

function switchForm(btn) {
  if (btn === "signup") {
    signupBtn.style.backgroundColor = "#ffffff";
    signupBtn.style.boxShadow = "-5px 0px 5px -5px rgba(0, 0, 0, 0.5)";
    loginBtn.style.backgroundColor = "#cfcfcf";
    loginBtn.style.boxShadow = "none";
    signupForm.style.display = "flex";
    loginForm.style.display = "none";
  } else {
    loginBtn.style.backgroundColor = "#ffffff";
    loginBtn.style.boxShadow = "5px 0px 5px -5px rgba(0, 0, 0, 0.5)";
    signupBtn.style.backgroundColor = "#cfcfcf";
    signupBtn.style.boxShadow = "none";
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
  }
}

function addItem(item) {
  alert(`Added 1 ${item} to the cart!`);
}
