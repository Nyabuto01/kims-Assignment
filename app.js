function Login() {
    alert("Logged in successfully!");
    window.location.href = "Main.html";
}
function SignUp() {
    alert("Signed up and logged in successfully!");
    window.location.href = "Main.html";
}
function showSignUp() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
}
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signUpForm").style.display = "none";
}
