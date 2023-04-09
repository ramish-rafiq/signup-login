function showSignupForm() {
    document.getElementById("signup-form").style.display = "flex";
    document.getElementById("login-form").style.display = "none";
}

function showLoginForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "flex";
}

function signup() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "home.html";
}

function login()
    var loginEmail = document.getElementById("login-email").value;
    var loginPassword = document.getElementById